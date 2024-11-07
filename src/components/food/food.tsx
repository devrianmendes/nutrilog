import FoodFooter from "./foodFooter";
import FoodHeader from "./foodHeader";

import { FullLoadedFood } from "@/types/foodTypes";

export default function Food(data: FullLoadedFood) {
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
        <FoodFooter
          public={data.public}
          publish={data.publish}
          status={data.status}
        />
      </div>
    </section>
  );
}
