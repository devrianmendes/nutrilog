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
    confirmPassword: formData.get("confirmPassword") as string | null,
    gender: formData.get("gender") as string | null,
    birth: formData.get("birth") as string | null,
    goal: formData.get("goal") as string | null,
    activity: formData.get("activity") as string | null,
    weight: formData.get("weight") as string | null,
    height: formData.get("height") as string | null,
    userState: formData.get("userState") as string | null,
    userCity: formData.get("userCity") as string | null,
    terms: formData.get("terms") === "on" ? true : false,
  };

  console.log(formData);

  const dataFormat = (value: string) => {
    const birth = new Date(value).toISOString();
    console.log(birth, 'on function')
    return birth;
  }

  try {
    if (!user.terms)
      throw new Error("Você precisa aceitar os termos e condições.");

    if (
      !user.completeName ||
      !user.email ||
      !user.password ||
      !user.confirmPassword ||
      !user.gender ||
      !user.birth ||
      !user.goal ||
      !user.activity ||
      !user.weight ||
      !user.height ||
      !user.userState ||
      !user.userCity
    ) {
      throw new Error("Preencha os dados.");
    }

    user.birth = dataFormat(user.birth);

    // console.log(
    //   user.completeName,
    //   user.email,
    //   user.password,
    //   user.confirmPassword,
    //   user.gender,
    //   user.userState,
    //   user.userCity,
    //   user.birth,
    //   user.goal,
    //   user.activity,
    //   user.weight,
    //   user.height,
    //   user.terms,
    //   "on server"
    // );

    if (user.password !== user.confirmPassword)
      throw new Error("As senhas estão diferentes.");

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

    const postUserData = await prismaClient.userData.create({
      data: {
        userId: postUser.id,
        height: user.height,
        weight: user.weight,
        birth: user.birth,
        goal: user.goal,
        activityLevel: user.activity,
        gender: user.gender,
        state: user.userState,
        city: user.userCity,
      },
    });

    await loginUser({ ok: true, error: "", data: null }, formData);

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
