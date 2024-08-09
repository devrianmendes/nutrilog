import MealButtons from "./mealButtons";
import MealHeader from "./mealHeader";
import MealItem from "./mealItem";

type MealProps = {
  mealName: string;
};

export default function Meal({ mealName }: MealProps) {
  return (
    <section className="bg-dark bg-opacity-30 mb-2">
      <MealHeader>{mealName}</MealHeader>
      <div className="p-1">
        <div className="mt-5">
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
