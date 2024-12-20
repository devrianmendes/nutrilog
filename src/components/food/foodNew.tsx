"use client";

import { useEffect, useState } from "react";

import Button from "../ui/button";
import Input from "../ui/input";
import FoodHeader from "./foodHeader";

import newFood from "@/actions/food/newFood";

import { NewFoodProps } from "@/types/foodTypes";
import { foodGroups } from "@/constants/foodGroups";

import toast from "react-hot-toast";
import { RiDeleteBin2Line } from "react-icons/ri";
import { IoMdAdd } from "react-icons/io";
import { useFood } from "@/context/foodContext";

type PortionType = {
  name: string;
  value: number | string;
}[];

export default function FoodNew() {
  const [food, setFood] = useState<NewFoodProps>({
    name: "",
    kcal: 0,
    carb: null,
    prot: null,
    fat: null,
    fibr: null,
    banner: "",
    quantity: 100,
    unity: "",
    prepMethod: "",
    foodGroup: "",
    visibleFat: false,
    publish: false,
  });

  const [name, setName] = useState("");
  const [carb, setCarb] = useState<number | string | null>(null);
  const [prot, setProt] = useState<number | string | null>("");
  const [fat, setFat] = useState<number | string | null>("");
  const [fibr, setFibr] = useState<number | string | null>("");
  const [kcal, setKcal] = useState<number | string>("");
  const [banner, setBanner] = useState("");
  const [unity, setUnity] = useState("");
  const [portionName, setPortionName] = useState("");
  const [portionValue, setPortionValue] = useState<number | string>("");
  const [portions, setPortions] = useState<PortionType>([]);
  const quantity = 100;
  const [prepMethod, setPrepMethod] = useState("");
  const [foodGroup, setFoodGroup] = useState("");
  const [visibleFat, setVisibleFat] = useState(false);
  const [publish, setPublish] = useState(false);

  const { updateList, openNew, setUpdateList, setOpenNew } = useFood();

  const handleSetPortion = () => {
    if (!portionName || !portionValue) {
      toast.error("Preencha os dois campos da porção.");
      return;
    }
    const newPortion = {
      name: portionName,
      value: portionValue,
    };

    setPortions([...portions, newPortion]);
    setPortionName("");
    setPortionValue("");
  };

  const handleDelPortion = (e: React.MouseEvent<SVGElement, MouseEvent>) => {
    e.preventDefault();
    const index = e.currentTarget.id;

    const newPortions = portions.filter((_, i) => i !== +index);

    setPortions(newPortions);
  };

  const handleClick = async (action: string) => {
    if (action === "clearfood") {
      setName("");
      setCarb(null);
      setProt(null);
      setFat(null);
      setFibr(null);
      setKcal("");
      setBanner("");
      setUnity("");
      setPrepMethod("");
      setFoodGroup("");
      setVisibleFat(false);
      setPublish(false);
    } else {

      const setNewFood = await newFood(food);

      if (setNewFood.ok) {
        toast.success(`Alimento ${setNewFood.message} salvo!`);
        setUpdateList(!updateList);
        setOpenNew(!openNew);
      } else {
        toast.error(setNewFood.message);
      }
    }
  };

  useEffect(() => {
    setFood({
      name: name,
      kcal: +kcal,
      carb: carb && +carb,
      prot: prot && +prot,
      fat: fat && +fat,
      fibr: fibr && +fibr,
      banner: "",
      quantity: quantity,
      unity: unity,
      prepMethod: prepMethod,
      foodGroup: (+foodGroup + 1).toString(),
      visibleFat: visibleFat,
      publish: publish,
    });
  }, [
    name,
    kcal,
    carb,
    prot,
    fat,
    fibr,
    banner,
    unity,
    prepMethod,
    foodGroup,
    visibleFat,
    portions,
    publish,
  ]);

  useEffect(() => {
    toast.success(
      "Sugerimos que insira os valores referente a 100 gramas/mililítros do alimento, assim fica fácil calcular muitas formas de medidas. 😉",
      {
        style: {
          border: "1px solid #713200",
          padding: "16px",
          color: "#FFFFFF",
          backgroundColor: "#6CB125",
          fontWeight: "bold",
        },
        duration: 5000,
      }
    );
  }, []);

  return (
    <div className="mb-5">
      <FoodHeader {...food}></FoodHeader>
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
            value={carb === null ? "" : carb}
            required
            onChange={(e) => setCarb(e.target.value)}
          />
          <Input
            extraClass="w-full mr-0.5 ml-0.5"
            placeholder="Prot"
            type="number"
            value={prot === null ? "" : prot}
            onChange={(e) => setProt(e.target.value)}
          />
          <Input
            extraClass="w-full ml-0.5"
            placeholder="Gord"
            type="number"
            value={fat === null ? "" : fat}
            onChange={(e) => setFat(e.target.value)}
          />
          <Input
            extraClass="w-full ml-0.5"
            placeholder="Fibra"
            type="number"
            value={fibr === null ? "" : fibr}
            onChange={(e) => setFibr(e.target.value)}
          />
        </div>
        <div className="flex">
          <Input
            extraClass="w-full mr-0.5"
            placeholder="Kcal"
            type="number"
            value={kcal}
            onChange={(e) => setKcal(e.target.value)}
            // onFocus={handleFocus}
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

        <div className="pt-3 w-full">
          Medidas sugeridas:
          <div className="flex justify-between">
            <Input
              extraClass="!w-6/12 mr-0.5"
              type={"text"}
              placeholder={"Ex.: Colher de sopa..."}
              value={portionName}
              onChange={(e) => setPortionName(e.target.value)}
            />
            <Input
              extraClass="!w-3/12 mr-4"
              type={"number"}
              placeholder={`10${unity}`}
              value={portionValue}
              onChange={(e) => setPortionValue(e.target.value)}
            />
            <IoMdAdd
              size={"1.8rem"}
              color="#fafafa"
              className="bg-midGreen w-12 hover:cursor-pointer hover:scale-110 duration-100"
              onClick={handleSetPortion}
            />
          </div>
          {/* <Button
            buttonType="primary"
            extraClass="h-6 hover:scale-100"
            onClick={handlePortion}
          >
            Incluir medida
          </Button> */}
          <div>
            <ul>
              {portions
                ? portions.map((eachPortion, i) => (
                    <li
                      key={i}
                      className="flex items-center justify-between mb-0.5"
                    >
                      <p className="bg-bright border-solid border border-midGreen w-6/12 leading-7 px-2 focus:outline-midGreen">
                        {eachPortion.name}
                      </p>
                      <p className="bg-bright border-solid border border-midGreen w-3/12 leading-7 px-2 mr-4 focus:outline-midGreen">
                        {eachPortion.value}
                        {unity}
                      </p>
                      <RiDeleteBin2Line
                        id={`${i}`}
                        size={"1.8rem"}
                        color={"#fafafa"}
                        className="bg-midGreen w-12 p-1 hover:cursor-pointer hover:scale-110 duration-100"
                        onClick={(e) => handleDelPortion(e)}
                      />
                    </li>
                  ))
                : null}
            </ul>
          </div>
        </div>

        <div className="flex pt-4">
          <select
            className="w-full ml-0.5 border-solid border border-midGreen leading-7 mb-2 px-2 focus:outline-midGreen"
            value={prepMethod}
            onChange={(e) => setPrepMethod(e.target.value)}
          >
            <option value="" disabled>
              Método de preparo
            </option>
            <option value="Cozido">Cozido</option>
            <option value="Grelhado">Grelhado</option>
            <option value="Assado">Assado</option>
            <option value="Air fryer">Air fryer</option>
            <option value="Frito (sem gordura)">Frito (sem gordura)</option>
            <option value="Frito (untado)">Frito (untado)</option>
            <option value="Frito (fritura rasa)">Frito (fritura rasa)</option>
            <option value="Frito (imersao)">Frito (imersão)</option>
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
              <option value={i} key={i}>
                {eachGroup}
              </option>
            ))}
          </select>
        </div>
        <div className="flex flex-col">
          <label className="">
            <input
              className="mr-1"
              type="checkbox"
              checked={visibleFat}
              onChange={({ target }) => setVisibleFat(target.checked)}
            />
            {/* <Span spanType="error">Este alimento </Span> */}
            Este alimento possui gordura visível?
          </label>
          <label className="">
            <input
              className="mr-1"
              type="checkbox"
              checked={publish}
              onChange={({ target }) => setPublish(target.checked)}
            />
            {/* <Span spanType="error">Este alimento </Span> */}
            Deseja tornar este alimento público?
          </label>
        </div>
        <div className="flex">
          <div id="savefood" onClick={(e) => handleClick(e.currentTarget.id)}>
            <Button buttonType="tertiary" extraClass="mr-0.5 min-w-32">
              Salvar
            </Button>
          </div>
          <div id="clearfood" onClick={(e) => handleClick(e.currentTarget.id)}>
            <Button buttonType="tertiary" extraClass="mr-0.5 min-w-32">
              Limpar
            </Button>
          </div>
        </div>
      </div>
      {/* <FoodFooter /> */}
    </div>
  );
}
