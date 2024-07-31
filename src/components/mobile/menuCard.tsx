"use client";
import { useEffect, useRef } from "react";
import MenuOptions from "../navMenu/menuOptions";

type MenuProps = {
  menu: boolean;
  setMenu: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function MenuCard({ menu, setMenu }: MenuProps) {
  const ref = useRef<HTMLDivElement | null>(null);

  const handleClickOutside = (e: MouseEvent) => {
    if (e.target !== ref.current) {
      setMenu(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div
      ref={ref}
      className={`w-60 h-auto p-5 right-0 top-0 absolute z-10 text-center font-semibold duration-200 ${
        menu ? "visible opacity-100" : "invisible opacity-0"
      } bg-bright drop-shadow-2xl`}
    >
      <MenuOptions setMenu={setMenu} />
    </div>
  );
}
