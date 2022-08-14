import { gql, useMutation } from "@apollo/client";
import Link from "next/link";
import { useRouter } from "next/router";
import { toast } from "react-toastify";
import * as Yup from "yup";

import { Button, Text } from "@/components/core";
import { Form, FormGroup, FormInput } from "@/components/forms";
import {
    CreatePasswordInput,
    CreatePasswordMutation,
    CreatePasswordMutationVariables,
} from "@/graphql/schema";
import { RoutesName } from "@/types";
import { getPasswordToken } from "@/utils";

import * as Styled from "./styled";

export const CreatePasswordForm = () => {
    const router = useRouter();

    const [createPassword, { loading }] = useMutation<
        CreatePasswordMutation,
        CreatePasswordMutationVariables
    >(CREATE_PASSWORD, {
        onError: (error) => toast.error(error.message),
        onCompleted: () => toast.success("Heslo bylo úspěšně změněno"),
    });

    const onSubmit = async (customInput: CustomInput) => {
        const { password, rePassword } = customInput;

        if (password !== rePassword) {
            return toast.error("Hesla se musí schodovat.");
        }

        const passwordToken = getPasswordToken() || "";

        await createPassword({
            variables: { createPasswordInput: { password, token: passwordToken } },
        });
        return router.push(RoutesName.LOGIN);
    };

    return (
        <Styled.Wrapper>
            <Form
                initialValues={initialValues}
                onSubmit={onSubmit}
                validationSchema={validationSchema}
            >
                <FormGroup name="password" title="Heslo">
                    <FormInput name="password" type="password" />
                </FormGroup>

                <FormGroup name="rePassword" title="Heslo znovu">
                    <FormInput name="rePassword" type="password" />
                </FormGroup>

                <Styled.Actions>
                    <Link href={RoutesName.LOGIN} passHref>
                        <Text as="a" value="Přejít na přihlášení" />
                    </Link>

                    <Button
                        isLoading={loading}
                        value="Vytvořit heslo"
                        title="Vytvořit heslo"
                        type="submit"
                    />
                </Styled.Actions>
            </Form>
        </Styled.Wrapper>
    );
};

const CREATE_PASSWORD = gql`
    mutation CREATE_PASSWORD($createPasswordInput: CreatePasswordInput!) {
        createPassword(createPasswordInput: $createPasswordInput)
    }
`;

interface CustomInput extends CreatePasswordInput {
    rePassword: string;
}

const initialValues: CreatePasswordInput = {
    password: "",
    token: "",
};

const validationSchema = Yup.object().shape({
    password: Yup.string().required("Povinné pole"),
    rePassword: Yup.string().required("Povinné pole"),
});
