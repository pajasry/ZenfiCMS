import { gql, useMutation } from "@apollo/client";
import { FormikProps } from "formik";
import * as _ from "lodash";
import { Ref } from "react";
import { toast } from "react-toastify";
import * as Yup from "yup";

import { PageStatusSelect, SubpagesSelect } from "@/components/form/inputs";
import { Form, FormGroup } from "@/components/form/main";
import {
    PageEntity,
    UpdatePageInput,
    UpdatePageMutation,
    UpdatePageMutationVariables,
} from "@/graphql/schema";

import * as Styled from "./styled";

/**
 * Create page form
 */
export const UpdatePageForm = ({
    page,
    formRef,
    subpages,
}: UpdatePageFormProps) => {
    const [updatePage] = useMutation<
        UpdatePageMutation,
        UpdatePageMutationVariables
    >(UPDATE_PAGE, {
        onError: (err) => toast.error(err.message),
        onCompleted: () => toast.success("Stránka byla aktualizována"),
        refetchQueries: ["FIND_PAGE", "FIND_PAGES"],
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
        path: page.path,
        statusId: page.status.id,
        description: page.description,
        subpagesIds: _.map(subpages, (p) => p.id),
    };

    return (
        <Styled.Wrapper>
            <Form
                onSubmit={onSubmit}
                innerRef={formRef}
                initialValues={initialValues}
                validationSchema={validationSchema}
                enableReinitialize
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

                        <FormGroup name="path" title="URL cesta">
                            <Styled.PathInput prepend="/" name="path" />
                        </FormGroup>

                        <FormGroup name="description" title="Popis">
                            <Styled.DescriptionInput
                                name="description"
                                textarea
                            />
                        </FormGroup>
                    </Styled.PageInfo>
                </Styled.BasicSettings>

                <Styled.Metadata>
                    <Styled.MetadataTitle
                        weight={600}
                        size="bigger-title"
                        value="Parametry"
                    />

                    <FormGroup name="statusId" title="Status">
                        <PageStatusSelect name="statusId" />
                    </FormGroup>

                    {!page.parentId && (
                        <FormGroup name="subpagesIds" title="Podstránky">
                            <SubpagesSelect
                                name="subpagesIds"
                                subpages={subpages}
                                pageId={page.id}
                            />
                        </FormGroup>
                    )}
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
    page: PageEntity;
    subpages: PageEntity[];
    formRef: Ref<FormikProps<UpdatePageInput>>;
}
