import React, {ReactNode} from 'react';
import "./Header.css"
import {observer} from "mobx-react-lite";

interface HeaderInterface {
    style?: React.CSSProperties
    globalStore?: any
    children?:ReactNode
    className?: string
}

const Header:React.FC<HeaderInterface> = observer(
    ({style,children,className}) => {

    return (
        <header style={style} className={`header_block ${className}`}>
            {children}
        </header>
    );
});

export default Header;