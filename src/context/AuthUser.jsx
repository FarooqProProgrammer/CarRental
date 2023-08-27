import React, { createContext, useContext, useState } from 'react';

const AuthContext = createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const [userAuth, setUser] = useState();

 
  return (
    <AuthContext.Provider value={{ userAuth, setUser }}>
      {children}
    </AuthContext.Provider>
  );
}
