"use client";

import { useEffect, useState } from "react";
import { useFormState, useFormStatus } from "react-dom";
import {useRouter} from "next/navigation"
 
import { useUser } from "@/context/userContext";

import { stateCityList } from "@/constants/places";

import Button from "../ui/button";
import Input from "../ui/input";
import { Span } from "../ui/span";
import updateUser from "@/actions/user/updateUser";

const FormButton = () => {
  const { pending } = useFormStatus();
  return (
    <Button
      buttonType="primary"
      extraClass="m-auto mt-5"
      type="submit"
      disabled={pending}
    >
      {pending ? "Alterando..." : "Alterar localidade"}
    </Button>
  );
};

export default function UpdateUserForm() {
  const { user } = useUser();
  const router = useRouter();
  if (!user) throw new Error("Usuário não existe.");

  const [completeName, setCompleteName] = useState(user.completeName);
  const [email, setEmail] = useState(user.email);
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [gender, setGender] = useState(user.gender);
  const [birth, setBirth] = useState(user.birth);
  const [goal, setGoal] = useState(user.goal);
  const [activityLevel, setActivityLevel] = useState(user.activityLevel);
  const [height, setHeight] = useState(user.height);
  const [weight, setWeight] = useState(user.weight);
  const [uf, setUf] = useState(user.state);
  const [city, setCity] = useState(user.city);

  const { estados } = stateCityList;
  const [cities, setCities] = useState<string[]>([]);

  const [state, action] = useFormState(updateUser, {
    ok: false,
    error: "",
    user: null,
  });

  useEffect(() => {
    const buscaCidade = (e: string) => {
      const numeroEstados = estados.length;

      for (let i = 0; i < numeroEstados; i++) {
        if (estados[i].nome === e) {
          setCities(estados[i].cidades);
        }
      }
    };

    buscaCidade(uf);
  }, [uf]);

  useEffect(() => {
    if (state.ok) window.location.href = "/sessao/minha-conta";
  }, [state.ok]);

  return (
    <div className="flex flex-col w-full max-w-xl ">
      <label htmlFor="completeName">Nome: </label>
      <Input
        type="text"
        name="completeName"
        id="completeName"
        disabled
        value={completeName}
        readOnly
      />

      <label htmlFor="email">E-mail:</label>
      <Input
        type="email"
        name="email"
        id="email"
        disabled
        value={email}
        readOnly
      />

      <div>
        <label className="mr-2">
          <Input
            extraClass="mr-1 w-min"
            type="radio"
            name="gender"
            value="m"
            checked={gender === "m"}
            required
            disabled
          />
          Masculino
        </label>
        <label className="ml-2">
          <Input
            extraClass="mr-1 w-min "
            type="radio"
            name="gender"
            value="f"
            checked={gender === "f"}
            required
            disabled
          />
          Feminino
        </label>
      </div>

      <label htmlFor="birth">Data de nascimento:</label>
      <Input
        type="date"
        name="birth"
        id="birth"
        value={birth as string}
        disabled
        readOnly
      />

      <div className="flex">
        <div className="w-full mr-2">
          <label htmlFor="goal">Objetivo:</label>
          <select
            className="border-solid border border-midGreen w-full leading-7 px-2 mb-2"
            name="goal"
            disabled
            value={goal}
          >
            <option value="" disabled>
              Defina seu objetivo
            </option>
            <option value="emagrecer">Perda de peso</option>
            <option value="ganhodemassa">Ganho de massa</option>
          </select>
        </div>

        <div className="w-full ml-2">
          <label htmlFor="goal">Nível de atividade:</label>
          <select
            className="border-solid border border-midGreen w-full leading-7 px-2 mb-2"
            name="activity"
            disabled
            value={activityLevel}
          >
            <option value="" disabled>
              Escolha seu nível de atividade
            </option>
            <option value="sedentario">
              Sedentário (Nenhuma vez por semana)
            </option>
            <option value="baixo">Baixo (Uma a duas vezes por semana)</option>
            <option value="intermediario">
              Intermediário (4 a 5 vezes por semana)
            </option>
            <option value="alto">Alto (Diariamente)</option>
          </select>
        </div>
      </div>

      <div className="flex">
        <div className="flex flex-col sm:flex-row items-center w-full py-2">
          <label>Peso:</label>
          <Input
            extraClass="mx-1 w-10/12 sm:w-6/12 !mb-0"
            type="range"
            name="weight"
            min="30"
            max="200"
            step="0.1"
            value={weight as number}
            readOnly
            disabled
          ></Input>
          <Span>{weight as number} KG</Span>
        </div>
        <div className="flex flex-col sm:flex-row items-center w-full py-2">
          <label>Altura:</label>
          <Input
            extraClass="mx-1 w-10/12 sm:w-6/12 !mb-0"
            type="range"
            name="height"
            min="130"
            max="220"
            value={height as number}
            disabled
            readOnly
          ></Input>
          <Span>{user.height as number} CM</Span>
        </div>
      </div>

      <form action={action} className="flex flex-col">
        <label htmlFor="states">Estado:</label>
        <select
          className="border-solid border border-midGreen w-full leading-7 px-2 mb-2"
          name="userUf"
          required
          value={uf}
          onChange={(e) => setUf(e.target.value)}
        >
          <option value="" disabled>
            Selecione seu estado
          </option>
          {estados.map((eachEstado) => (
            <option value={eachEstado.nome}>{eachEstado.nome}</option>
          ))}
        </select>

        <label htmlFor="cities">Cidade:</label>
        <select
          className="border-solid border border-midGreen w-full leading-7 px-2 mb-2"
          name="userCity"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        >
          <option value="" disabled>
            {city}
          </option>
          {cities.map((eachCity) => (
            <option value={eachCity}>{eachCity}</option>
          ))}
        </select>

        <p className="text-center">
          Alguns dados não podem ser alterados porque ficarão registrados como o
          início da sua evolução. Informe suas evoluções ou mudanças de objetivo
          no painel de evolução.
        </p>
        <Span spanType="error">{state.error}</Span>
        <FormButton />
      </form>
    </div>
  );
}
