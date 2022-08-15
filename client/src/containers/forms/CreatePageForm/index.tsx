import { gql, useMutation } from "@apollo/client";
import { FormikProps } from "formik";
import { useRouter } from "next/router";
import { Ref } from "react";
import { toast } from "react-toastify";
import * as Yup from "yup";

import { Form, FormGroup, PublicationStatusesSelect } from "@/components/form";
import { PageSeo } from "@/containers/formSections";
import {
    CreatePageInput,
    CreatePageMutation,
    CreatePageMutationVariables,
} from "@/graphql/schema";
import { RoutesName } from "@/types";

import * as Styled from "./styled";

/**
 * Create page form
 */
export const CreatePageForm = ({ formRef }: CreatePageFormProps) => {
    const router = useRouter();

    const [createPage] = useMutation<
        CreatePageMutation,
        CreatePageMutationVariables
    >(CREATE_PAGE, {
        onCompleted: () => toast.success("Stránka byla vytvořena"),
    });

    const onSubmit = async (createPageInput: CreatePageInput) => {
        const { data } = await createPage({ variables: { createPageInput } });

        const pathname = RoutesName.PAGE.replace(
            ":pageId",
            data?.createPage.item?.id || ""
        );

        return router.push(pathname);
    };

    const initialValues: CreatePageInput = {
        name: "",
        description: "",
    };

    const validationSchema = Yup.object().shape({
        name: Yup.string().required("Povinné pole"),
        description: Yup.string().required("Povinné pole"),
    });

    return (
        <Styled.Wrapper>
            <Form
                onSubmit={onSubmit}
                innerRef={formRef}
                initialValues={initialValues}
                validationSchema={validationSchema}
            >
                <Styled.BasicSettings>
                    <FormGroup name="name" title="">
                        <Styled.NameInput
                            name="name"
                            placeholder="Název stránky"
                        />
                    </FormGroup>

                    <Styled.PageInfo>
                        <Styled.PageInfoTitle
                            weight={600}
                            size="bigger-title"
                            value="Informace o stránce"
                        />

                        <FormGroup name="description" title="Popis">
                            <Styled.DescriptionInput
                                name="description"
                                textarea
                            />
                        </FormGroup>
                    </Styled.PageInfo>

                    <PageSeo />
                </Styled.BasicSettings>

                <Styled.Metadata>
                    <Styled.MetadataTitle
                        weight={600}
                        size="bigger-title"
                        value="Parametry"
                    />

                    <PublicationStatusesSelect name="statusId" />
                </Styled.Metadata>
            </Form>
        </Styled.Wrapper>
    );
};

const CREATE_PAGE = gql`
    mutation CREATE_PAGE($createPageInput: CreatePageInput!) {
        createPage(createPageInput: $createPageInput) {
            item {
                id
            }
        }
    }
`;

interface CreatePageFormProps {
    formRef: Ref<FormikProps<CreatePageInput>>;
}
