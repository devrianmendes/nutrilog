import getUser from "@/actions/user/getUser";
import Header from "@/components/header/header";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "NutriLog",
  description: "Minha conta",
};

export default async function MinhaConta() {
  const data = await getUser();
  console.log(data, "on minha conta");

  return (
    <main>
      <p className="text-white">minha conta</p>
    </main>
  );
}
