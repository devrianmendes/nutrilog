"use client";
import Link from "next/link";
import Button from "../ui/form/Button";
import { useUser } from "@/context/userContext";
import LogoutUser from "@/actions/user/logoutUser";
import Hamburguer from "../mobile/hamburguer";

export default function NavMenu() {
  const { user, setUserState } = useUser();

  const handleLogout = async () => {
    await LogoutUser();
    setUserState(null);
  };

  return (
    <>
      {!user ? (
        <nav className="flex flex-col justify-center">
          <Link href="/criar-usuario">
            <Button buttonType="primary" extraClass="mb-1">
              Criar conta
            </Button>
          </Link>
          <Link href="/entrar">
            <Button buttonType="secondary" extraClass="mt-1">
              Entrar
            </Button>
          </Link>
        </nav>
      ) : (
        <div className="flex flex-col justify-evenly items-center">
          <Hamburguer />
          <Link href="/">
            <Button extraClass="!w-20" buttonType="secondary" onClick={handleLogout}>
              Sair
            </Button>
          </Link>
        </div>
      )}
    </>
  );
}
