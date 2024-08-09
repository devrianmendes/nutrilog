"use client";
import Link from "next/link";

export default function MenuOptions({
  setMenu,
}: {
  setMenu: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const handleClick = () => {
    setMenu(false);
  };

  return (
    <ul className="mt-10 p-5">
      <Link href="/sessao/dashboard" onClick={handleClick}>
        <li className="p-3 hover:text-midGreen duration-200">Início</li>
      </Link>
      <Link href="/sessao/minha-conta" onClick={handleClick}>
        <li className="p-3 hover:text-midGreen duration-200 ">Conta</li>
      </Link>
      <Link href="/sessao/meus-alimentos" onClick={handleClick}>
        <li className="p-3 hover:text-midGreen duration-200">Alimentos</li>
      </Link>
      <Link href="" onClick={handleClick}>
        <li className="p-3 hover:text-midGreen duration-200">Receitas</li>
      </Link>
      <Link href="" onClick={handleClick}>
        <li className="p-3 hover:text-midGreen duration-200">Histórico</li>
      </Link>
      <Link href="" onClick={handleClick}>
        <li className="p-3 hover:text-midGreen duration-200">Feed</li>
      </Link>
      <Link href="" onClick={handleClick}>
        <li className="p-3 hover:text-midGreen duration-200">Blog</li>
      </Link>
    </ul>
  );
}
