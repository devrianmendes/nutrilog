"use client";
import Link from "next/link";
import Button from "../ui/form/Button";
import { useUser } from "@/context/userContext";
import LogoutUser from "@/actions/user/logoutUser";

export default function NavMenu() {
  const { user, setUserState } = useUser();

  const handleLogout = async () => {
    await LogoutUser();
    setUserState(null);
  };

  return (
    <>
      {!user ? (
        <nav className="flex justify-center">
          <Link href="/criar-usuario">
            <Button buttonType="primary" extraClass="mr-1">
              Criar conta
            </Button>
          </Link>
          <Link href="/entrar">
            <Button buttonType="secondary" extraClass="ml-1">
              Entrar
            </Button>
          </Link>
        </nav>
      ) : (
        <nav>
          <Link href="/">
            <Button buttonType="primary">Botão 1</Button>
          </Link>
          <Link href="/">
            <Button buttonType="primary">Botão 2</Button>
          </Link>
          <Link href="/">
            <Button buttonType="primary">Botão 3</Button>
          </Link>
          <Link href="/">
            <Button buttonType="secondary" onClick={handleLogout}>
              Sair
            </Button>
          </Link>
        </nav>
      )}
    </>
  );
}
