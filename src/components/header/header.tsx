import Link from "next/link";
import Image from "next/image";

import Title from "../ui/title";
import { Span } from "../ui/span";
import NavMenu from "../navMenu/navMenu";

import logo from "@/assets/nutrilog-logo.png";

export default async function Header() {
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
          <Title>
            <Span>N</Span>utri<Span>L</Span>og
          </Title>
          <p>O seu diário nutricional</p>
        </div>
      </Link>
      <NavMenu />
    </header>
  );
}
