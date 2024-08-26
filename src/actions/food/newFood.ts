"use server";

import { prismaClient } from "@/prisma";
import { NewFoodProps } from "@/types/types";

export default async function newFood(food: NewFoodProps) {
  console.log(food.name);
  console.log(food.kcal);
  console.log(food.carb);
  console.log(food.prot);
  console.log(food.gord);
  console.log(food.typeCount);
  console.log(food.prepareMode);

  try {
    const set = prismaClient.foodCategory.create({
      data: {
        name: "cereais",
      },
    });
  } catch (error: unknown) {
    console.log(error);
  }
}
