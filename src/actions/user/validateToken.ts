import { verify } from "jsonwebtoken";

export default async function validateToken(token: string): Promise<string> {
  try {
    if (!token) throw new Error("O usuário precisa estar logado.");
    const secret = process.env.SECRET;
    const { sub } = verify(token, secret!);
    return sub as string;
  } catch (error: unknown) {
    throw new Error("Token inválido.");
  }
}
