import { cookies } from "next/headers";
import validateToken from "./validateToken";
import { prismaClient } from "@/prisma";
import { UserDataFormatterToClient } from "@/functions/userDataFormatter";
import { UserDataProps } from "@/types/types";
import LogoutUser from "./logoutUser";

export default async function getUser() {
  try {
    const token = cookies().get("Auth")?.value;
    if (!token) return;

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

    if (!userResponse) throw new Error("O usuário precisa estar logado.");

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

    if (!userDataResponse) throw new Error("O usuário precisa estar logado.");

    let user: UserDataProps = {
      ...userResponse,
      ...userDataResponse,
    };

    user = UserDataFormatterToClient(user);

    return user;
  } catch (error: unknown) {
    LogoutUser();
    // throw new Error("Usuário inválido.");
  }
}
