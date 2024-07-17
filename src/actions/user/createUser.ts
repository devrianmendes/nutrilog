"use server";

//O servidor está sempre retornando um resposta status 200. ver o porque
import { prismaClient } from "@/prisma";
import { hash } from "bcrypt";
import loginUser from "./loginUser";

export default async function createUser(state: {}, formData: FormData) {
  const user = {
    completeName: formData.get("completeName") as string | null,
    email: formData.get("email") as string | null,
    password: formData.get("password") as string | null,
  };

  try {
    if (!user.completeName || !user.email || !user.password) {
      throw new Error("Preencha os dados.");
    }

    const emailAlreadyExist = await prismaClient.users.findFirst({
      where: {
        email: user.email,
      },
    });

    if (emailAlreadyExist) {
      throw new Error("E-mail já cadastrado.");
    }

    const saltRounds = 10;
    const hashedPassword = await hash(user.password, saltRounds);

    const postUser = await prismaClient.users.create({
      data: {
        completeName: user.completeName,
        email: user.email,
        password: hashedPassword,
      },
      select: {
        id: true,
        completeName: true,
        email: true,
      },
    });

    await loginUser({ok: true, error: '', data: null}, formData);

    return {
      ok: true,
      error: "",
      user: postUser,
    };
  } catch (error: unknown) {
    if (error instanceof Error) {
      return {
        ok: false,
        error: error.message,
        user: null,
      };
    } else {
      console.error("Erro genérico ao criar usuário");
      return {
        ok: false,
        error: "Erro genérico",
        user: null,
      };
    }
  }
}
