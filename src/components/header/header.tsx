import Link from "next/link";
import Image from "next/image";

import Title from "../ui/title";
import { Span } from "../ui/span";
import NavMenu from "../navMenu/navMenu";

import logo from "@/assets/nutrilog-logo.png";
import getUser from "@/actions/user/getUser";

export default async function Header() {
  const user = await getUser();
  return (
    <header className="h-1/5 text-dark p-4 mb-10 border-b border-b-midGreen">
      <div className="flex justify-between container m-auto">
        <Link href="/">
          <Image
            className="m-auto"
            src={logo}
            alt="Nutrilog logo"
            height={80}
            width={80}
          />
          <div className="text-center mb-2">
            <Title extraClass="!text-dark">
              <Span>N</Span>utri<Span>L</Span>og
            </Title>
          </div>
        </Link>
        <NavMenu />
      </div>
    </header>
  );
}
