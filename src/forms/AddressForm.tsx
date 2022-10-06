export const AddressForm = () => {

    return (
        <>
        <label>First Adress Line</label>
        <input autoFocus required type='text' />
        <label>Second Adress Line</label>
        <input type='text' />
        <label>Town / City</label>
        <input type='text' required />
        <label>Post Code</label>
        <input type='text' required />
        </>
    )

}

export default AddressForm;