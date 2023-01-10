import { createContext, useContext, useState, ReactNode } from "react";

export type User = {
    logged: boolean,
    id: string | null
};

export type AuthContext = {
    user: User,
    login: (username: string, password: string) => void,
    register: (username: string, password: string, repassword: string) => void,
    logout: () => void,
}

const defaultValue: AuthContext = {
    user: { logged: false, id: null },
    login: (username, password) => { },
    register: (username, password, repassword) => { },
    logout: () => {}
}

export const AuthContext = createContext<AuthContext>(defaultValue);

const AuthProvider = ({ children }: { children: ReactNode }) => {

    const [user, setUser] = useState<User>({ logged: false, id: null });

    const login = (username: string, password: string) => { }

    const register = (username: string, password: string, repassword: string) => { }

    const logout = () => { }

    return (
        <AuthContext.Provider value={{ user, login, register, logout }}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuthContext = () => useContext(AuthContext);

export default AuthProvider