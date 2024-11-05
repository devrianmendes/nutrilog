
import { useEffect } from "react";
import FoodFooter from "./foodFooter";
import FoodHeader from "./foodHeader";
import FoodNew from "./foodNew";

import newCategory from "@/actions/food/newCategory"
import { NewFoodProps, StoredFoodProps } from "@/types/foodTypes";

export default function Food(data: StoredFoodProps) {
  console.log(data)

  return (
    <section>
      <div className="mb-2">
      <p>{data.name}</p>
        {/* <FoodHeader /> */}
        <FoodFooter />
      </div>
    </section>
  );
}
