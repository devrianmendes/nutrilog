"use server";

import { prismaClient } from "@/prisma";
import { NewFoodProps } from "@/types/foodTypes";
import getUser from "../user/getUser";
import { foodGroups } from "@/constants/foodGroups";
import { error } from "console";

export default async function newFood(food: NewFoodProps) {
  // const prepMethod = await prismaClient.prepMethod.createMany({
  //   data: [
  //     {
  //       name: "Cozido",
  //       description:
  //         "Sem mudanças significativas nas calorias ou macronutrientes.",
  //       factorValueMin: 0,
  //       factorValueMax: 0,
  //     },
  //     {
  //       name: "Grelhado",
  //       description:
  //         "Ótima forma de cozimento, onde a gordura escorre e não fica na base do alimento.",
  //       factorValueMin: 10,
  //       factorValueMax: 25,
  //     },
  //     {
  //       name: "Assado",
  //       description:
  //         "Diferente de grelhar, a gordura derretida escorre porém fica no refratário.",
  //       factorValueMin: 10,
  //       factorValueMax: 15,
  //     },
  //     {
  //       name: "Air fryer",
  //       description: "Perfeito para alimentos mais fit.",
  //       factorValueMin: 5,
  //       factorValueMax: 20,
  //     },
  //     {
  //       name: "Frito (Sem gordura)",
  //       description:
  //         "Sem mudanças significativas nas calorias ou macronutrientes",
  //       factorValueMin: 0,
  //       factorValueMax: 0,
  //     },
  //     {
  //       name: "Frito (untado)",
  //       description:
  //         "Pouca absorção devido a quantidade de gordura utilizada, aprox. 40kcal (1 col. de chá de óleo).",
  //       factorValueMin: 0,
  //       factorValueMax: 0,
  //     },
  //     {
  //       name: "Frito (fritura rasa)",
  //       description:
  //         "Absorsão de aprox. 30% de kcal, apenas na gordura absorvida pelo alimento.",
  //       factorValueMin: 30,
  //       factorValueMax: 30,
  //     },
  //     {
  //       name: "Frito (imersão)",
  //       description:
  //         "Absorsão de aprox. 50% de kcal, apenas na gordura absorvida pelo alimento.",
  //       factorValueMin: 50,
  //       factorValueMax: 50,
  //     },
  //   ],
  // });

  try {
    // checking if all the data is here
    if (
      !food.name ||
      !food.carb ||
      !food.prot ||
      !food.gord ||
      !food.fibr ||
      !food.quantity ||
      !food.foodGroup ||
      !food.kcal ||
      !food.prepareMode ||
      !food.unity
      // !food.visibleFat
      // !food.publish
    ) {
      throw new Error("Preencha todos os campos.");
    }

    //getting user id
    const user = await getUser();
    if (!user) throw new Error("Usuário inválido.");
    const { id } = user;

    //default values for publish and pending (already defined in DB but i have to create these variables anyway)
    let setPublish = false;
    let setPending = "";

    //Changing their default values depending of the user's setting
    if (food.publish) {
      setPublish = true;
      setPending = "pending";
    }

    const categories = {
      1: "f1a78ded-a2a5-46ea-a858-2f01ce10d7b6",
      2: "b47c5f04-189e-4628-9a4c-5bc2e4e53cd4",
      3: "0f48ee18-3abb-4154-bc51-cd4bda335649",
      4: "6b4bccf9-4d6d-4001-97b2-27932c99be7c",
      5: "ed0e0b36-7d1a-49cc-896c-4b1b96390ade",
      6: "470d5910-f6e9-4d36-8ba9-84df0c04ea20",
      7: "cfa5a7cd-141c-44c0-893f-11f6d8571137",
      8: "cd1ced6b-b1dd-4b47-9584-e1a7db924014",
    };

    const getCategory = await prismaClient.foodCategory.findFirst({
      where: {
        name: food.foodGroup,
      },
      select: {
        id: true,
      },
    });

    if (!getCategory) throw new Error("Categoria inválida.");

    //saving the food
    console.log("chegou até aqui");
    const setFood = await prismaClient.foodItem.create({
      data: {
        name: food.name,
        calories: food.kcal,
        banner: food.banner,
        createdBy: id,
        unity: food.unity,
        foodCategoryId: getCategory.id,
        visibleFat: food.visibleFat,
        publish: setPublish,
        status: setPending,
      },
      select: {
        id: true,
        name: true,
      },
    });

    if (!setFood) throw new Error("Erro ao salvar o alimento.");

    //savind the food nutrients
    const setFoodNutrients = await prismaClient.nutrient.create({
      data: {
        carb: food.carb,
        prot: food.prot,
        fat: food.gord,
        fibr: food.fibr,
        foodItemId: setFood.id,
      },
    });

    if (!setFoodNutrients)
      throw new Error("Erro ao salvar os nutrientes do alimento.");

    //finding the food preparation mode
    const getMethod = await prismaClient.prepMethod.findFirst({
      where: {
        name: food.prepareMode,
      },
    });

    if (!getMethod) throw new Error("Método de preparo não existe.");

    //getting new kcal values
    let newFoodKcal = 0;
    let newFoodGord = 0;

    // console.log(food.gord, "gordura antes do preparo")
    // console.log(food.kcal, "kcal antes do preparo")

    const differ = food.visibleFat
      ? (food.kcal * getMethod.factorValueMax) / 100
      : (food.kcal * getMethod.factorValueMin) / 100;
    if (getMethod.name.includes("Frito")) {
      newFoodGord = food.gord + differ / 9;
      newFoodKcal = food.kcal + differ;
    } else {
      newFoodGord = food.gord - differ / 9;
      newFoodKcal = food.kcal - differ;
    }

    // console.log(+newFoodGord.toFixed(1), "gordura depois do preparo")
    // console.log(+newFoodKcal.toFixed(1), "kcal depois do preparo")

    // console.log(newFoodKcal)

    const setFoodPrepMethod = await prismaClient.foodPrepMethod.create({
      data: {
        adjustedKcal: newFoodKcal,
        adjustedFat: newFoodGord,
        foodItemId: setFood.id,
        prepMethodId: getMethod.id,
      },
    });

    if (!setFoodPrepMethod)
      throw new Error("Erro ao registrar o foodPrepMethod.");

    return {
      ok: true,
      status: 200,
      message: setFood.name,
    };
  } catch (error) {
    if (error instanceof Error) {
      return { ok: false, status: 500, message: error.message };
    } else {
      // console.error("Erro genérico ao criar usuário");
      return {
        ok: false,
        status: 500,
        message: "Erro genérico ao salvar o alimento.",
      };
    }
  }

  //   // const nutrientsId = {
  //   //   carb: "c6adef10-6c2d-4a77-b93d-db06d5333ad4",
  //   //   prot: "8d1e6180-4dfa-4cf4-b0bd-d7b8ce0e6620",
  //   //   gord: "f6331b79-0440-403e-a92a-282083cdef26",
  //   //   fibr: "80330272-fd13-4d4b-bb28-03f4f2627888",
  //   // };

  //   // const setFoodNutrients = await prismaClient.foodNutrients.createMany({
  //   //   data: [
  //   //     {
  //   //       quantity: food.carb,
  //   //       foodItemId: setFood.id,
  //   //       nutrientsId: nutrientsId.carb,
  //   //       nutrientName: "carb",
  //   //     },
  //   //     {
  //   //       quantity: food.prot,
  //   //       foodItemId: setFood.id,
  //   //       nutrientsId: nutrientsId.prot,
  //   //       nutrientName: "prot",
  //   //     },
  //   //     {
  //   //       quantity: food.gord,
  //   //       foodItemId: setFood.id,
  //   //       nutrientsId: nutrientsId.gord,
  //   //       nutrientName: "gord",
  //   //     },
  //   //   ],
  //   // });

  //   // if(!setFoodNutrients) throw new Error("Erro ao salvar os nutrientes do alimento!")

  // return { ok: true, status: 200, message: `Alimento ${setFood.name} salvo.`}
  // } catch (error: unknown) {
  //   // if (error instanceof Error)
  //   //   return { ok: false, status: 400, message: error.message };
  // }

  // return { ok: false, status: 500, message: "Erro desconhecido." };
}
