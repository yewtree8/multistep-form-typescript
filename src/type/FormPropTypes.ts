export type FormPropType = {
    firstName?: string,
    lastName?: string,
    addressLine?: string,
    secondAddressLine?: string,
    cityTown?: string,
    postcode?: string,
    email?: string,
    password?: string,
    updateFields:(fields:Partial<FormPropType>) => void
}