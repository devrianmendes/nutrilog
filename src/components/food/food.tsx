import { useEffect } from "react";
import FoodFooter from "./foodFooter";
import FoodHeader from "./foodHeader";
import FoodNew from "./foodNew";

import newCategory from "@/actions/food/newCategory";
import {
  FullLoadedFood,
  NewFoodProps,
  StoredFoodProps,
} from "@/types/foodTypes";

export default function Food(data: FullLoadedFood) {
  // console.log(data, 'no setorzão')

  return (
    <section>
      <div className="mb-2">
        <p>{data.name}</p>
        <FoodHeader
          name={data.name}
          calories={data.calories}
          prot={data.prot}
          carb={data.carb}
          fat={data.fat}
          fibr={data.fibr}
          unity={data.unity}
        />
        <FoodFooter />
      </div>
    </section>
  );
}
