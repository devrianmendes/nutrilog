import { UserFormatterProps } from "@/types/types";

export default function UserDataFormatter(user: UserFormatterProps) {
  user.birth = new Date(user.birth!).toISOString();
  user.height = +user.height! / 100;
  user.weight = +user.weight!;

  return user;
}
