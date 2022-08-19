import { FormikProps } from "formik";
import { useRef } from "react";

import { ButtonProps } from "@/components/core";
import { CreatePageForm } from "@/components/form/containers";
import {
    AdminTemplate,
    AdminTemplateHeader,
} from "@/components/layout/templates";
import { CreatePageInput } from "@/graphql/schema";

/**
 * Create page
 */
const CreatePage = () => {
    const formRef = useRef<FormikProps<CreatePageInput>>(null);

    const submitForm = () => {
        return formRef.current?.submitForm();
    };

    const actions: ButtonProps[] = [
        {
            outline: true,
            icon: "edit",
            value: "Editor",
            onClick: () => null,
        },
        {
            icon: "download",
            value: "Uložit",
            onClick: submitForm,
        },
    ];

    return (
        <AdminTemplate title="Vytvoření stránky" forceHideWebPreview>
            <AdminTemplateHeader title="Vytvoření stránky" actions={actions} />
            <CreatePageForm formRef={formRef} />
        </AdminTemplate>
    );
};

export default CreatePage;
