import React, { createContext, useState, useEffect } from "react";
export const Context = createContext();

function ContextApi({ children }) {
  const [data, setData] = useState({});

  return (
    <Context.Provider value={{ data, setData }}>{children}</Context.Provider>
  );
}

export default ContextApi;
