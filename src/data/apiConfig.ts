const baseURL = 'http://localhost:3001'
const openBankingBaseUrl = `${baseURL}/open-banking`
const userBaseUrl = `${baseURL}/user`

export const apiConfig = {
    baseUrl: baseURL,
    loginUrl: `${userBaseUrl}/login`,
    registerUrl: `${userBaseUrl}/register`,
    logoutUrl: `${userBaseUrl}/logout`,
    meUrl: `${userBaseUrl}/me`,
    institutionsUrl: `${openBankingBaseUrl}/institutions`,
    requisitionUrl: `${openBankingBaseUrl}/requisition`
}