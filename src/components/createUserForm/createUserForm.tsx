"use client";

import { useEffect, useState } from "react";
import { useFormState, useFormStatus } from "react-dom";

import createUser from "@/actions/user/createUser";
import Button from "../ui/form/Button";
import Input from "../ui/form/Input";
import Link from "next/link";
import { stateCityList } from "@/util/estados-cidades";
import { Span } from "../ui/span";

const FormButton = () => {
  const { pending } = useFormStatus();
  return (
    <Button
      buttonType="primary"
      extraClass="m-auto mt-5"
      type="submit"
      disabled={pending}
    >
      {pending ? "Criando..." : "Criar"}
    </Button>
  );
};

export default function CreateUserForm() {
  const [completeName, setCompleteName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [gender, setGender] = useState("");
  const [birth, setBirth] = useState("");
  const [goal, setGoal] = useState("");
  const [activity, setActivity] = useState("");
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [userState, setUserState] = useState("");
  const [userCity, setUserCity] = useState("");
  const [terms, setTerms] = useState(false);

  const { estados } = stateCityList;
  const [cities, setCities] = useState<string[]>([]);

  const [state, action] = useFormState(createUser, {
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

    buscaCidade(userState);
  }, [userState]);

  useEffect(() => {
    if (state.ok) window.location.href = "/";
  }, [state.ok]);

  console.log(
    completeName,
    email,
    password,
    confirmPassword,
    gender,
    userState,
    userCity,
    birth,
    goal,
    activity,
    weight,
    height,
    terms,
    "on client"
  );

  return (
    <form action={action} className="flex flex-col w-full max-w-xl">
      <label htmlFor="completeName">
        Nome: <Span spanType="error">*</Span>
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
        E-mail: <Span spanType="error">*</Span>
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
        Senha: <Span spanType="error">*</Span>
        {password !== confirmPassword && (
          <Span spanType="error">As senhas estão diferentes</Span>
        )}
      </label>
      <Input
        type="password"
        name="password"
        id="password"
        required
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <label htmlFor="password">
        Repita sua senha: <Span spanType="error">*</Span>
        {password !== confirmPassword && (
          <Span spanType="error">As senhas estão diferentes</Span>
        )}
      </label>
      <Input
        type="password"
        name="confirmPassword"
        id="confirmPassword"
        required
        value={confirmPassword}
        onChange={(e) => setConfirmPassword(e.target.value)}
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
            onChange={(e) => setGender(e.target.value)}
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
            onChange={(e) => setGender(e.target.value)}
          />
          Feminino
        </label>
      </div>

      <label htmlFor="birth">
        Data de nascimento: <Span spanType="error">*</Span>
      </label>
      <Input
        type="date"
        name="birth"
        id="birth"
        value={birth}
        onChange={(e) => setBirth(e.target.value)}
      />

      <div className="flex">
        <div className="w-full mr-2">
          <label htmlFor="goal">
            Objetivo: <Span spanType="error">*</Span>
          </label>
          <select
            className="border-solid border border-midGreen w-full leading-7 px-2 mb-2"
            name="goal"
            required
            value={goal}
            onChange={(e) => setGoal(e.target.value)}
          >
            <option value="" disabled>
              Defina seu objetivo
            </option>
            <option value="emagrecer">Perda de peso</option>
            <option value="ganhodemassa">Ganho de massa</option>
          </select>
        </div>

        <div className="w-full ml-2">
          <label htmlFor="goal">
            Nível de atividade: <Span spanType="error">*</Span>
          </label>
          <select
            className="border-solid border border-midGreen w-full leading-7 px-2 mb-2"
            name="activity"
            required
            value={activity}
            onChange={(e) => setActivity(e.target.value)}
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
          <label>
            Peso: <Span spanType="error">*</Span>
          </label>
          <Input
            extraClass="mx-1 w-10/12 sm:w-3/5 !mb-0"
            type="range"
            name="weight"
            min="30"
            max="200"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
            required
          ></Input>
          <Span>{weight} KG</Span>
        </div>
        <div className="flex flex-col sm:flex-row items-center w-full py-2">
          <label>
            Altura: <Span spanType="error">*</Span>
          </label>
          <Input
            extraClass="mx-1 w-10/12 sm:w-3/5 !mb-0"
            type="range"
            name="height"
            min="130"
            max="220"
            value={height}
            onChange={(e) => setHeight(e.target.value)}
            required
          ></Input>
          <Span>{height} CM</Span>
        </div>
      </div>

      <label htmlFor="states">
        Estado: <Span spanType="error">*</Span>
      </label>
      <select
        className="border-solid border border-midGreen w-full leading-7 px-2 mb-2"
        name="userState"
        required
        value={userState}
        onChange={(e) => setUserState(e.target.value)}
      >
        <option value="" disabled>
          Selecione seu estado
        </option>
        {estados.map((eachEstado) => (
          <option value={eachEstado.nome}>{eachEstado.nome}</option>
        ))}
      </select>

      <label htmlFor="cities">
        Cidade: <Span spanType="error">*</Span>
      </label>
      <select
        className="border-solid border border-midGreen w-full leading-7 px-2 mb-2"
        name="userCity"
        required
        value={userCity}
        onChange={(e) => setUserCity(e.target.value)}
      >
        <option value="" disabled>
          Selecione sua cidade
        </option>
        {cities.map((eachCity) => (
          <option value={eachCity}>{eachCity}</option>
        ))}
      </select>

      <label className="m-auto">
        <input
          className="mr-1"
          type="checkbox"
          name="terms"
          checked={terms}
          onChange={({ target }) => setTerms(target.checked)}
        />
        Declaro que li e aceito os{" "}
        <Link target="__blank" href="">
          <Span>Termos de Uso</Span>
        </Link>{" "}
        e a{" "}
        <Link target="__blank" href="">
          <Span>Política de privacidade</Span>
        </Link>
        .<Span spanType="error">*</Span>
      </label>
      <Span spanType="error">{state.error}</Span>

      <p>Melhorar o confirmar senha</p>
      <FormButton />
      <Link href="/" className="m-auto text-midGreen hover:underline">
        Voltar para login
      </Link>
    </form>
  );
}
