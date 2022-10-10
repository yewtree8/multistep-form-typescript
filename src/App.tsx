import { FormEvent, ReactEventHandler, useState } from 'react';
import AccountForm from './forms/AccountForm';
import AddressForm from './forms/AddressForm';
import UserDataForm from './forms/UserDataForm';
import { useMultistepForm } from './hooks/useMultiStepForm';
import './style/App.css';

type FormData = {
  firstName: string,
  lastName: string,
  addressLine: string,
  secondAddressLine: string,
  cityTown: string,
  postcode: string,
  email: string,
  password: string,
}

const INITIAL_DATA: FormData = {
  firstName: "",
  lastName: "",
  addressLine: "",
  secondAddressLine: "",
  cityTown: "",
  postcode: "",
  email: "",
  password: ""
}

function App() {
  const [storedData, setStoredData] = useState(INITIAL_DATA);

  const updateFields = (fields:Partial<FormData>) => {
    setStoredData((prev) => {
      return {...prev, ...fields};
    })
  }

  const { 
    steps, stepIndex, step, isFirstStep, back, next, isLastStep
  } = useMultistepForm(
    [
    <UserDataForm {...storedData} updateFields={updateFields}/>,
    <AddressForm {...storedData} updateFields={updateFields}/>,
    <AccountForm {...storedData} updateFields={updateFields}/>]);


  const handleSubmit = (e:FormEvent) => {
    e.preventDefault();
    next();

  }

  return (
    <div className="appWrapper">

      <form onSubmit={handleSubmit}>
        <div className="formInner">
          {stepIndex + 1} / {steps.length} 
        </div>
          {step}
        <div className="buttonWrapper">
          {!isFirstStep && <button type='button' onClick={back}>Back</button>}
          <button type='submit'>{isLastStep ? 'Finish' : 'Next'}</button>
        </div>
      </form>  
    </div>
  )
}

export default App
