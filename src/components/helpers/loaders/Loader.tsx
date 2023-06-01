import React from 'react';
import { Oval } from  'react-loader-spinner'
import "./Loader.css"

interface LoaderInterface{
    visible:boolean | undefined
}

const Loader:React.FC<LoaderInterface> = ({visible}) => {
    return (
        <div className={`loader`}>
            <Oval
                height={window.innerHeight/6}
                width={window.innerWidth/6}
                color = "#18c781"
                secondaryColor= '#56d3cc'
                ariaLabel = 'three-dots-loading'
                visible={visible}
            />
        </div>
    );
};

export default Loader;