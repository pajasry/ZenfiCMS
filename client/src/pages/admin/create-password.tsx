import React from "react";

import { CreatePasswordForm } from "@/components/form/containers";
import { AuthTemplate } from "@/components/layout/templates";

/**
 * Reset password page
 */
const CreatePassword = () => {
    return (
        <AuthTemplate title="Vytvoření hesla">
            <CreatePasswordForm />
        </AuthTemplate>
    );
};

export default CreatePassword;
