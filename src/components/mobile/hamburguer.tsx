"use client";

import Link from "next/link";
import { useState } from "react";

export default function Hamburguer() {
  const [menu, setMenu] = useState(false);
  const handleMenu = () => {
    setMenu(!menu);
    console.log(menu);
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
      <div
        className={`w-60 h-auto p-5 right-0 top-0 absolute z-10 text-center font-semibold duration-200 ${
          menu ? "visible opacity-100" : "invisible opacity-0"
        } bg-bright drop-shadow-2xl`}
      >
        <ul className="mt-10 p-5">
          <Link href="">
            <li className="p-3 hover:text-midGreen duration-100 ">
              Minha conta
            </li>
          </Link>
          <Link href="">
            <li className="p-3 hover:text-midGreen duration-100">
              Meus alimentos
            </li>
          </Link>
          <Link href="">
            <li className="p-3 hover:text-midGreen duration-100">
              Minhas receitas
            </li>
          </Link>
          <Link href="">
            <li className="p-3 hover:text-midGreen duration-100">
              Meu histórico
            </li>
          </Link>
          <Link href="">
            <li className="p-3 hover:text-midGreen duration-100">Feed</li>
          </Link>
          <Link href="">
            <li className="p-3 hover:text-midGreen duration-100">Blog</li>
          </Link>
        </ul>
      </div>
    </div>
  );
}
