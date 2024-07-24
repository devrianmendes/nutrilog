import getUser from "@/actions/user/getUser";
import Meal from "@/components/dashboard/meal/meal";
import Header from "@/components/header/header";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "NutriLog",
  description: "Minha conta",
};

export default async function MinhaConta() {

  return (
    <main>
      <Meal />
    </main>
  );
}
