import { createContext, ReactNode, useState } from "react";

interface CoffeProps {
  id: number;
  photo: string;
  name: string;
  description: string;
  categories: string[];
  value: number;
  amount: number;
}

interface CoffeContextType {
  coffesCart: CoffeProps[];
  setCoffesCart: React.Dispatch<React.SetStateAction<CoffeProps[]>>;
}

export const CoffesContext = createContext({} as CoffeContextType);

interface CoffesContextProviderProps {
  children: ReactNode;
}

export function CoffesContextProvider({
  children,
}: CoffesContextProviderProps) {
  const [coffesCart, setCoffesCart] = useState<CoffeProps[]>([]);

  return (
    <CoffesContext.Provider
      value={{
        coffesCart,
        setCoffesCart,
      }}
    >
      {children}
    </CoffesContext.Provider>
  );
}
