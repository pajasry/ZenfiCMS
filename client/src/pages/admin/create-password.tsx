import React from "react";

import { AuthTemplate } from "@/components/layout";
import { CreatePasswordForm } from "@/containers/forms";

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
