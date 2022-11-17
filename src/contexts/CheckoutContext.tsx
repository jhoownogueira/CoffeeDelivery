import { createContext, ReactNode, useState } from "react";

interface CheckoutProps {
  bairro: string;
  cep: string;
  cidade: string;
  coffesCart: [];
  complemento?: string;
  numero: string;
  payment: string;
  rua: string;
  uf: string;
}

interface CheckoutContextType {
  checkout: CheckoutProps | null;
  setCheckout: React.Dispatch<React.SetStateAction<CheckoutProps | null>>;
}

export const CheckoutContext = createContext({} as CheckoutContextType);

interface CheckoutContextProviderProps {
  children: ReactNode;
}

export function CheckoutContextProvider({
  children,
}: CheckoutContextProviderProps) {
  const [checkout, setCheckout] = useState<CheckoutProps | null>(null);

  return (
    <CheckoutContext.Provider
      value={{
        checkout,
        setCheckout,
      }}
    >
      {children}
    </CheckoutContext.Provider>
  );
}
