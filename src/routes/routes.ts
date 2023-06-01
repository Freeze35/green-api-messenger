import {MAIN_ROUTE, PAGE_ROUTE} from "../assets/const";
import BooksList from "../components/booksComponent/BooksList/BooksList";
import BookPage from "../pages/BookPage/BookPage";

export const booksRoutes = [
    {
        path:MAIN_ROUTE,
        Component: BooksList
    },
    {
        path:PAGE_ROUTE,
        Component: BookPage
    }
]