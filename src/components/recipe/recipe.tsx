import Button from "../ui/button";
import FoodHeader from "./foodHeader";
import MealItem from "./mealItem";

export default function Recipe() {
  return (
    <div className="mb-3">
      <FoodHeader>Strogonoff de frango</FoodHeader>
      <div className="p-1 bg-stone-300">
        <MealItem />
        <MealItem />
        <MealItem />
        <MealItem />
        <div className="flex">
          <Button extraClass="mr-0.5" buttonType="tertiary">+ Alimento</Button>
          <Button extraClass="ml-0.5" buttonType="tertiary">Cancelar</Button>
        </div>
      </div>
    </div>
  );
}
