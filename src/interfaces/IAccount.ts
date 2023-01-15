export interface IAccount {
    balances: {
        balanceAmount: {
            amount: string,
            currency: string
        },
        balanceType: string,
        referenceDate: string
    }[],
    cashAccountType: string,
    currency: string,
    institution_id: string,
    institution_name: string,
    iban?: string,
    name?: string,
    ownerName?: string
    resourceId: string
}