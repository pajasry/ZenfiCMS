import { AuthTemplate } from "@/components/layout";
import { LoginForm } from "@/containers/forms";

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
