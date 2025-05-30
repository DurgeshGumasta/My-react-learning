import { createContext, useContext, useState } from "react";

// 1. Create the context
const DataContext = createContext();

// 2. Custom hook to use context
export const useDataContext = () => useContext(DataContext);

// 3. Provider component
export const TestContextProvider = ({ children }) => {
  const [data, setData] = useState({});

  return (
    <DataContext.Provider value={{ data, setData }}>
      {children}
    </DataContext.Provider>
  );
};
