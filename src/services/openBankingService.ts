import { apiConfig } from "../data/apiConfig"

export const getBankAuthenticationLink = (bankId: string) => {

    return fetch(`${apiConfig.requisitionUrl}?bankId=${bankId}`, {
        method: "GET",
        credentials: 'include'
    })
        .then(res => {

            if (res.status === 400 || res.status === 401) {
                throw res.json()
            }

            return res.json()
        })

}