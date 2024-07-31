import type { Metadata } from "next";
import "./globals.css";
import { UserContextProvider } from "@/context/userContext";
import Header from "@/components/header/header";
import getUser from "@/actions/user/getUser";
import { ResponsivityProvider } from "@/context/responsivityContext";

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
            <div>
              <Header />
              <main className="container m-auto">{children}</main>
              {/* <Footer /> */}
            </div>
          </UserContextProvider>
        </ResponsivityProvider>
      </body>
    </html>
  );
}
