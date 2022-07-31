import { AuthTemplate } from "@/components/layout";
import { LoginForm } from "@/containers/forms";

export const LoginView = () => {
    return (
        <AuthTemplate title="Přihlášení">
            <LoginForm />
        </AuthTemplate>
    );
};
