"use client";
import { useState } from "react";

import SearchBar from "../ui/searchBar";
import Button from "../ui/button";

export default function MealButtons() {
  const [hidden, setHidden] = useState(true);
  const [active, setActive] = useState<string | null>(null);

  const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const clickedButton = e.currentTarget.id;

    if (active === clickedButton) {
      setHidden(true);
      setActive(null);
    } else {
      setHidden(false);
      setActive(clickedButton);
    }
  };

  return (
    <div className="flex flex-col text-center font-medium">
      {hidden ? <input type="text" hidden /> : <SearchBar active={active!} />}
      <div className="flex justify-evenly w-full">
        <div className="w-full mr-0.5" id="alimento" onClick={handleClick}>
          <Button
            buttonType="tertiary"
            extraClass={active === "alimento" ? "!bg-midGreen text-bright" : ""}
          >
            + Alimento
          </Button>
        </div>
        <div className="w-full ml-0.5" id="receita" onClick={handleClick}>
          <Button
            buttonType="tertiary"
            extraClass={active === "receita" ? "!bg-midGreen text-bright" : ""}
          >
            + Receita
          </Button>
        </div>
      </div>
    </div>
  );
}
