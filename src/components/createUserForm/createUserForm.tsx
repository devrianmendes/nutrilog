"use client";

import { useEffect, useState } from "react";
import { useFormState, useFormStatus } from "react-dom";

import createUser from "@/actions/user/createUser";
import Button from "../ui/form/Button";
import Input from "../ui/form/Input";
import Link from "next/link";

const FormButton = () => {
  const { pending } = useFormStatus();
  return (
    <Button buttonType="primary" extraClass="m-auto mt-5" type="submit" disabled={pending}>
      {pending ? "Criando..." : "Criar"}
    </Button>
  );
};

export default function CreateUserForm() {
  const [completeName, setCompleteName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [state, action] = useFormState(createUser, {
    ok: false,
    error: "",
    user: null,
  });

  useEffect(() => {
    if (state.ok) window.location.href = "/";
  }, [state.ok]);

  return (
    <form action={action} className="flex flex-col w-full max-w-xl">
      <label htmlFor="completeName">
        Nome: <span className="text-red-500">*</span>
      </label>
      <Input
        type="text"
        name="completeName"
        id="completeName"
        required
        value={completeName}
        onChange={(e) => setCompleteName(e.target.value)}
      />
      <label htmlFor="email">
        E-mail: <span className="text-red-500">*</span>
      </label>
      <Input
        type="email"
        name="email"
        id="email"
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <label htmlFor="password">
        Senha: <span className="text-red-500">*</span>
      </label>
      <Input
        type="password"
        name="password"
        id="password"
        required
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <p>adicionar input de confirmar senha</p>
      <p>adicionar input de genero</p>
      <p>adicionar input de estado</p>
      <p>adicionar input de cidade</p>
      <p>adicionar input de termos de privacidade</p>
      <FormButton />
      <Link href="/" className="m-auto text-midGreen hover:underline">Voltar para login</Link>

      <p>{state.error}</p>
    </form>
  );
}
