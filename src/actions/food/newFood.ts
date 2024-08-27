"use server";

import { foodGroups } from "@/constants/foodGroups";
import { prismaClient } from "@/prisma";
import { NewFoodProps } from "@/types/types";
import getUser from "../user/getUser";

export default async function newFood(food: NewFoodProps) {
  // console.log(food.name);
  // console.log(food.kcal);
  // console.log(food.carb);
  // console.log(food.prot);
  // console.log(food.gord);
  // console.log(food.typeCount);
  // console.log(food.prepareMode);
  // console.log(food);

  try {
    const user = await getUser();
    if (!user) return Error;
    const getCategory = await prismaClient.foodCategory.findFirst({
      where: {
        name: food.foodGroup,
      },
    });
    if (!getCategory) return Error;

    const setFood = await prismaClient.foodItems.create({
      data: {
        name: food.name,
        calories: food.kcal,
        banner: food.banner,
        foodCategoryId: getCategory.id,
        createdBy: user.id,
      },
    });
  } catch (error: unknown) {
    console.log(error);
  }
}
