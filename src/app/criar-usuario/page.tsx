import { Metadata } from "next";
import Link from "next/link";
import CreateUserForm from "@/components/createUserForm/createUserForm";
import Subtitle from "@/components/ui/subtitle";

export const metadata: Metadata = {
  title: "NutriLog",
  description: "Criar usuário",
};

export default function LoginPage() {
  return (
    <section className="p-5 flex flex-col justify-center">
      <Subtitle>Crie sua conta</Subtitle>
      <CreateUserForm />
      <Link href="/">Voltar para login</Link>
    </section>
  );
}
