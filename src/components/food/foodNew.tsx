"use client";

import { useEffect, useState } from "react";
import Button from "../ui/button";
import Input from "../ui/input";
import FoodHeader from "./foodHeader";
import newFood from "@/actions/food/newFood";
import { NewFoodProps } from "@/types/types";
import { foodGroups } from "@/constants/foodGroups";

export default function FoodNew() {
  const [food, setFood] = useState<NewFoodProps>({
    name: "",
    kcal: 0,
    carb: 0,
    prot: 0,
    gord: 0,
    banner: "",
    typeCount: "",
    prepareMode: "",
    foodGroup: "",
  });
  const [name, setName] = useState("");
  const [carb, setCarb] = useState<number | string>("");
  const [prot, setProt] = useState<number | string>("");
  const [gord, setGord] = useState<number | string>("");
  const [kcal, setKcal] = useState<number | string>("");
  const [banner, setBanner] = useState("");
  const [typeCount, setTypeCount] = useState({ type: "", value: "" });
  const [prepareMode, setPrepareMode] = useState("");
  const [foodGroup, setFoodGroup] = useState("");

  const handleClick = async (e: React.MouseEvent<HTMLDivElement>) => {
    await newFood(food);

    // const id = e.currentTarget.id;

    // if (id === "clearfood") {
    //   console.log(food, 'before clean')
    //   setFood({
    //     name: "",
    //     kcal: 0,
    //     carb: 0,
    //     prot: 0,
    //     gord: 0,
    //     typeCount: "",
    //     prepareMode: "",
    //   });
    //   console.log(food, 'after clean')

    // }
    console.log(food);
  };

  useEffect(() => {
    setFood({
      name: name,
      kcal: +kcal,
      carb: +carb,
      prot: +prot,
      gord: +gord,
      banner: "",
      typeCount: (typeCount.value + typeCount.type).toString(),
      prepareMode: prepareMode,
      foodGroup: ((+foodGroup) + 1).toString(),
    });
  }, [name, carb, prot, gord, kcal, typeCount, prepareMode]);

  return (
    <div className="mb-5">
      <FoodHeader>{name}</FoodHeader>
      <div className="p-1 pt-2 bg-stone-300">
        <Input
          placeholder="Nome"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <div className="flex">
          <Input
            extraClass="w-full mr-0.5"
            placeholder="Carb"
            type="number"
            value={carb}
            onChange={(e) => setCarb(e.target.value)}
          />
          <Input
            extraClass="w-full mr-0.5 ml-0.5"
            placeholder="Prot"
            type="number"
            value={prot}
            onChange={(e) => setProt(e.target.value)}
          />
          <Input
            extraClass="w-full ml-0.5"
            placeholder="Gord"
            type="number"
            value={gord}
            onChange={(e) => setGord(e.target.value)}
          />
        </div>
        <div className="flex">
          <Input
            extraClass="w-full mr-0.5"
            placeholder="Kcal"
            type="number"
            value={kcal}
            onChange={(e) => setKcal(e.target.value)}
          />
          <div className="w-full flex">
            <select
              className="w-full ml-0.5 border-solid border border-midGreen leading-7 mb-2 px-2 focus:outline-midGreen"
              name="typeCount"
              value={typeCount.type}
              onChange={(e) =>
                setTypeCount((prevState) => ({
                  ...prevState,
                  type: e.target.value,
                }))
              }
            >
              <option value="" disabled>
                Medida
              </option>
              <option value="un">Unidade</option>
              <option value="g">Grama</option>
            </select>
            <Input
              extraClass="w-full mr-0.5"
              placeholder="Quantidade"
              type="text"
              value={typeCount.value}
              onChange={(e) =>
                setTypeCount((prevState) => ({
                  ...prevState,
                  value: e.target.value,
                }))
              }
            />
          </div>
        </div>
        <textarea
          className="border-solid border border-midGreen w-full leading-7 px-2 mb-2 focus:outline-midGreen"
          placeholder="Modo de preparo"
        />
        <div className="flex">
          <select
            className="w-full ml-0.5 border-solid border border-midGreen leading-7 mb-2 px-2 focus:outline-midGreen"
            value={prepareMode}
            onChange={(e) => setPrepareMode(e.target.value)}
          >
            <option value="" disabled>
              Método de preparo
            </option>
            <option value="cozido">Cozido</option>
            <option value="grelhado">Grelhado</option>
            <option value="frito">Frito</option>
            <option value="assado">Assado</option>
          </select>
          <select
            className="w-full ml-0.5 border-solid border border-midGreen leading-7 mb-2 px-2 focus:outline-midGreen"
            value={foodGroup}
            onChange={(e) => setFoodGroup(e.target.value)}
          >
            <option value="" disabled>
              Grupo alimentar
            </option>
            {foodGroups.map((eachGroup, i) => (
              <option value={i}>{eachGroup}</option>
            ))}
          </select>
        </div>
        <div className="flex">
          <div id="savefood" onClick={handleClick}>
            <Button buttonType="tertiary" extraClass="mr-0.5 min-w-32">
              Salvar
            </Button>
          </div>
          <div id="clearfood" onClick={handleClick}>
            <Button buttonType="tertiary" extraClass="mr-0.5 min-w-32">
              Limpar
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
