"use client";

import getFoodList from "@/actions/food/getFoodList";
import { useEffect, useState } from "react";
import Food from "../food";
import { NewFoodProps, StoredFoodProps } from "@/types/foodTypes";

export default function FoodList({listUpdate}: {listUpdate: boolean}) {
  const [list, setList] = useState<StoredFoodProps[]>([]);

  useEffect(() => {
    const loadList = async () => {
      const getList = await getFoodList();

      console.log(getList, 'lista salva')

      if(!getList) return null;

      setList(getList);
    };
    loadList();
  }, [listUpdate]);
  
  // console.log(getList)




  return <ul>
    {list.map((eachItem, index) => (
      <Food {...eachItem} />
    ))}
  </ul>;
}
