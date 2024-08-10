import Link from "next/link";

type MenuProps = {
  mobile?: boolean;
};

export default function MenuOptionsDesktop({ mobile }: MenuProps) {
  return (
    <ul className="p-5 flex font-semibold ">
      <Link href="/sessao/dashboard">
        <li className="p-3 hover:text-midGreen duration-200">Início</li>
      </Link>
      <Link href="/sessao/minha-conta">
        <li className="p-3 hover:text-midGreen duration-200">Conta</li>
      </Link>
      <Link href="/sessao/meus-alimentos">
        <li className="p-3 hover:text-midGreen duration-200">Alimentos</li>
      </Link>
      <Link href="/sessao/minhas-receitas">
        <li className="p-3 hover:text-midGreen duration-200">Receitas</li>
      </Link>
      <Link href="">
        <li className="p-3 hover:text-midGreen duration-200">Histórico</li>
      </Link>
      <Link href="">
        <li className="p-3 hover:text-midGreen duration-200">Feed</li>
      </Link>
      <Link href="">
        <li className="p-3 hover:text-midGreen duration-200">Blog</li>
      </Link>
    </ul>
  );
}
