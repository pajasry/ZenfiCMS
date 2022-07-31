import { Navigate, Outlet } from "react-router";
import { RoutesName } from "@/components/routing";

/**
 * Protected route component
 */
export const ProtectedRoute = ({ isAllowed, redirect = RoutesName.LOGIN }: ProtectedRouteProps) => {
    if (!isAllowed) {
        return <Navigate to={redirect} replace />;
    }

    return <Outlet />;
};

interface ProtectedRouteProps {
    isAllowed: boolean;
    redirect?: string;
}
