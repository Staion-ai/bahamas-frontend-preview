"use client";

import React, { createContext, useContext, useState, useEffect } from "react";

interface AuthContextType {
  token: string | null;
  login: (token: string) => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
    const [token, setToken] = useState<string | null>(null);

    // Cargar token desde localStorage cuando la app se monta
    useEffect(() => {
        const storedToken = localStorage.getItem("authToken");
        if (storedToken) setToken(storedToken);
    }, []);

    // Función para iniciar sesión (guardar token)
    const login = (newToken: string) => {
        setToken(newToken);
        localStorage.setItem("authToken", newToken);
    };

    // Función para cerrar sesión
    const logout = () => {
        setToken(null);
        localStorage.removeItem("authToken");
    };

    return (
        <AuthContext.Provider value={{ token, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) throw new Error("useAuth must be used within an AuthProvider");
    return context;
};
