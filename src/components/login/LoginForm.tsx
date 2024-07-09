"use client";

import { useState } from "react";
import { useFormState, useFormStatus } from "react-dom";

import loginUser from "@/actions/user/loginUser";

import Button from "../ui/form/Button";
import Input from "../ui/form/Input";

const FormButton = () => {
  const { pending } = useFormStatus();
  return (
    <Button className="bg-blue-600" type="submit" disabled={pending}>
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

  return (
    <form action={action} className="text-black">
      <Input
        type="email"
        placeholder="Seu e-mail"
        name="email"
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      ></Input>
      <Input
        type="password"
        placeholder="Sua senha"
        name="password"
        required
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      ></Input>
      <FormButton />
      <p className="text-white">Bem-vindo {state.user?.name}</p>
    </form>
  );
}
