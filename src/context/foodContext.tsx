"use client";

import { createContext, useContext, useEffect, useState } from "react";

// Definindo o tipo do contexto
type FoodContextProps = {
  updateList: boolean;
  openNew: boolean;
  setOpenNew: React.Dispatch<React.SetStateAction<boolean>>;
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
  const [openNew, setOpenNew] = useState<boolean>(false);
  
  useEffect(() => {
    console.log(openNew)
  },[openNew])
  return (
    <FoodContext.Provider value={{ updateList, openNew, setUpdateList, setOpenNew }}>
      {children}
    </FoodContext.Provider>
  );
};
