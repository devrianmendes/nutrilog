"use client";
import Food from "@/components/food/food";
import FoodList from "@/components/food/foodList/foodList";
import FoodNew from "@/components/food/foodNew";
import Button from "@/components/ui/button";
import Subtitle from "@/components/ui/subtitle";
import { useState } from "react";

export default function FoodPage() {
  const [newFood, setNewFood] = useState(false);

  const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
    setNewFood(!newFood)
    console.log(newFood)
  }

  return (
    <main className="flex flex-col ">
      <div className="flex justify-between">
        <Subtitle>Meus alimentos</Subtitle>
        <select className="border-solid border border-midGreen leading-7 mb-2 px-2 focus:outline-midGreen">
          <option disabled>Filtro...</option>
          <option>Todos</option>
          <option>Carnes e ovos</option>
          <option>Carboidratos</option>
          <option>Gorduras</option>
        </select>
      </div>

      <FoodList />
      {newFood ? <FoodNew /> : null}

      <div onClick={handleClick}>
        <Button extraClass="m-auto" buttonType="primary">
          {!newFood ? "Adicionar alimento" : "Descartar"}
        </Button>
      </div>
    </main>
  );
}
