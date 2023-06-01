import MessengerPage from "../pages/MessengerPage/messengerPage";

import UserPage from "../pages/userPage";
import {MAIN_ROUTE, USER_ROUTE} from "../assets/const";


export const constRoutes = [
    {
        path:MAIN_ROUTE,
        Component: MessengerPage
    },
    //route
    {
        path:USER_ROUTE,
        Component: UserPage
    }
]