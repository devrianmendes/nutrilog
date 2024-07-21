import type { Metadata } from "next";
import "./globals.css";
import { UserContextProvider } from "@/context/userContext";
import Header from "@/components/header/header";
import Footer from "@/components/footer/footer";
import getUser from "@/actions/user/getUser";

export const metadata: Metadata = {
  title: "NutriLog",
  description: "Sua ferramenta para controle nutricional.",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  
  // const user = {
  //   id: "1",
  //   email: "1",
  //   completeName: "1",
  //   password: "1",
  //   banner: "1",
  //   role: "1",
  // };

  const user = getUser();
  console.log(user)

  const userr = await getUser();
  console.log(userr, 'no layout')

  return (
    <html lang="pt-BR">
      <body className="bg-bright">
        <UserContextProvider user={user}>
          <div>
            <Header />
            <main className="container m-auto">{children}</main>
            <Footer />
          </div>
        </UserContextProvider>
      </body>
    </html>
  );
}
