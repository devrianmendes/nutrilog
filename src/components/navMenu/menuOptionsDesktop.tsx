import { ResponsivityProvider } from "@/context/responsivityContext";
import Link from "next/link";

type MenuProps = {
  mobile?: boolean;
};

export default function MenuOptionsDesktop({ mobile }: MenuProps) {
  return (
    
    <ul className="p-5 flex font-semibold ">
      <Link href="">
        <li className="p-3 hover:text-midGreen duration-200">Minha conta</li>
      </Link>
      <Link href="">
        <li className="p-3 hover:text-midGreen duration-200">Meus alimentos</li>
      </Link>
      <Link href="">
        <li className="p-3 hover:text-midGreen duration-200">
          Minhas receitas
        </li>
      </Link>
      <Link href="">
        <li className="p-3 hover:text-midGreen duration-200">Meu histórico</li>
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
