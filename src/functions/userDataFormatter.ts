import { UserDataProps, UserFormatterProps } from "@/types/userTypes";

export function UserDataFormatterToServer(user: UserFormatterProps) {
  user.birth = new Date(user.birth!).toISOString();
  user.height = +user.height! / 100;
  user.weight = +user.weight!;

  return user;
}

export function UserDataFormatterToClient(user: UserDataProps) {
  const date = new Date(user.birth);

  user.weight = +user.weight;
  user.height = +user.height * 100;
  user.birth =
    date.getFullYear() +
    "-" +
    String(date.getMonth() + 1).padStart(2, "0") +
    "-" +
    String(date.getDate()).padStart(2, "0");

  return user;
}
