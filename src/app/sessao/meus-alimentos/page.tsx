"use client";

import FoodList from "@/components/food/foodList/foodList";
import FoodNew from "@/components/food/foodNew";
import Button from "@/components/ui/button";
import Subtitle from "@/components/ui/subtitle";
import { FoodContextProvider, useFood } from "@/context/foodContext";

import { useEffect, useState } from "react";

export default function FoodPage() {
  const [itemFilter, setItemFilter] = useState(0);

  const {openNew, setOpenNew} = useFood();

  const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
    setOpenNew(!openNew);
  };

  useEffect(() => {
    if(openNew) setOpenNew(false);
  }, [itemFilter])

  return (
    
      <main className="flex flex-col ">
        <div className="flex justify-between">
          <Subtitle>Meus alimentos</Subtitle>
          <select
            className="border-solid border border-midGreen leading-7 mb-2 px-2 focus:outline-midGreen"
            name="itemFilter"
            value={itemFilter}
            onChange={(e) => setItemFilter(+e.target.value)}
          >
            <option disabled>Filtro...</option>
            <option value="0">Todos</option>
            <option value="1">Cereais, pães e tubérculos</option>
            <option value="2">Hortaliças</option>
            <option value="3">Frutas</option>
            <option value="4">Leite e derivados</option>
            <option value="5">Carnes e Ovos</option>
            <option value="6">Leguminosas</option>
            <option value="7">Óleos e gorduras</option>
            <option value="8">Açúcares e doces</option>
          </select>
        </div>

        <div onClick={handleClick} className="mb-5 w-max">
          <Button extraClass="m-auto" buttonType="primary">
            {!openNew ? "Adicionar alimento" : "Descartar"}
          </Button>
        </div>

        {openNew ? <FoodNew /> : null}
        <FoodList filter={itemFilter}/>
      </main>

  );
}
