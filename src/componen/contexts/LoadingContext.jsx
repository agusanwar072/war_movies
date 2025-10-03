import { createContext, useContext, useState } from "react";

// create Context
const LoadingContext = createContext();

// creat Cust Hook
export const useLoading = () => useContext(LoadingContext);

// create Provider
export function LoadingProvider({ children }) {
  // State yg d pilih buat nyimpen nilai dari loading
  const [loading, setLoading] = useState(false);

  return (
    <LoadingContext.Provider value={{ loading, setLoading }}>
      {children}
    </LoadingContext.Provider>
  );
}
