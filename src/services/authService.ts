import { apiConfig } from "../data/apiConfig"

export const register = (email: string, username: string, password: string) => {

    return fetch(apiConfig.registerUrl, {
        method: "POST",
        headers: {
            "Content-Type": 'application/json'
        },
        body: JSON.stringify({
            email, username, password
        }),
        credentials: 'include'
    })
        .then(res => {

            if (res.status === 400 || res.status === 401) {
                throw res.json()
            }

            return res.json()
        })
}

export const login = (email: string, password: string) => {

    return fetch(apiConfig.loginUrl, {
        method: "POST",
        headers: {
            "Content-Type": 'application/json'
        },
        body: JSON.stringify({
            email, password
        }),
        credentials: 'include'
    })
        .then(res => {

            if (res.status === 400 || res.status === 401) {
                throw res.json()
            }

            return res.json()
        })
}

export const logout = () => {

    return fetch(apiConfig.logoutUrl, {
        method: 'GET',
        credentials: 'include'
    })
        .then(res => {

            if (res.status === 400 || res.status === 401) {
                throw res.json()
            }

            return res.json()
        })
}

export const me = () => {

    return fetch(apiConfig.meUrl, {
        method: "GET",
        credentials: 'include'
    })
        .then(res => res.json())
}

const authService = { login, register, logout, me }

export default authService