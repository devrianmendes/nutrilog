import Button from "@/components/ui/form/Button";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "NutriLog",
  description: "Sua ferramenta de apoio nutricional",
};

export default function Home() {
  return (
    <section className="p-4">
      <title>Controle nutricional e gestão de refeições.</title>
      <p>
        A <span className="font-bold text-midGreen">NutriLog</span> é uma
        ferramenta <span className="font-bold text-midGreen">gratuita</span> de
        controle nutricional feita com carinho para te ajudar na conquista dos
        seus objetivos.
      </p>
      <br />
      <p>
        Com ela você consegue{" "}
        <span className="font-bold text-midGreen">acompanhar sua evolução</span>
        , <span className="font-bold text-midGreen">montar suas refeições</span>{" "}
        e{" "}
        <span className="font-bold text-midGreen">
          analisar seu gasto e ganho calóricos
        </span>{" "}
        além de compartilha-las com outros usuários.
      </p>
      <br />
      <p>
        Seja qual for seu objetivo, a{" "}
        <span className="font-bold text-midGreen">NutriLog</span> pode te ajudar
        a ter um <span className="font-bold text-midGreen">controle preciso</span> para um <span className="font-bold text-midGreen">resultado mais rápido</span>.
      </p>
    </section>
  );
}
