import { gql, useMutation } from "@apollo/client";
import * as _ from "lodash";
import Link from "next/link";
import * as Yup from "yup";

import { Button, Text } from "@/components/core";
import { Form, FormGroup, FormInput } from "@/components/form";
import {
    LoginInput,
    LoginMutation,
    LoginMutationVariables,
} from "@/graphql/schema";
import { signInAction, useAppDispatch } from "@/redux";
import { RoutesName } from "@/types";
import { setAuthToken } from "@/utils";

import * as Styled from "./styled";

/**
 * Login form
 */
export const LoginForm = () => {
    const dispatch = useAppDispatch();

    const [loginUser, { loading }] = useMutation<
        LoginMutation,
        LoginMutationVariables
    >(LOGIN);

    const onSubmit = async (loginInput: LoginInput) => {
        const { data } = await loginUser({ variables: { loginInput } });
        if (!data) return;

        const user = _.omit(data.login.user, "__typename");

        setAuthToken(data.login.token);
        dispatch(signInAction(user));
    };

    const initialValues: LoginInput = {
        email: "",
        password: "",
    };

    const validationSchema = Yup.object().shape({
        email: Yup.string().email("Neplatný email").required("Povinné pole"),
        password: Yup.string().required("Povinné pole"),
    });

    return (
        <Styled.Wrapper>
            <Form
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={onSubmit}
            >
                <FormGroup name="email" title="Email">
                    <FormInput name="email" type="email" />
                </FormGroup>
                <FormGroup name="password" title="Heslo">
                    <FormInput name="password" type="password" />
                </FormGroup>
                <Styled.Actions>
                    <Link href={RoutesName.RESET_PASSWORD} passHref>
                        <Text as="a" value="Zapomenuté heslo?" />
                    </Link>
                    <Button
                        isLoading={loading}
                        value="Přihlásit se"
                        title="Přihlásit se"
                        type="submit"
                    />
                </Styled.Actions>
            </Form>
        </Styled.Wrapper>
    );
};

const LOGIN = gql`
    mutation LOGIN($loginInput: LoginInput!) {
        login(loginInput: $loginInput) {
            token
            user {
                id
                email
                username
                createdAt
                updatedAt
            }
        }
    }
`;
