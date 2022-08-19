import React from "react";

import { ResetPasswordForm } from "@/components/form/containers";
import { AuthTemplate } from "@/components/layout/templates";

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
