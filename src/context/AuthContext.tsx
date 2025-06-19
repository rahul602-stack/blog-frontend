import React, { createContext, useContext, useEffect, useState } from 'react';

interface User {
  id: string | number;
  username: string;
  role: string;
  token: string;
}

interface AuthContextType {
  user: User | null;
  login: (userData: User) => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);


export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

 
 const login = (userData: User) => {
  setUser(userData);
  localStorage.setItem('user', JSON.stringify(userData));

  if (userData.username === 'rahul123') {
    localStorage.setItem('isAdmin', 'true');
  } else {
    localStorage.removeItem('isAdmin');
  }
};



  const logout = () => {
    setUser(null);
    localStorage.removeItem('user');
    localStorage.removeItem('isAdmin');
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};


