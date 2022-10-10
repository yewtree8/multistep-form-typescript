import { FormWrapper } from "./FormWrapper";
import { FormPropType } from "../type/FormPropTypes";

// type UserFormProps = FormPropType & {
//     updateFields:(fields:Partial<FormPropType>) => void
// }

export const UserDataForm = ({firstName, lastName, updateFields} : FormPropType) => {


    return (
        <FormWrapper formTitle="Your Details">
        <label>First Name</label>
        <input autoFocus required name="firstName" type='text' 
        value={firstName}
        onChange={e => updateFields({firstName: e.target.value})} />
        <label>Last Name</label>
        <input autoFocus required name="lastName" type='text' value={lastName}
        onChange={e => updateFields({lastName: e.target.value})} />
        </FormWrapper>
    )

}

export default UserDataForm;