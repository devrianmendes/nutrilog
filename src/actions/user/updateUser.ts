"use server";

import { cookies } from "next/headers";
import validateToken from "./validateToken";
import { prismaClient } from "@/prisma";

export default async function updateUser(state: {}, formData: FormData) {
  try {
    const user = {
      uf: formData.get("userUf") as string | null,
      city: formData.get("userCity") as string | null,
    };

    if (!user.uf || !user.city) {
      throw new Error("Dados inválidos.");
    }

    const token = cookies().get("Auth")?.value;

    if (!token) {
      throw new Error("O usuário precisa estar logado.");
    }

    const validatedToken = await validateToken(token);

    const targetUser = await prismaClient.userData.findFirst({
      where: {
        userId: validatedToken,
      },
    });

    if (!targetUser) {
      throw new Error("Usuário não cadastrado.");
    }

    if (targetUser.city === user.city && targetUser.state === user.uf) {
      throw new Error("O usuário já está cadastrado nessa cidade.");
    }

    const updatedUser = await prismaClient.userData.update({
      where: {
        userId: validatedToken,
      },
      data: {
        state: user.uf,
        city: user.city,
      },
    });

    return {
      ok: true,
      error: "",
      user: updatedUser,
    };
  } catch (error: unknown) {
    if (error instanceof Error) {
      return {
        ok: false,
        error: error.message,
        user: null,
      };
    } else {
      console.error("Erro genérico ao atualizar usuário");
      return {
        ok: false,
        error: "Erro genérico",
        user: null,
      };
    }
  }

  // try {
  //   const token = cookies().get("Auth")?.value;

  //   if (!token) return;
  //   let user = {};
  //   const validated = await validateToken(token);

  //   const userResponse = await prismaClient.user.findFirst({
  //     where: {
  //       id: validated,
  //     },
  //     select: {
  //       id: true,
  //       email: true,
  //       completeName: true,
  //       role: true,
  //     },
  //   });

  //   if (!userResponse) {
  //     return null;
  //   }

  //   const userDataResponse = await prismaClient.userData.findFirst({
  //     where: {
  //       userId: userResponse.id,
  //     },
  //     select: {
  //       birth: true,
  //       goal: true,
  //       activityLevel: true,
  //       gender: true,
  //       city: true,
  //       state: true,
  //     },
  //   });

  //   if (!userDataResponse) return null;

  //   user = {
  //     id: userResponse.id,
  //     email: userResponse.email,
  //     completeName: userResponse.completeName,
  //     weight: userDataResponse.weight,
  //     height: userDataResponse.height,
  //     birth: userDataResponse.birth,
  //     goal: userDataResponse.goal,
  //     activityLevel: userDataResponse.activityLevel,
  //     gender: userDataResponse.gender,
  //     city: userDataResponse.city,
  //     state: userDataResponse.state,
  //   };

  //   return user;
  // } catch (error: unknown) {
  //   throw new Error("Usuário inválido.");
  // }
}
