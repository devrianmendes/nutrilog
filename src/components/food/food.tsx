import FoodFooter from "./foodFooter";
import FoodHeader from "./foodHeader";
import FoodNew from "./foodNew";

export default function Food() {
  return (
    <section>
      <div className="mb-2">
        <FoodHeader>Peito de frango (cozido)</FoodHeader>
        <FoodFooter />
      </div>
      <FoodNew />
    </section>
  );
}
