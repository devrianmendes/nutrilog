"use client";

import { createContext, useContext, useState } from "react";
import { UserDataProps } from "@/types/userTypes";

type UserContextProps = {
  user: UserDataProps | null;
  setUserState: React.Dispatch<React.SetStateAction<UserDataProps | null>>;
};

type ProviderProps = {
  children: React.ReactNode;
  user: UserDataProps | null;
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
  const [userState, setUserState] = useState<UserDataProps | null>(user);

  return (
    <UserContext.Provider value={{ user: userState, setUserState }}>
      {children}
    </UserContext.Provider>
  );
};
