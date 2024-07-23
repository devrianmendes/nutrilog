"use server"
import { redirect } from "next/dist/server/api-utils";
import { cookies } from "next/headers";

export default async function LogoutUser() {
    cookies().delete('Auth');
}