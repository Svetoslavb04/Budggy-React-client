import { createContext, useContext, useState, ReactNode, useEffect } from "react";

import { useNavigate } from 'react-router-dom';

import authService from "../services/authService";

export type User = {
    email: string,
    username: string,
    _id: string,
};

const defaultUser: User = {
    email: '',
    username: '',
    _id: ''
}

export type AuthContextValue = {
    user: User,
    login: (username: string, password: string) => void,
    register: (username: string, password: string, repassword: string) => void,
    logout: () => void,
    identified: Boolean
}

const defaultValue: AuthContextValue = {
    user: defaultUser,
    login: (username, password) => { },
    register: (username, password, repassword) => { },
    logout: () => { },
    identified: false
}

export const AuthContext = createContext<AuthContextValue>(defaultValue);

const AuthProvider = ({ children }: { children: ReactNode }) => {

    const navigate = useNavigate();

    const [user, setUser] = useState<User>(defaultUser);
    const [identified, setIdentified] = useState<Boolean>(false);

    useEffect(() => {

        authService.me()
            .then(user => {
                setIdentified(true)

                if (user._id !== null) {
                    return setUser(user)
                }
                return setUser(defaultUser)

            })

    }, [])

    const login = async (email: string, password: string) => {

        try {

            const user: User = await authService.login(email, password);

            setUser(user)

            navigate('/', { replace: false });

        } catch (error) { console.log(await error) }

    }

    const register = async (email: string, username: string, password: string) => {

        try {

            const user: User = await authService.register(email, username, password)

            setUser(user)

            navigate('/', { replace: false })

        } catch (error) { console.log(await error) }

    }

    const logout = async () => {

        try { await authService.logout() }
        catch (error) { console.log(await error) }
        finally {

            setUser(defaultUser)
            navigate('/', { replace: false })

        }
    }

    return (
        <AuthContext.Provider value={{ user, login, register, logout, identified }}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuthContext = () => useContext(AuthContext);

export default AuthProvider