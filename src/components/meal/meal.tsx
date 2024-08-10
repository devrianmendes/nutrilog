import MealButtons from "./mealButtons";
import MealHeader from "./mealHeader";
import MealItem from "./mealItem";

type MealProps = {
  mealName: string;
};

export default function Meal({ mealName }: MealProps) {
  return (
    <section className="bg-stone-300 mb-2">
      <MealHeader>{mealName}</MealHeader>
      <div className="p-1">
        <div>
          <MealItem />
          <MealItem />
        </div>
        <div>
          <MealButtons />
        </div>
      </div>
    </section>
  );
}
