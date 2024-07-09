import { Metadata } from "next";
import Link from "next/link";
import CreateUserForm from "@/components/createUser/createUserForm";

export const metadata: Metadata = {
  title: "NutriLog",
  description: "Criar usuário",
};

export default function LoginPage() {
  return (
    <>
      <CreateUserForm />
      <Link href="/">Voltar para login</Link>
    </>
  );
}
