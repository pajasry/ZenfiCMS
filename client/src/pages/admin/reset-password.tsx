import React from "react";

import { AuthTemplate } from "@/components/layout";
import { ResetPasswordForm } from "@/containers/forms";

/**
 * Reset password page
 */
const ResetPassword = () => {
    return (
        <AuthTemplate title="Zapomenuté heslo">
            <ResetPasswordForm />
        </AuthTemplate>
    );
};

export default ResetPassword;
