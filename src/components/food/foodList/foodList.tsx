"use client";

import getFoodList from "@/actions/food/getFoodList";
import { useEffect, useState } from "react";
import Food from "../food";
import {
  FullLoadedFood,
  NewFoodProps,
  StoredFoodProps,
} from "@/types/foodTypes";
import toast from "react-hot-toast";

export default function FoodList({ listUpdate }: { listUpdate: boolean }) {
  const [list, setList] = useState<FullLoadedFood[]>([]);

  useEffect(() => {
    const loadList = async () => {
      const getList = await getFoodList();

      if (!getList.data || !Array.isArray(getList.data)) {
        toast.error("Erro ao carregar os alimentos. Por favor, recarregue a página.");
        setList([]); 
        return; 
      }

      setList(getList.data);
    };
    loadList();
  }, [listUpdate]);

  return (
    <ul>
      {list.map((eachItem, index) => (
        <Food {...eachItem} />
      ))}
    </ul>
  );
}
