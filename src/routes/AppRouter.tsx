import React, {useContext, useEffect} from 'react';
import {Navigate, Route, Routes, useNavigate} from "react-router-dom";
import {booksRoutes} from "./routes";
import {MAIN_ROUTE} from "../assets/const";
import {Context} from "../ContextProvider";


const AppRouter = () => {
    const {booksStore} = useContext(Context)
    const navigate = useNavigate()

    //Redirect checking exist our oneBook
    useEffect(() => {
        if (!booksStore.oneBookData.id){
            return navigate("/booklist");
        }
    },[booksStore.books,booksStore.oneBookData.id,navigate]);

    return (
        <Routes>
            {booksRoutes.map(({path, Component}) =>
                <Route key={path} path={path} element={<Component/>}/>
                    )}
            <Route path="*" element={<Navigate to={MAIN_ROUTE} replace />}/>
        </Routes>
    );
};

export default AppRouter;