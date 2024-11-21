"use client";

import searchFood from "@/actions/food/searchFood";
import { StoredFoodProps } from "@/types/foodTypes";
import { useEffect, useState, useTransition } from "react";
import { BsSearch } from "react-icons/bs";

type Teste = {
  id: string;
  name: string;
  kcal: string;
  banner: string;
  foodCategoryId: string;
  unity: string;
  visibleFat: boolean;
  public: boolean;
  publish: boolean;
  status: string;
};

export default function SearchBar({ active }: { active: string }) {
  const [param, setParam] = useState("");

  useEffect(() => {
    searchFood(param);
  }, [param]);

  const [results, setResults] = useState<Teste[] | null>(null);
  const [isPending, startTransition] = useTransition();

  useEffect(() => {
    const handler = setTimeout(() => {
      if (param.trim() === "") {
        // setResults("");
        return;
      }

      startTransition(async () => {
        try {
          const data = await searchFood(param);
          setResults(data);
        } catch (error) {
          console.error("Erro ao buscar itens:", error);
        }
      });
    }, 300);

    return () => {
      clearTimeout(handler);
    };
  }, [param, startTransition]);

  return (
    <div className="flex items-center duration-150">
      <BsSearch size={20} className="hover:cursor-pointer" />
      <input
        type="text"
        value={param}
        onChange={(e) => setParam(e.target.value)}
        className="bg-transparent p-2 focus:outline-none w-full"
        placeholder={`Pesquisar ${active}`}
      />
    </div>
  );
}
