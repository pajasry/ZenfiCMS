import { gql, useMutation } from "@apollo/client";
import { FormikProps } from "formik";
import { Ref } from "react";
import { toast } from "react-toastify";
import * as Yup from "yup";

import { Form, FormGroup, PublicationStatusesSelect } from "@/components/form";
import { PageSeo } from "@/containers/formSections";
import {
    PagesEntity,
    UpdatePageInput,
    UpdatePageMutation,
    UpdatePageMutationVariables,
} from "@/graphql/schema";

import * as Styled from "./styled";

/**
 * Create page form
 */
export const UpdatePageForm = ({ formRef, page }: UpdatePageFormProps) => {
    const [updatePage] = useMutation<
        UpdatePageMutation,
        UpdatePageMutationVariables
    >(UPDATE_PAGE, {
        onCompleted: () => toast.success("Stránka byla aktualizována"),
    });

    const onSubmit = async (updatePageInput: UpdatePageInput) => {
        await updatePage({
            variables: { id: page.id, updatePageInput },
        });
    };

    const validationSchema = Yup.object().shape({
        name: Yup.string().required("Povinné pole"),
        description: Yup.string().required("Povinné pole"),
    });

    const initialValues: UpdatePageInput = {
        name: page.name,
        description: page.description,
        statusId: page.status.id,
    };

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

const UPDATE_PAGE = gql`
    mutation UPDATE_PAGE($id: String!, $updatePageInput: UpdatePageInput!) {
        updatePage(id: $id, updatePageInput: $updatePageInput) {
            item {
                id
            }
        }
    }
`;

interface UpdatePageFormProps {
    page: PagesEntity;
    formRef: Ref<FormikProps<UpdatePageInput>>;
}
