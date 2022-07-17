import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HomePage } from "@/pages";

/**
 * Router component
 */
export const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path={RoutesName.HOME} element={<HomePage />} />
            </Routes>
        </BrowserRouter>
    );
};

export enum RoutesName {
    HOME = "/",
    MEDIA = "/media",
    POSTS = "/posts",
    PAGES = "/pages",
    APPEARANCE = "/appearance",
    USERS = "/users",
    SETTINGS = "/settings",
}
