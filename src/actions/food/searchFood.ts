"use server";

import { prismaClient } from "@/prisma";

export default async function searchFood(param: string) {
  console.log(param);

  const result = await prismaClient.foodItem.findMany({
    where: {
      name: param,
    },
    select: {
      id: true,
      name: true,
      kcal: true,
      banner: true,
      foodCategoryId: true,
      unity: true,
      visibleFat: true,
      public: true,
      publish: true,
      status: true,
    },
  });

  const a = result.map((eachItem) => {
    eachItem.kcal = eachItem.kcal.toString()
  })

  return result;
}
