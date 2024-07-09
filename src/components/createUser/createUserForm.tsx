"use client";

import { useState } from "react";
import { useFormState, useFormStatus } from "react-dom";

import { redirect } from "next/navigation";

import createUser from "@/actions/user/createUser";
import Button from "../ui/form/Button";
import Input from "../ui/form/Input";

const FormButton = () => {
  const { pending } = useFormStatus();
  return (
    <Button className="text-white" type="submit" disabled={pending}>
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

  if (state.ok) redirect("/");
  return (
    <form action={action} className="text-black">
      <Input
        type="text"
        name="completeName"
        id="completeName"
        required
        value={completeName}
        onChange={(e) => setCompleteName(e.target.value)}
      />
      <Input
        type="email"
        name="email"
        id="email"
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <Input
        type="password"
        name="password"
        id="password"
        required
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <FormButton />
      <p className="text-white">{state.error}</p>
    </form>
  );
}
