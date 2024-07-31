import { cookies } from "next/headers";
import validateToken from "./validateToken";
import { prismaClient } from "@/prisma";

export default async function updateUser() {
  try {
    const token = cookies().get("Auth")?.value;

    if (!token) return;
    let user = {};
    const validated = await validateToken(token);

    const userResponse = await prismaClient.users.findFirst({
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

    if (!userResponse) {
      return null;
    }

    const userDataResponse = await prismaClient.userData.findFirst({
      where: {
        userId: userResponse.id,
      },
      select: {
        weight: true,
        height: true,
        birth: true,
        goal: true,
        activityLevel: true,
        gender: true,
        city: true,
        state: true,
      },
    });

    if (!userDataResponse) return null;
    
    user = {
      id: userResponse.id,
      email: userResponse.email,
      completeName: userResponse.completeName,
      weight: userDataResponse.weight,
      height: userDataResponse.height,
      birth: userDataResponse.birth,
      goal: userDataResponse.goal,
      activityLevel: userDataResponse.activityLevel,
      gender: userDataResponse.gender,
      city: userDataResponse.city,
      state: userDataResponse.state,
    };

    return user;
  } catch (error: unknown) {
    throw new Error("Usuário inválido.");
  }
}
