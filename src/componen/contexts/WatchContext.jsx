import { createContext, useContext, useState } from "react";

const WatchContext = createContext();

export const useWatch = () => useContext(WatchContext);

export function WatchProvider({ children }) {
  // state buat nyimpen ID yang dipilih
  const [selectedId, setSelectedId] = useState(null);

  return (
    <WatchContext.Provider value={{ selectedId, setSelectedId }}>
      {children}
    </WatchContext.Provider>
  );
}
