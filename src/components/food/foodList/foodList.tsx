"use client";

import getFoodList from "@/actions/food/getFoodList";
import { useEffect, useState } from "react";
import Food from "../food";
import { NewFoodProps } from "@/types/foodTypes";

export default function FoodList({listUpdate}: {listUpdate: boolean}) {
  const [list, setList] = useState<NewFoodProps[]>([]);

  useEffect(() => {
    const loadList = async () => {
      const getList = await getFoodList();
      if(!getList) return null;
      setList(getList);
    };
    loadList();
  }, [listUpdate]);


  return <ul>
    {list.map((eachItem, index) => (
      <Food data={eachItem} />
    ))}
  </ul>;
}
