import React from "react";

const Modal = (props) => {
    const handleCloseModal = (e) => {
        if (e.target.classList.contains("backdrop"))
            props.setSelectedImg(null);
    }
    return (
        <div className="backdrop" onClick = { handleCloseModal }>
            <img src={props.selectedImg} alt="enlarged img" />

        </div>
    )
}

export default Modal;