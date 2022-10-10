import { FormWrapper } from "./FormWrapper";
import { FormPropType } from "../type/FormPropTypes";


export const AccountForm = ({email, password, updateFields} : FormPropType) => {

    return (
        <FormWrapper formTitle="Email and password">
        <label>Email</label>
        <input autoFocus required value={email} type='text'
        onChange={e => updateFields({email: e.target.value})} />
        <label>Password</label>
        <input autoFocus required value={password} type='password'
        onChange={e => updateFields({password: e.target.value})} />
        </FormWrapper>
    )

}

export default AccountForm;