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
import { useFood } from "@/context/foodContext";

export default function FoodList({ listUpdate }: { listUpdate: boolean }) {
  const [list, setList] = useState<FullLoadedFood[]>([]);
  const { updateList, setUpdateList} = useFood();


  useEffect(() => {
    const loadList = async () => {
      const getList = await getFoodList();

      if (!getList.ok || !Array.isArray(getList.data)) {
        toast.error(getList.message);
        setList([]); 
        return; 
      }

      setList(getList.data);
    };
    loadList();
  }, [listUpdate, updateList]);



  return (

    <ul>
      {list.map((eachItem, i) => (
        <Food {...eachItem} foodIndex={i} key={i}/>
      ))}
    </ul>
    

  );
}
