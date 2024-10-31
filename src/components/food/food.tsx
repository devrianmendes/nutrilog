
import { useEffect } from "react";
import FoodFooter from "./foodFooter";
import FoodHeader from "./foodHeader";
import FoodNew from "./foodNew";

import newCategory from "@/actions/food/newCategory"

export default function Food({data}) {
  console.log(data)

  return (
    <section>
      <div className="mb-2">
        <FoodHeader>Peito de frango (cozido)</FoodHeader>
        <FoodFooter />
      </div>
    </section>
  );
}
