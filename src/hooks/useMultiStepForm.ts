import { ReactElement, useState } from "react";

export function useMultistepForm(steps: ReactElement[]) {
    const [stepIndex, setStepIndex] = useState(0);
    const [isFirstStep, setIsFirstStep] = useState(true);


const next = () => {
    setStepIndex((step) => {
        if(step >= steps.length -1) return step;
         return step+1
        })
}

const back = () => { 
    setStepIndex((step) => {
        if(step <= 0) {
            setIsFirstStep(true);
            return step;
        }
        return step - 1
    })
}

function goToStep(step:number) {
    setStepIndex(step);
    if(step <= 1) {
        setIsFirstStep(true);
    }
}


return { 
    stepIndex,
    step: steps[stepIndex],
    goToStep,
    steps,
    isFirstStep,
    next,
    back
}

}