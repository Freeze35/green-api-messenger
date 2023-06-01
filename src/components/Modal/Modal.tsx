import React, {ReactNode} from 'react';
import "./Modal.css"

interface ModalInterface {
    children?: ReactNode
    visible:boolean
    setVisible: React.Dispatch<React.SetStateAction<boolean>>
    className?: string
    turnOff?: boolean
    style?: React.CSSProperties
    visibleCloseBut?: boolean

}

// Modal window for messages
// class modal block black background
// class modal_content white message block

const Modal:React.FC<ModalInterface> = ({children,className,visible
                                        ,setVisible,turnOff,style,
                                         visibleCloseBut =true}) => {

    const closeModal = () =>{
        if(!turnOff) {
            setVisible(false)
        }
    }

    return (
        <div className={visible?"modal visible":"modal"} onClick={closeModal}>
            <div style={style} className={visible?"modal_content visible":"modal_content"}
                 onClick={e => {e.stopPropagation()}}>
                <button onClick={closeModal}
                        style={{display:visibleCloseBut?"flex":"none"}}
                        className="close_button">x</button>
                <div
                     className={className
                         ?`children_block ${className}`
                         :`children_block`}>
                    {children}
                </div>
            </div>
        </div>
    );
};

export default Modal;