import { CSSProperties } from "react";

export interface IModal {
    isOpen?: boolean,
    closeModal?: () => void,
    style?:CSSProperties
}

// export interface userData {
//     name:string,
//     email:string,
//     password:string
//   }