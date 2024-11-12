"use server";

import { prismaClient } from "@/prisma";
import getFoodList from "./getFoodList";

export default async function deleteFood(foodIndex: number) {
  try {
    const { data } = await getFoodList();
    if (!data)
      throw new Error(
        "Erro ao carregar a lista de alimentos. Tente novamente."
      );

    const foundFood = data.find((eachFood, i) => i === foodIndex);
    if (!foundFood)
      throw new Error(
        "Erro ao encontrar o alimento na lista. Tente novamente."
      );

    const getPrepMethodId = await prismaClient.prepMethod.findFirst({
      where: {
        name: foundFood.prepMethod,
      },
    });
    if (!getPrepMethodId)
      throw new Error(
        "Erro ao carregar ID do método de preparo. Tente novamente."
      );

    const delPrepMethodResponse = await prismaClient.foodPrepMethod.deleteMany({
      where: {
        foodItemId: foundFood.id,
        prepMethodId: getPrepMethodId.id,
      },
    });

    const delNutrientsResponse = await prismaClient.nutrient.delete({
      where: {
        foodItemId: foundFood.id,
      },
    });

    const delFoodItem = await prismaClient.foodItem.delete({
      where: {
        id: foundFood.id,
      },
    });

    if (!delPrepMethodResponse || !delNutrientsResponse || !delFoodItem)
      throw new Error("Erro ao deletar alimento");

    return {
      ok: true,
      status: 200,
      message: `O alimento ${foundFood.name} ${foundFood.prepMethod} foi deletado!`,
      data: null,
    };
  } catch (error) {
    if (error instanceof Error) {
      return {
        ok: true,
        status: 200,
        message: error.message,
        data: null,
      };
    } else {
      return {
        ok: true,
        status: 200,
        message: "Erro genérico.",
        data: null,
      };
    }
  }
}
