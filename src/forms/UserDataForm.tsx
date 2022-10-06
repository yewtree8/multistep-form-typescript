import { FormWrapper } from "./FormWrapper";

export const UserDataForm = () => {

    return (
        <FormWrapper formTitle="Your Details">
        <label>First Name</label>
        <input autoFocus required type='text' />
        <label>Last Name</label>
        <input autoFocus required type='text' />
        </FormWrapper>
    )

}

export default UserDataForm;