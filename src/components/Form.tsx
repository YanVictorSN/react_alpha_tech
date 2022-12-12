import { Iform } from "../interfaces/formInterface";

export function Formulario ({onSubmit, children, textSubmit} : Iform) {

    return (
        <form onSubmit={(e) => onSubmit(e)} >
            {children}
            <button type='submit'>
                {textSubmit}
            </button>
        </form>
    )
} 

