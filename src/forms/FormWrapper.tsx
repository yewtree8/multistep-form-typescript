import { ReactNode } from "react";
import '../style/App.css';

type FormProps = {
    formTitle: String;
    children: ReactNode;
}

export const FormWrapper = ({formTitle, children} : FormProps) => {
    return (
        <div className="formWrapper">
        <h2> {formTitle}</h2>
        <div></div>
            {children}
        </div>
    )
}