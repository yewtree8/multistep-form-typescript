import { useMultistepForm } from './hooks/useMultiStepForm';
import './style/App.css';

function App() {

  const { 
    steps, stepIndex, step, isFirstStep, back, next, isLastStep
  } = useMultistepForm([<div>One</div>,<div>Two</div>,<div>Three</div>]);


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
