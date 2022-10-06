import { ReactElement, useState } from "react";

export function useMultistepForm(steps: ReactElement[]) {
    const [stepIndex, setStepIndex] = useState(0);


const next = () => {
    setStepIndex((step) => { return step+1})
}

const back = () => { 
    setStepIndex((step) => { return step-1})
}

function goToStep(step:number) {
    setStepIndex(step);
}


return { 
    stepIndex,
    step: steps[stepIndex],
    goToStep
}

}