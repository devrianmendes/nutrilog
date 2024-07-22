"use client";

import { createContext, useContext, useState } from "react";
import { UserSessionProps } from "@/util/types";

type UserContextProps = {
  userData: UserSessionProps | null;
  setUserData: React.Dispatch<React.SetStateAction<UserSessionProps | null>>;
};

type ProviderProps = {
  children: React.ReactNode;
  user?: UserSessionProps | null;
};

export const UserContext = createContext<UserContextProps | undefined>(
  undefined
);

export const useUser = () => {
  const context = useContext(UserContext);

  if (context === null) {
    throw new Error("useContext deve estar dentro do Provider");
  }
  return context;
};

export const UserContextProvider = ({ children }: ProviderProps) => {
  const [userData, setUserData] = useState<UserSessionProps | null>(null);

  return (
    <UserContext.Provider value={{ userData, setUserData }}>
      {children}
    </UserContext.Provider>
  );
};
