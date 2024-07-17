import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import LoginForm from "@/components/loginForm/LoginForm";

import bg from "@/assets/nutrilog-bg-1.webp";
import Title from "@/components/ui/title";
import Subtitle from "@/components/ui/subtitle";
export const metadata: Metadata = {
  title: "NutriLog",
  description: "Login",
};

export default function Home() {
  return (
    <section className="p-5 flex flex-col justify-center">
      <Subtitle>Acesse</Subtitle>
      <LoginForm />

    </section>
  );
}
