"use client";

import getFoodList from "@/actions/food/getFoodList";
import { useEffect, useState } from "react";

export default function FoodList() {
  const [list, setList] = useState([{}]);
  useEffect(() => {
    const loadList = async () => {
      const getList = await getFoodList();
      if(!getList) return null;
      setList(getList);
    };
    loadList();
  }, []);
  console.log(list)

  return <ul>
    {list.map((eachItem, index) => (
      <p>{eachItem.name}</p>
    ))}
  </ul>;
}
