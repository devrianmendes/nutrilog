import type { Metadata } from "next";
import "./globals.css";
import { UserContextProvider } from "@/context/userContext";
import Header from "@/components/header/header";
import Footer from "@/components/footer/footer";
import getUser from "@/actions/user/getUser";
import Modal from "@/components/mobile/modal";

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
        <UserContextProvider user={user!}>
          <div>
      {/* <Modal /> */}

            <Header />
            <main className="container m-auto">{children}</main>
            {/* <Footer /> */}
          </div>
        </UserContextProvider>
      </body>
    </html>
  );
}
