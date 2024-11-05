"use server";

import { cookies } from "next/headers";
import validateToken from "./validateToken";
import { prismaClient } from "@/prisma";
import { UserDataFormatterToClient } from "@/functions/userDataFormatter";
import { UserDataProps } from "@/types/userTypes";
import LogoutUser from "./logoutUser";

export default async function getUser() {
  try {
    const token = cookies().get("Auth")?.value;
    if (!token) return;

    const validated = await validateToken(token);

    const userResponse = await prismaClient.user.findFirst({
      where: {
        id: validated,
      },
      select: {
        id: true,
        email: true,
        completeName: true,
        role: true,
      },
    });

    if (!userResponse) throw new Error("O usuário precisa estar logado.");

    const userDataResponse = await prismaClient.userData.findFirst({
      where: {
        userId: userResponse.id,
      },
      select: {
        birth: true,
        goal: true,
        activityLevel: true,
        gender: true,
        city: true,
        state: true,
      },
    });

    if (!userDataResponse) throw new Error("O usuário precisa estar logado.");
    
    const userMeasurementResponse = await prismaClient.bodyMeasurement.findFirst({
      where: {
        userId: userResponse.id,
      },
      select: {
        weight: true,
        height: true,
      }
    });

    if (!userMeasurementResponse) throw new Error("O usuário precisa estar logado.");


    // console.log(userResponse)
    // console.log(userDataResponse)
    // console.log(userMeasurementResponse)
    
    let user: UserDataProps = {
      ...userResponse,
      ...userDataResponse,
      ...userMeasurementResponse
    };

    user = UserDataFormatterToClient(user);

    // console.log(user)

    return user;
  } catch (error: unknown) {
    LogoutUser();
    throw new Error("Usuário inválido.");
  }
}
