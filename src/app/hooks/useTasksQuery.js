import React, { createContext, useContext } from "react";

// Bağlam (context) oluştur
const QueryKeyContext = createContext();

// Bağlamı kullanacak bir bileşen oluştur
export const QueryKeyProvider = ({ children }) => {
  const queryKey = ["boards"]; // queryKey'i burada tanımla veya dış bir dosyadan al

  return (
    <QueryKeyContext.Provider value={queryKey}>
      {children}
    </QueryKeyContext.Provider>
  );
};

// Bağlamı kullan
export const useQueryKey = () => useContext(QueryKeyContext);
