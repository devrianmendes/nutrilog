import { Metadata } from "next";

import CreateUserForm from "@/components/createUserForm/createUserForm";
import Subtitle from "@/components/ui/subtitle";

export const metadata: Metadata = {
  title: "NutriLog",
  description: "Criar usuário",
};

export default function LoginPage() {
  return (
    <section className="p-5 flex flex-col items-center">
      <Subtitle>Crie sua conta</Subtitle>
      <CreateUserForm />
    </section>
  );
}
