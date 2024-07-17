"use client";

import { useContext, useEffect, useState } from "react";
import { useFormState, useFormStatus } from "react-dom";

import loginUser from "@/actions/user/loginUser";

import Button from "../ui/form/Button";
import Input from "../ui/form/Input";
import { redirect } from "next/navigation";
import { UserContext, useUser } from "@/context/userContext";
import Link from "next/link";

const FormButton = () => {
  const { pending } = useFormStatus();
  return (
    <Button buttonType="primary" extraClass="m-auto mt-5" type="submit" disabled={pending}>
      {pending ? "Entrando..." : "Entrar"}
    </Button>
  );
};

export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { setUserData } = useUser();

  const [state, action] = useFormState(loginUser, {
    ok: false,
    error: "",
    user: null,
  });

  useEffect(() => {
    if (state.ok) window.location.href = "/sessao/minha-conta";
  }, [state.ok]);

  return (
    <form action={action} className="flex flex-col w-full">
      <label htmlFor="email">
        E-mail: <span className="text-red-500">*</span>
      </label>
      <Input
        type="email"
        name="email"
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="mb-3"
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
      <Link href="/criar-usuario" className="text-white">
        Não possui conta? Cadastre-se
      </Link>
      <p>{state.error}</p>
    </form>
  );
}
