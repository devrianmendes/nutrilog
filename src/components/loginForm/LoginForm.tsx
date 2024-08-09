"use client";

import { useEffect, useState } from "react";
import { useFormState, useFormStatus } from "react-dom";

import loginUser from "@/actions/user/loginUser";

import Button from "../ui/button";
import Input from "../ui/input";
import Link from "next/link";

const FormButton = () => {
  const { pending } = useFormStatus();
  return (
    <Button
      buttonType="primary"
      extraClass="m-auto mt-5"
      type="submit"
      disabled={pending}
    >
      {pending ? "Entrando..." : "Entrar"}
    </Button>
  );
};

export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [state, action] = useFormState(loginUser, {
    ok: false,
    error: "",
    user: null,
  });

  //VERIFICAR - Redirect não funciona, o menu não muda após o login
  useEffect(() => {
    if (state.ok) window.location.href = "/sessao/dashboard";
  }, [state.ok]);

  return (
    <form action={action} className="flex flex-col w-full max-w-xl">
      <label htmlFor="email">
        E-mail: <span className="text-red-500">*</span>
      </label>
      <Input
        type="email"
        name="email"
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        extraClass="mb-3"
      ></Input>
      <label htmlFor="password">
        Senha: <span className="text-red-500">*</span>
      </label>
      <Input
        type="password"
        name="password"
        required
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      ></Input>
      <FormButton />
      <Link
        href="/criar-usuario"
        className="m-auto text-midGreen hover:underline"
      >
        Não possui conta? Cadastre-se
      </Link>
      <p>{state.error}</p>
    </form>
  );
}
