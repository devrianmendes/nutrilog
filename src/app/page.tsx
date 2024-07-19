import { Span } from "@/components/ui/span";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "NutriLog",
  description: "Controle nutricional e gestão de refeições.",
};

export default function Home() {
  return (
    <section className="p-4">
      <p>
        A <Span>NutriLog</Span> é uma
        ferramenta <Span>gratuita</Span> de
        controle nutricional e gestão de refeições feita com carinho para te ajudar na conquista dos
        seus objetivos.
      </p>
      <br />
      <p>
        Com ela você consegue{" "}
        <Span>acompanhar sua evolução</Span>
        , <Span>montar suas refeições</Span>{" "}
        e{" "}
        <Span>
          analisar seu gasto e ganho calóricos
        </Span>{" "}
        além de compartilha-las com outros usuários.
      </p>
      <br />
      <p>
        Seja qual for seu objetivo, a{" "}
        <Span>NutriLog</Span> pode te ajudar
        a ter um{" "}
        <Span>controle preciso</Span> para
        um{" "}
        <Span>resultado mais rápido</Span>.
      </p>
    </section>
  );
}
