import { CSSProperties } from "react";
import { IModal } from "../interfaces/modalnterface";

export function Modal({isOpen,closeModal} : IModal) {
    const divStyle : CSSProperties = {
        width:"100vw",
        height:'100vh',
        position: "absolute",
        display:"flex",
        background: "rgba(0,0,0,.5)",
        justifyContent: "center",
        alignItems: "center"
    }
    const modalStyle : CSSProperties = {
        display:"flex",
        alignItems: "flex-start",
        width:"50vh",
        height:'30vh',
        background: "#8d9fbb7b",
        borderRadius:"0.5rem"
      }
    
    const buttonStyle : CSSProperties = {
        width: "fit-content",
        alignSelf: "flex-start",
        marginLeft:"auto",
        cursor:"pointer",
        background: "#fbfdff79",
        borderRadius:"0.1",
    }
    return (
        isOpen ?
        <div style={divStyle}>
        <div style={modalStyle}>
            <button style={buttonStyle} onClick={closeModal}>X</button>
            <p></p>
        </div> 
        </div>:
        <></>
    )
}