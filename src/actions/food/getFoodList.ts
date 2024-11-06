"use server";

import { prismaClient } from "@/prisma";
import getUser from "../user/getUser";
import {
  NewFoodProps,
  StoredFoodProps,
  StoredNutrientsProps,
} from "@/types/foodTypes";
import { categoryList } from "@/constants/categoryList";

type CombinedFoodNutrientProps = StoredFoodProps & StoredNutrientsProps;

export default async function getFoodList() {
  try {
    const user = await getUser();
    if (!user) throw new Error("Usuário não está logado.");

    const convertKcalToString = (foodList: StoredFoodProps[]) => {
      return foodList.map((food) => ({
        ...food,
        calories: food.calories.toString(),
      }));
    };

    const foodListResponse = await prismaClient.foodItem.findMany({
      where: {
        createdBy: user.id,
      },
      select: {
        id: true,
        name: true,
        calories: true,
        banner: true,
        foodCategory: {
          select: {
            name: true,
          },
        },
        unity: true,
        visibleFat: true,
        public: true,
        publish: true,
        status: true,
      },
    });

    if (foodListResponse.length === 0) {
      throw new Error("Você ainda não adicionou nenhum alimento. 😔");
    }

    const foodIds = foodListResponse.map((eachFood) => eachFood.id);

    const nutrientsResponse = await prismaClient.nutrient.findMany({
      where: {
        foodItemId: {
          in: foodIds,
        },
      },
      select: {
        foodItemId: true,
        prot: true,
        carb: true,
        fat: true,
        fibr: true,
      },
    });

    if (!nutrientsResponse) throw new Error("Erro ao encontrar os nutrientes.");

    const nutrientsMap = new Map<string, (typeof nutrientsResponse)[0]>();
    nutrientsResponse.forEach((eachNutrient) => {
      nutrientsMap.set(eachNutrient.foodItemId, eachNutrient);
    });

    const foodList = foodListResponse.map((eachFood) => {
      const matchingNutrient = nutrientsMap.get(eachFood.id);

      return {
        ...eachFood,
        foodCategoryId: eachFood.foodCategory.name,
        calories: eachFood.calories.toString(),
        prot: (matchingNutrient?.prot ?? 0).toString(),
        carb: (matchingNutrient?.carb ?? 0).toString(),
        fat: (matchingNutrient?.fat ?? 0).toString(),
        fibr: (matchingNutrient?.fibr ?? 0).toString(),
      };
    });

    console.log(foodList)

    return {
      ok: true,
      status: 200,
      message: "Fetch OK!",
      data: foodList
    };
  } catch (error) {
    if (error instanceof Error) {
      return {
        ok: true,
        status: 200,
        message: error.message,
        data: null
      };
    } else {
      return {
        ok: true,
        status: 200,
        message: "Erro genérico.",
        data: null
      };
    }
  }
}
