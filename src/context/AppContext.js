import React, { createContext, useState, useContext } from 'react';

const AppContext = createContext();


export const AppProvider = ({ children }) => {
  const [hasLoaded, setHasLoaded] = useState(false);

  return (
    <AppContext.Provider value={{ hasLoaded, setHasLoaded }}>
      {children}
    </AppContext.Provider>
  );
};

export default AppContext;