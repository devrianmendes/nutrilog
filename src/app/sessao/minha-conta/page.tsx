import Subtitle from "@/components/ui/subtitle";
import UpdateUserForm from "@/components/updateUserForm/updateUserForm";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "NutriLog",
  description: "Minha conta",
};

export default async function MinhaConta() {

  return (
    <main className="flex flex-col items-center">
      <Subtitle>Minha conta</Subtitle>
      <UpdateUserForm />
    </main>
  );
}
