import type { Metadata } from "next";

import "./globals.css";

import { UserContextProvider } from "@/context/userContext";
import { ResponsivityProvider } from "@/context/responsivityContext";

import getUser from "@/actions/user/getUser";

import Header from "@/components/header/header";

import { Toaster } from "react-hot-toast";
import { FoodContextProvider } from "@/context/foodContext";

export const metadata: Metadata = {
  title: "NutriLog",
  description: "Sua ferramenta para controle nutricional.",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const user = await getUser();

  return (
    <html lang="pt-BR">
      <body className="bg-bright">
        <ResponsivityProvider>
          <UserContextProvider user={user!}>
            <Toaster />
            <div>
              <Header />
              <FoodContextProvider>
                <main className="container m-auto">{children}</main>
              </FoodContextProvider>
              {/* <Footer /> */}
            </div>
          </UserContextProvider>
        </ResponsivityProvider>
      </body>
    </html>
  );
}
