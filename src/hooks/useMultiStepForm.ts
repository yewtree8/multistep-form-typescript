import { ReactElement, useState } from "react";

export function useMultistepForm(steps: ReactElement[]) {
    const [stepIndex, setStepIndex] = useState(0);
}