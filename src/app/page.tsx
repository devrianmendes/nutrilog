import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import LoginForm from "@/components//login/LoginForm";

import bg from "@/assets/nutrilog-bg-1.webp";
import Title from "@/components/ui/title";
export const metadata: Metadata = {
  title: "NutriLog",
  description: "Login",
};

export default function Home() {
  return (
    <main className="px-5 flex flex-col justify-center align-middle h-screen">
      <Image src={bg} alt="Nutrilog background" />
      <Title>NutriLog</Title>
      <p className="font-normal">Sua Ferramenta de Controle Nutricional</p>
      <LoginForm />
      <Link href="/createUser" className="text-white">
        Não possui conta? Cadastre-se
      </Link>
    </main>
  );
}
