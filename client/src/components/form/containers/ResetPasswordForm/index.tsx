import { gql, useMutation } from "@apollo/client";
import Link from "next/link";
import { useRouter } from "next/router";
import { toast } from "react-toastify";
import * as Yup from "yup";

import { Button, Text } from "@/components/core";
import { FormInput } from "@/components/form/inputs";
import { Form, FormGroup } from "@/components/form/main";
import {
    ResetPasswordInput,
    ResetPasswordMutation,
    ResetPasswordMutationVariables,
} from "@/graphql/schema";
import { RoutesName } from "@/types";

import * as Styled from "./styled";

export const ResetPasswordForm = () => {
    const router = useRouter();

    const [resetPassword, { loading }] = useMutation<
        ResetPasswordMutation,
        ResetPasswordMutationVariables
    >(RESET_PASSWORD, {
        onError: (err) => toast.error(err.message),
        onCompleted: () =>
            toast.success("Na email obdržíte odkaz na resetování hesla"),
    });

    const onSubmit = async (resetPasswordInput: ResetPasswordInput) => {
        await resetPassword({ variables: { resetPasswordInput } });
        return router.push(RoutesName.LOGIN);
    };

    const initialValues: ResetPasswordInput = {
        email: "",
    };

    const validationSchema = Yup.object().shape({
        email: Yup.string().email("Neplatný email").required("Povinné pole"),
    });

    return (
        <Styled.Wrapper>
            <Form
                initialValues={initialValues}
                onSubmit={onSubmit}
                validationSchema={validationSchema}
            >
                <FormGroup name="email" title="Email">
                    <FormInput name="email" type="email" />
                </FormGroup>

                <Styled.Actions>
                    <Link href={RoutesName.LOGIN} passHref>
                        <Text as="a" value="Přejít na přihlášení" />
                    </Link>

                    <Button
                        isLoading={loading}
                        value="Resetovat heslo"
                        type="submit"
                    />
                </Styled.Actions>
            </Form>
        </Styled.Wrapper>
    );
};

const RESET_PASSWORD = gql`
    mutation RESET_PASSWORD($resetPasswordInput: ResetPasswordInput!) {
        resetPassword(resetPasswordInput: $resetPasswordInput)
    }
`;
