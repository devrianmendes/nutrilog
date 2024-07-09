import LoginForm from "@/components//login/LoginForm";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "NutriLog",
  description: "Login"
};

export default function Home() {
  return (
    <main>
      <LoginForm />
      <Link href="/createUser" className="text-white">
        Não possui conta? Cadastre-se
      </Link>
    </main>
  );
}
