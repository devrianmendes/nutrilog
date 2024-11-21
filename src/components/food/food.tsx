import FoodBody from "./foodBody";
import FoodFooter from "./foodFooter";
import FoodHeader from "./foodHeader";

import { FullLoadedFood } from "@/types/foodTypes";

type FoodWithIndex = FullLoadedFood & {
  foodIndex: number;
}

export default function Food(data: FoodWithIndex) {
  console.log(data, "alimento no food")
    return (
    <section>
      <div className="mb-2">
        <FoodHeader
          name={data.name}
          kcal={data.kcal}
          prot={data.prot}
          carb={data.carb}
          fat={data.fat}
          fibr={data.fibr}
          unity={data.unity}
          prep={data.prepMethod}
        />
        <FoodBody />
        <FoodFooter
          public={data.public}
          publish={data.publish}
          status={data.status}
          foodIndex={data.foodIndex}
        />
      </div>
    </section>
  );
}
