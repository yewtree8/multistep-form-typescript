import { FormWrapper } from "./FormWrapper";
import { FormPropType } from "../type/FormPropTypes";


type AddressFormProp = FormPropType & {
    updateFields:(fields:Partial<FormPropType>) => void
}


export const AddressForm = ({addressLine, secondAddressLine, cityTown, postcode, updateFields} : AddressFormProp
     ) => {

    return (
        <FormWrapper formTitle="Your Address">
        <label>First Adress Line</label>
        <input autoFocus required type='text'
         value={addressLine}
         onChange={e => updateFields({addressLine: e.target.value})} />
         <label>Second Adress Line</label>
        <input type='text' value={secondAddressLine}
        onChange={e => updateFields({secondAddressLine: e.target.value})} />
        <label>Town / City</label>
        <input type='text' required value={cityTown}
        onChange={e => updateFields({cityTown: e.target.value})} />
        <label>Post Code</label>
        <input type='text' required value={postcode}
         onChange={e => updateFields({postcode: e.target.value})} />

        </FormWrapper>
    )

}

export default AddressForm;