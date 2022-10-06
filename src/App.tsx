import AccountForm from './forms/AccountForm';
import AddressForm from './forms/AddressForm';
import UserDataForm from './forms/UserDataForm';
import { useMultistepForm } from './hooks/useMultiStepForm';
import './style/App.css';

function App() {

  const { 
    steps, stepIndex, step, isFirstStep, back, next, isLastStep
  } = useMultistepForm([<UserDataForm />, <AddressForm />, <AccountForm />]);


  return (
    <div className="formWrapper">

      <h3>Vite React Multi Step Form!</h3>

      <form>

        <div className="formInner">
          {stepIndex + 1} / {steps.length}
        </div>
          {step}
        <div className="buttonWrapper">
          {!isFirstStep && <button type='button' onClick={back}>Back</button>}
          <button type='button' onClick={next}>{isLastStep ? 'Finish' : 'Next'}</button>
        </div>
      </form>  
    </div>
  )
}

export default App
