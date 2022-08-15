import { FormikProps } from "formik";
import { useRef } from "react";

import { ButtonProps } from "@/components/core";
import { PageHeader, Template } from "@/components/layout";
import { CreatePageForm } from "@/containers/forms";
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
            title: "Editor",
            onClick: () => null,
        },
        {
            icon: "download",
            value: "Uložit",
            title: "Uložit",
            onClick: submitForm,
        },
    ];

    return (
        <Template title="Vytvoření stránky">
            <PageHeader title="Vytvoření stránky" actions={actions} />
            <CreatePageForm formRef={formRef} />
        </Template>
    );
};

export default CreatePage;
