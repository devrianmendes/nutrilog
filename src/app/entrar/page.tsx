import { Metadata } from "next";

import LoginForm from "@/components/loginForm/LoginForm";
import Subtitle from "@/components/ui/subtitle";

export const metadata: Metadata = {
  title: "NutriLog",
  description: "Entrar",
};

export default function Home() {
  return (
    <section className="p-5 flex flex-col items-center">
      <Subtitle>Acesse</Subtitle>
      <LoginForm />
    </section>
  );
}
