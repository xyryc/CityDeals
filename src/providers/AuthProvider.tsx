import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { createContext, useContext, useEffect, useState } from "react";

export interface User {
  name: string;
  email: string;
}

interface AuthContextType {
  isLoggedIn: boolean;
  user: User | null;
  isLoading: boolean;
  login: (email?: string, name?: string) => Promise<void>;
  logout: () => Promise<void>;
}

const AUTH_USER_STORAGE_KEY = "@citydeals_auth_user";
const AUTH_STATUS_STORAGE_KEY = "@citydeals_auth_status";

const AuthContext = createContext<AuthContextType>({
  isLoggedIn: false,
  user: null,
  isLoading: true,
  login: async () => {},
  logout: async () => {},
});

export const useAuth = () => useContext(AuthContext);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  // Restore session from persistent local storage on app startup
  useEffect(() => {
    const restoreSession = async () => {
      try {
        const [savedStatus, savedUser] = await Promise.all([
          AsyncStorage.getItem(AUTH_STATUS_STORAGE_KEY),
          AsyncStorage.getItem(AUTH_USER_STORAGE_KEY),
        ]);

        if (savedStatus === "true" && savedUser) {
          setIsLoggedIn(true);
          setUser(JSON.parse(savedUser));
        }
      } catch (error) {
        console.warn("Failed to restore auth session from storage:", error);
      } finally {
        setIsLoading(false);
      }
    };

    restoreSession();
  }, []);

  const login = async (
    email = "user@citydeals.ai",
    name = "Nasimul Noyon"
  ) => {
    const newUser: User = { email, name };
    setIsLoggedIn(true);
    setUser(newUser);

    try {
      await Promise.all([
        AsyncStorage.setItem(AUTH_STATUS_STORAGE_KEY, "true"),
        AsyncStorage.setItem(AUTH_USER_STORAGE_KEY, JSON.stringify(newUser)),
      ]);
    } catch (error) {
      console.warn("Failed to persist auth session:", error);
    }
  };

  const logout = async () => {
    setIsLoggedIn(false);
    setUser(null);

    try {
      await Promise.all([
        AsyncStorage.removeItem(AUTH_STATUS_STORAGE_KEY),
        AsyncStorage.removeItem(AUTH_USER_STORAGE_KEY),
      ]);
    } catch (error) {
      console.warn("Failed to clear auth session:", error);
    }
  };

  return (
    <AuthContext.Provider
      value={{ isLoggedIn, user, isLoading, login, logout }}
    >
      {children}
    </AuthContext.Provider>
  );
}
