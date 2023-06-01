import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import "./App.css"
import ContextProvider from './ContextProvider';
import {BrowserRouter} from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);

root.render(
    <ContextProvider>
        <BrowserRouter>
            <App/>
        </BrowserRouter>
    </ContextProvider>
);
