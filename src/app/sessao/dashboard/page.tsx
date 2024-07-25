import Meal from "@/components/dashboard/meal/meal";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "NutriLog",
  description: "Dashboard",
};

export default async function MinhaConta() {

  return (
    <main>
      <Meal mealName="Café da manhã"/>
      <Meal mealName="Colação"/>
      <Meal mealName="Almoço"/>
      <Meal mealName="Café da Tarde"/>
      <Meal mealName="Jantar"/>
      <Meal mealName="Ceia"/>
    </main>
  );
}
