"use server";

import { prismaClient } from "@/prisma";
import getUser from "../user/getUser";

export default async function getFoodList() {
  try {
    // const user = await getUser();
    // if (!user) throw new Error("Usuário não está logado.");
 
    // const getList = await prismaClient.foodItems.findMany({
    //   where: {
    //     createdBy: user.id
    //   },
    // });

    // return getList;

    const setPreparation = await prismaClient.preparation.createMany({
      data: [
        {
          name: "submersionFrying",
          description: "Alimento completamente submerso em gordura.",
          additionalCalories: 50,
        },
      ]
    })
  } catch (error) {

  }
}
