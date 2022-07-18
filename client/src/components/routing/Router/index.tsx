import { BrowserRouter, Routes, Route } from "react-router-dom";
import {
    AppearanceView,
    HomeView,
    MediaView,
    PagesView,
    PostsView,
    SettingsView,
    UsersView,
} from "@/views";

/**
 * Router component
 */
export const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path={RoutesName.HOME} element={<HomeView />} />
                <Route path={RoutesName.MEDIA} element={<MediaView />} />
                <Route path={RoutesName.POSTS} element={<PostsView />} />
                <Route path={RoutesName.PAGES} element={<PagesView />} />
                <Route path={RoutesName.APPEARANCE} element={<AppearanceView />} />
                <Route path={RoutesName.USERS} element={<UsersView />} />
                <Route path={RoutesName.SETTINGS} element={<SettingsView />} />
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
