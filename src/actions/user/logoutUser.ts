"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export default async function LogoutUser() {
  try {
    const cookie = cookies().has("Auth");

    if (cookie) {
      cookies().delete("Auth");
      redirect("/");
    }
  } catch (error) {
    // console.log(error);
  }
}
