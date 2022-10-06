import { FormWrapper } from "./FormWrapper";

type UserDataProps = {
    firstName: string;
    lastName: string;
}

export const UserDataForm = ({firstName, lastName} : UserDataProps) => {

    return (
        <FormWrapper formTitle="Your Details">
        <label>First Name</label>
        <input autoFocus required name="firstName" type='text' value={firstName} />
        <label>Last Name</label>
        <input autoFocus required name="lastName" type='text' value={lastName} />
        </FormWrapper>
    )

}

export default UserDataForm;