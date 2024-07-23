"use client";

import { createContext, useContext, useState } from "react";
import { UserSessionProps } from "@/types/types";

type UserContextProps = {
  user: UserSessionProps | null;
  setUserState: React.Dispatch<React.SetStateAction<UserSessionProps | null>>;
};

type ProviderProps = {
  children: React.ReactNode;
  user: UserSessionProps | null;
};

const UserContext = createContext<UserContextProps | null>(null);

export const useUser = () => {
  const context = useContext(UserContext);

  if (context === null) {
    throw new Error("useContext deve estar dentro do Provider");
  }
  
  return context;
};

export const UserContextProvider = ({ children, user }: ProviderProps) => {
  const [userState, setUserState] = useState<UserSessionProps | null>(user);

  return (
    <UserContext.Provider value={{ user: userState, setUserState }}>
      {children}
    </UserContext.Provider>
  );
};
