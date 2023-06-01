import {Navigate, Route, Routes} from "react-router-dom";
import {constRoutes} from "./routes";
import {MAIN_ROUTE} from "../assets/const";


const AppRouter = () => {

    return (
        <Routes>
            {constRoutes.map(({path, Component}) =>
                <Route key={path} path={path} element={<Component/>}/>
                    )}
            <Route path="*" element={<Navigate to={MAIN_ROUTE} replace />}/>
        </Routes>
    );
};

export default AppRouter;