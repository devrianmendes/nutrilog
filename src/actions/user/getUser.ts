import { cookies } from "next/headers";
import validateToken from "./validateToken";
import { prismaClient } from "@/prisma";

export default async function getUser() {
  try {
    const token = cookies().get("Auth")?.value;

    if (!token) return;

    const validated = await validateToken(token);

    const user = await prismaClient.users.findFirst({
      where: {
        id: validated,
      },
      select: {
        id: true,
        email: true,
        completeName: true,
        role: true
      }
    });

    return user;
  } catch (error: unknown) {
    throw new Error("Usuário inválido.");
  }
}
