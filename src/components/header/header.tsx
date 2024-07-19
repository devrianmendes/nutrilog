import Title from "../ui/title";
import Image from "next/image";
import logo from "@/assets/nutrilog-logo.png";
import Link from "next/link";
import Button from "../ui/form/Button";
import { Span } from "../ui/span";

export default function Header() {
  return (
    <header className="h-1/5 text-white flex flex-col p-4 align-middle justify-center border-b border-b-midGreen">
      <Link href="/">
        <Image
          className="m-auto"
          src={logo}
          alt="Nutrilog logo"
          height={80}
          width={80}
        />
        <div className="text-center mb-2">
          <Title><Span>N</Span>utri<Span>L</Span>og</Title>
          <p>O seu diário nutricional</p>
        </div>
      </Link>
      <div className="flex p-2 justify-center">
        <Link href="/criar-usuario">
          <Button buttonType="primary" extraClass="mr-1">Criar conta</Button>
        </Link>
        <Link href="/entrar">
          <Button buttonType="secondary" extraClass="ml-1">Entrar</Button>
        </Link>
      </div>
    </header>
  );
}
