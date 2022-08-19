import { gql, useMutation, useQuery } from "@apollo/client";
import { FormikProps } from "formik";
import { useRouter } from "next/router";
import { Fragment, useRef } from "react";
import { toast } from "react-toastify";

import { ButtonProps } from "@/components/core";
import { UpdatePageForm } from "@/components/form/containers";
import { AdminTemplatePageHeader } from "@/components/layout/custom";
import { AdminTemplate } from "@/components/layout/templates";
import {
    PageEntity,
    PageQuery,
    PageQueryVariables,
    SetHomepageMutation,
    SetHomepageMutationVariables,
    UpdatePageInput,
} from "@/graphql/schema";
import { createPagePreviewLink } from "@/utils";

/**
 * Page
 */
const Page = () => {
    const formRef = useRef<FormikProps<UpdatePageInput>>(null);

    const router = useRouter();
    const pageId = router.query?.id as string;

    const { data } = useQuery<PageQuery, PageQueryVariables>(FIND_PAGE, {
        variables: { id: pageId },
    });

    const [setHomepage, { loading }] = useMutation<
        SetHomepageMutation,
        SetHomepageMutationVariables
    >(SET_HOMEPAGE, {
        onError: (err) => toast.error(err.message),
        onCompleted: () => toast.success("Domovská stránka byla nastavena"),
        variables: { id: pageId },
        refetchQueries: ["FIND_PAGE"],
    });

    const submitForm = () => {
        return formRef.current?.submitForm();
    };

    const showPreview = (page: PageEntity) => {
        return window.open(createPagePreviewLink(page), "__blank");
    };

    const page = data?.page.item as PageEntity;
    const subPages = page?.subpages || [];

    const isHomepage = Boolean(page?.isHomepage);

    const actions: ButtonProps[] = [
        {
            value: "Nastavit jako domovskou stránku",
            icon: "link",
            variant: "success",
            onClick: setHomepage,
            isLoading: loading,
            isHidden: isHomepage,
        },
        {
            icon: "edit",
            value: "Editor",
            variant: "secondary",
            onClick: () => null,
        },
        {
            icon: "download",
            value: "Uložit",
            onClick: submitForm,
        },
    ];

    if (!page) return <Fragment />;

    const title = isHomepage ? "Domovská stránka" : "Stránka";

    return (
        <AdminTemplate title={title} forceHideWebPreview>
            <AdminTemplatePageHeader
                title={title}
                actions={actions}
                showPreview={() => showPreview(page)}
            />

            <UpdatePageForm
                page={page}
                formRef={formRef}
                subpages={subPages as PageEntity[]}
            />
        </AdminTemplate>
    );
};

const FIND_PAGE = gql`
    query FIND_PAGE($id: String!) {
        page(id: $id) {
            item {
                id
                name
                path
                description
                parentId
                isHomepage
                subpages {
                    id
                    name
                }
                status {
                    id
                }
            }
        }
    }
`;

const SET_HOMEPAGE = gql`
    mutation SET_HOMEPAGE($id: String!) {
        setHomepage(id: $id)
    }
`;

export default Page;
