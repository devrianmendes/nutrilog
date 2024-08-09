import Meal from "@/components/meal/meal";
import Subtitle from "@/components/ui/subtitle";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "NutriLog",
  description: "Dashboard",
};

export default async function MinhaConta() {

  return (
    <main>
      <Subtitle>Registre seu dia</Subtitle>
      <Meal mealName="Café da manhã"/>
      <Meal mealName="Colação"/>
      <Meal mealName="Almoço"/>
      <Meal mealName="Café da Tarde"/>
      <Meal mealName="Jantar"/>
      <Meal mealName="Ceia"/>
    </main>
  );
}
