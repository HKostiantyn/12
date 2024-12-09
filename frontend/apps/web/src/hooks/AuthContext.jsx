import React, { createContext, useState } from "react";

const AuthContext = createContext({
  isAuthenticated: false,
  setAuthenticated: () => {},
});

const AuthProvider = ({ children }) => {
  const [isAuthenticated, setAuthenticated] = useState(false);

  return (
    <AuthContext.Provider value={{ isAuthenticated, setAuthenticated }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
