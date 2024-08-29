"use client";

import { useEffect, useState } from "react";
import Button from "../ui/button";
import Input from "../ui/input";
import FoodHeader from "./foodHeader";
import newFood from "@/actions/food/newFood";
import { NewFoodProps } from "@/types/types";
import { foodGroups } from "@/constants/foodGroups";
import toast from "react-hot-toast";

type UpdateProps = {
  setListUpdate: React.Dispatch<React.SetStateAction<boolean>>;
  listUpdate: boolean;
};

export default function FoodNew({ setListUpdate, listUpdate }: UpdateProps) {
  const [food, setFood] = useState<NewFoodProps>({
    name: "",
    kcal: 0,
    carb: 0,
    prot: 0,
    gord: 0,
    banner: "",
    quantity: 100,
    unity: "",
    prepareMode: "",
    foodGroup: "",
  });
  const [name, setName] = useState("");
  const [carb, setCarb] = useState<number | string>("");
  const [prot, setProt] = useState<number | string>("");
  const [gord, setGord] = useState<number | string>("");
  const [kcal, setKcal] = useState<number | string>("");
  const [banner, setBanner] = useState("");
  const [unity, setUnity] = useState("");
  const quantity = 100;
  const [prepareMode, setPrepareMode] = useState("");
  const [foodGroup, setFoodGroup] = useState("");

  const handleClick = async () => {
    const setNewFood = await newFood(food);
    if (setNewFood.ok) {
      toast.success(setNewFood.message);
      setListUpdate(!listUpdate);
    } else {
      toast.error(setNewFood.message);
    }
  };

  useEffect(() => {
    setFood({
      name: name,
      kcal: +kcal,
      carb: +carb,
      prot: +prot,
      gord: +gord,
      banner: "",
      quantity: quantity,
      unity: unity,
      prepareMode: prepareMode,
      foodGroup: (+foodGroup + 1).toString(),
    });
  }, [name, kcal, carb, prot, gord, banner, unity, prepareMode, foodGroup]);

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
            <Input
              extraClass="w-full mx-0.5"
              placeholder="100"
              type="number"
              disabled
              // value={typeCount.value}
              // onChange={(e) =>
              //   setTypeCount((prevState) => ({
              //     ...prevState,
              //     value: e.target.value,
              //   }))
              // }
            />
            <select
              className="w-full mx-0.5 border-solid border border-midGreen leading-7 mb-2 px-2 focus:outline-midGreen"
              name="typeCount"
              value={unity}
              onChange={(e) => setUnity(e.target.value)}
            >
              <option value="" disabled>
                Medida
              </option>
              <option value="g">Gramas</option>
              <option value="ml">Mililitros</option>
            </select>
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
