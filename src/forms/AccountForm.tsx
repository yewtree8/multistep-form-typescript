import { FormWrapper } from "./FormWrapper";

export const AccountForm = () => {

    return (
        <FormWrapper formTitle="Email and password">
        <label>Email</label>
        <input autoFocus required type='text' />
        <label>Password</label>
        <input autoFocus required type='password' />
        </FormWrapper>
    )

}

export default AccountForm;