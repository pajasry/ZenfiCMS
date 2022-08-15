import { gql, useQuery } from "@apollo/client";
import { FormikProps } from "formik";
import { useRouter } from "next/router";
import { useRef } from "react";

import { ButtonProps } from "@/components/core";
import { PageHeader, Template } from "@/components/layout";
import { UpdatePageForm } from "@/containers/forms";
import {
    PageQuery,
    PageQueryVariables,
    UpdatePageInput,
} from "@/graphql/schema";

/**
 * Page
 */
const Page = () => {
    const formRef = useRef<FormikProps<UpdatePageInput>>(null);

    const { query } = useRouter();

    const { data } = useQuery<PageQuery, PageQueryVariables>(GET_PAGE, {
        variables: { id: query?.id as string },
    });

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

    const page = data?.page.item;

    return (
        <Template title="Stránka">
            <PageHeader title="Stránka" actions={actions} />

            {page && <UpdatePageForm page={page} formRef={formRef} />}
        </Template>
    );
};

const GET_PAGE = gql`
    query GET_PAGE($id: String!) {
        page(id: $id) {
            item {
                id
                name
                description
                status {
                    id
                }
            }
        }
    }
`;

export default Page;
