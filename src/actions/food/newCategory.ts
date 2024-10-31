"use server";

import { prismaClient } from "../../prisma/index";

export default async function newCategory() {
  const teste = await prismaClient.foodCategory.createMany({
    data: [
      {
        name: "1",
        description: "Cereais, pães e tubérculos",
      },
      {
        name: "2",
        description: "Hortaliças",
      },
      {
        name: "3",
        description: "Frutas",
      },
      {
        name: "4",
        description: "Leguminosas",
      },
      {
        name: "5",
        description: "Carnes e ovos",
      },
      {
        name: "6",
        description: "Leite e derivados",
      },
      {
        name: "7",
        description: "Óleos e gorduras",
      },
      {
        name: "8",
        description: "Açucares e doces",
      },
    ],
  });
}
