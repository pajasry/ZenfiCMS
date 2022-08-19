import { LoginForm } from "@/components/form/containers";
import { AuthTemplate } from "@/components/layout/templates";

/**
 * Login page
 */
const Login = () => {
    return (
        <AuthTemplate title="Přihlášení">
            <LoginForm />
        </AuthTemplate>
    );
};

export default Login;
