"use server";

import { prismaClient } from "@/prisma";
import { compare } from "bcrypt";
import { sign } from "jsonwebtoken";
import { cookies } from "next/headers";

export default async function loginUser(state: {}, formData: FormData) {
  const user = {
    email: formData.get("email") as string | null,
    password: formData.get("password") as string | null,
  };

  try {
    //VERIFICANDO SE OS DADOS FORAM PREENCHIDOS
    if (!user.email || !user.password) {
      throw new Error("Preencha os dados.");
    }

    //VERIFICANDO SE O EMAIL EXISTE NO DB
    const authUser = await prismaClient.users.findFirst({
      where: {
        email: user.email,
      },
    });

    //SE NÃO EXISTIR, RETORNA ERRO
    if (!authUser) {
      throw new Error("Usuário ou senha incorretos.");
    }

    //EXISTINDO, VERIFICA SE A SENHA ESTÁ CORRETA
    const authPassword = await compare(user.password, authUser.password);

    //ESTANDO ERRADA, RETORNA ERRO
    if (!authPassword) {
      throw new Error("Usuário ou senha incorretos.");
    }

    //ESTANDO CERTA, GERA O TOKEN
    const payload = {
      userId: authUser.id,
      userName: authUser.completeName,
      userEmail: authUser.email,
    };
    const secret = process.env.SECRET;
    const options = {
      subject: authUser.id,
      expiresIn: "30d",
    };

    const token = sign(payload, secret!, options);

    cookies().set("Auth", token, {
      httpOnly: true,
      secure: true,
      sameSite: "lax",
      maxAge: 60 * 60 * 24,
    });

    return {
      ok: true,
      error: "",
      user: {
        id: authUser.id,
        name: authUser.completeName,
        banner: authUser.banner,
      },
    };
  } catch (error: unknown) {
    if (error instanceof Error) {
      return {
        ok: true,
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
