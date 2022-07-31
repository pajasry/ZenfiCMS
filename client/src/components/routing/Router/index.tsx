import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ProtectedRoute } from "@/components/routing";
import { selectSignedUser, useAppSelector } from "@/redux";
import {
    AppearanceView,
    HomeView,
    LoginView,
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
    const { signedUser } = useAppSelector(selectSignedUser);

    const dashboardIsAllowed = !!signedUser;
    const loginIsAllowed = !signedUser;

    return (
        <BrowserRouter>
            <Routes>
                <Route element={<ProtectedRoute isAllowed={dashboardIsAllowed} />}>
                    <Route path={RoutesName.HOME} element={<HomeView />} />
                    <Route path={RoutesName.MEDIA} element={<MediaView />} />
                    <Route path={RoutesName.POSTS} element={<PostsView />} />
                    <Route path={RoutesName.PAGES} element={<PagesView />} />
                    <Route path={RoutesName.APPEARANCE} element={<AppearanceView />} />
                    <Route path={RoutesName.USERS} element={<UsersView />} />
                    <Route path={RoutesName.SETTINGS} element={<SettingsView />} />
                </Route>
                <Route
                    element={
                        <ProtectedRoute isAllowed={loginIsAllowed} redirect={RoutesName.HOME} />
                    }
                >
                    <Route path={RoutesName.LOGIN} element={<LoginView />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
};

export enum RoutesName {
    LOGIN = "/login",
    HOME = "/",
    MEDIA = "/media",
    POSTS = "/posts",
    PAGES = "/pages",
    APPEARANCE = "/appearance",
    USERS = "/users",
    SETTINGS = "/settings",
}
