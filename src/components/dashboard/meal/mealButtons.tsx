"use client";
import { useState } from "react";

import { BsSearch } from "react-icons/bs";

export default function MealButtons() {
  const [hidden, setHidden] = useState(true);
  const [food, setFood] = useState("");

  const handleClick = () => {
    setHidden(!hidden);
    setFood('');
  };

  const handleSearch = () => {
    
    console.log(food);
    setFood('');

  };

  return (
    <div className="flex flex-col text-center font-medium">
      {hidden ? (
        <input type="text" hidden />
      ) : (
        <div className="flex items-center">
          <BsSearch
            size={20}
            onClick={handleSearch}
            className="hover:cursor-pointer"
          />
          <input
            type="text"
            className="bg-transparent p-2 focus:outline-none w-full"
            value={food}
            onChange={(e) => setFood(e.target.value)}
          />
        </div>
      )}
      <div className="flex justify-evenly w-full">
        <button
          onClick={handleClick}
          className="w-full p-2 mr-1 bg-bright bg-opacity-50"
        >
          + Alimento
        </button>
        <button
          onClick={handleClick}
          className="w-full p-2 bg-bright bg-opacity-50"
        >
          + Receita
        </button>
      </div>
    </div>
  );
}
