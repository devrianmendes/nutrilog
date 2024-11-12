"use client";

import { createContext, useContext, useState } from "react";

// Definindo o tipo do contexto
type FoodContextProps = {
  updateList: boolean;
  setUpdateList: React.Dispatch<React.SetStateAction<boolean>>;
};

// Definindo o tipo das props do Provider
type FoodProviderProps = {
  children: React.ReactNode;
};

// Criando o contexto com valor inicial
const FoodContext = createContext<FoodContextProps | null>(null);

export const useFood = () => {
  const context = useContext(FoodContext);

  if (context === null) {
    throw new Error("foodContext deve estar dentro do Provider");
  }

  return context;
};

// Definindo o provider que passa o estado
export const FoodContextProvider = ({ children }: FoodProviderProps) => {
  // Inicializando o estado com useState
  const [updateList, setUpdateList] = useState<boolean>(false);

  return (
    <FoodContext.Provider value={{ updateList, setUpdateList }}>
      {children}
    </FoodContext.Provider>
  );
};
