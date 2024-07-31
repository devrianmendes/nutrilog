"use client";

import { useState } from "react";
import MenuCard from "./menuCard";

export default function Hamburguer() {
  const [menu, setMenu] = useState(false);

  const handleMenu = () => {
    setMenu(!menu);
  };

  return (
    <div className="relative">
      <div
        className="h-10 flex relative flex-col p-2 justify-between hover:cursor-pointer"
        onClick={handleMenu}
      >
        <div
          className={`bg-midGreen w-7 h-1 rounded z-20 duration-200 ${
            menu && "rotate-45 translate-y-3"
          } `}
        ></div>
        <div
          className={`bg-midGreen w-7 h-1 rounded z-20 duration-200 ${
            menu && "invisible opacity-0"
          } `}
        ></div>
        <div
          className={`bg-midGreen w-7 h-1 rounded z-20 duration-200 ${
            menu && "-rotate-45 -translate-y-2"
          } `}
        ></div>
      </div>

      <MenuCard menu={menu} setMenu={setMenu}/>
    </div>
  );
}
