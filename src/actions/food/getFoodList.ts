"use server";

import { prismaClient } from "@/prisma";
import getUser from "../user/getUser";
import { NewFoodProps, StoredFoodProps } from "@/types/foodTypes";

export default async function getFoodList() {
  try {
    const user = await getUser();
    if (!user) throw new Error("Usuário não está logado.");

    const getList = await prismaClient.foodItem.findMany({
      where: {
        createdBy: user.id,
      },
      select: {
        name: true,
        calories: true,
        banner: true,
        foodCategoryId: true,
        unity: true, 
        visibleFat: true,
        public: true,
        publish: true,
        status: true
      },
    });

    if (!getList) throw new Error("Erro ao filtrar alimentos.");


    const convertFoodList = (foodList: StoredFoodProps[]) => {
      return foodList.map((food) => ({
        ...food,
        calories: food.calories.toString(),
      }));
    };

    // const getCategory = await prismaClient.foodCategory.findFirst({
    //   where: {
    //     id: getList.
    //   }
    // })

    // const teste = convertFoodList(getList)
    // console.log(teste, 'teste');
    return convertFoodList(getList);

    // const setPreparation = await prismaClient.preparation.createMany({
    //   data: [
    //     {
    //       name: "submersionFrying",
    //       description: "Alimento completamente submerso em gordura.",
    //       additionalCalories: 50,
    //     },
    //   ]
    // })
  } catch (error) {}
}
