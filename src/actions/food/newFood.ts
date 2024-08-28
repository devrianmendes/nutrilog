"use server";

import { prismaClient } from "@/prisma";
import { NewFoodProps } from "@/types/types";
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
        foodCategoryId: getCategory.id,
        createdBy: user.id,
      },
      select: {
        name: true
      }
    });

    if (!setFood) throw new Error("Erro ao cadastrar alimento.");
    console.log(setFood)
    return { ok: true, status: 200, message: `Alimento ${setFood.name} cadastrado.`}
  } catch (error: unknown) {
    if (error instanceof Error)
      return { ok: false, status: 400, message: error.message };
  }
}
