"use server";

import { prismaClient } from "@/prisma";
import { NewFoodProps } from "@/types/foodTypes";
import getUser from "../user/getUser";

export default async function newFood(food: NewFoodProps) {
  try {
    const user = await getUser();

    if (!user) throw new Error("Usuário inválido.");

    const getCategory = await prismaClient.foodCategory.findFirst({
      where: {
        name: food.foodGroup,
      },
    });

    if (!getCategory) throw new Error("Erro ao cadastrar categoria.");

    const setFood = await prismaClient.foodItems.create({
      data: {
        name: food.name,
        calories: food.kcal,
        banner: food.banner,
        unity: food.unity,
        foodCategoryId: getCategory.id,
        createdBy: user.id,
      },
      select: {
        id: true,
        name: true
      }
    });

    if (!setFood) throw new Error("Erro ao salvar o alimento.");

    const nutrientsId = {
      carb: "c6adef10-6c2d-4a77-b93d-db06d5333ad4",
      prot: "8d1e6180-4dfa-4cf4-b0bd-d7b8ce0e6620",
      gord: "f6331b79-0440-403e-a92a-282083cdef26",
      fibr: "80330272-fd13-4d4b-bb28-03f4f2627888",
    };

    const setFoodNutrients = await prismaClient.foodNutrients.createMany({
      data: [
        {
          quantity: food.carb,
          foodItemId: setFood.id,
          nutrientsId: nutrientsId.carb,
          nutrientName: "carb",
        },
        {
          quantity: food.prot,
          foodItemId: setFood.id,
          nutrientsId: nutrientsId.prot,
          nutrientName: "prot",
        },
        {
          quantity: food.gord,
          foodItemId: setFood.id,
          nutrientsId: nutrientsId.gord,
          nutrientName: "gord",
        },
      ],
    });

    if(!setFoodNutrients) throw new Error("Erro ao salvar os nutrientes do alimento!")

    return { ok: true, status: 200, message: `Alimento ${setFood.name} salvo.`}
  } catch (error: unknown) {
    if (error instanceof Error)
      return { ok: false, status: 400, message: error.message };
  }

  return { ok: false, status: 500, message: "Erro desconhecido." };
}
