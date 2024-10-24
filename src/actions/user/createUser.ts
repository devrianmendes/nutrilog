"use server";

//O servidor está sempre retornando um resposta status 200. ver o porque
import { prismaClient } from "@/prisma";
import { hash } from "bcrypt";
import loginUser from "./loginUser";

import {UserDataFormatterToClient, UserDataFormatterToServer} from "@/functions/userDataFormatter";
import { redirect } from "next/navigation";


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
    warning: formData.get("warning") === "on" ? true : false,
  };

  console.log(user)

  try {
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

    if(!user.warning) {
      throw new Error("Leia o aviso.");
    }

    if (user.password !== user.confirmPassword)
      throw new Error("As senhas não conferem.");

    if (!user.terms)
      throw new Error("Você precisa aceitar os termos e condições.");

    const validUser = {
      completeName: user.completeName,
      email: user.email,
      password: user.password,
      confirmPassword: user.confirmPassword,
      gender: user.gender,
      birth: user.birth,
      goal: user.goal,
      activity: user.activity,
      weight: user.weight,
      height: user.height,
      userState: user.userState,
      userCity: user.userCity,
      terms: user.terms,
    };

    UserDataFormatterToServer(validUser);

    const emailAlreadyExist = await prismaClient.user.findFirst({
      where: {
        email: validUser.email,
      },
    });

    if (emailAlreadyExist) {
      throw new Error("E-mail já cadastrado.");
    }

    const saltRounds = 10;
    const hashedPassword = await hash(validUser.password, saltRounds);

    console.log(validUser)

    const postUser = await prismaClient.user.create({
      data: {
        completeName: validUser.completeName,
        email: validUser.email,
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
        birth: validUser.birth,
        goal: validUser.goal,
        activityLevel: validUser.activity,
        gender: validUser.gender,
        state: validUser.userState,
        city: validUser.userCity,
      },
    });

    console.log(postUserData, 'postuserData')

    const postUserMeasurements = await prismaClient.bodyMeasurement.create({
      data: {
        height: validUser.height,
        weight: validUser.weight,
        userId: postUser.id
      }
    })

    console.log(postUserMeasurements)

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
