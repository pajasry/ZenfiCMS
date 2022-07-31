import { LoginInput, LoginMutation, LoginMutationVariables } from "@/graphql/schema";
import { Form, FormGroup, FormInput } from "@/components/forms";
import { signInAction, useAppDispatch } from "@/redux";
import { gql, useMutation } from "@apollo/client";
import { Button } from "@/components/core";
import { setAuthToken } from "@/utils";
import { toast } from "react-toastify";
import * as Styled from "./styled";
import * as Yup from "yup";
import * as _ from "lodash";

/**
 * Login form
 */
export const LoginForm = () => {
    const dispatch = useAppDispatch();

    const [loginUser, { loading }] = useMutation<LoginMutation, LoginMutationVariables>(LOGIN, {
        onError: (error) => {
            toast.error(error.message);
        },
    });

    const onSubmit = async (loginInput: LoginInput) => {
        const { data } = await loginUser({ variables: { loginInput } });
        if (!data) return;

        const user = _.omit(data.login.user, "__typename");

        setAuthToken(data.login.token);
        dispatch(signInAction(user));
    };

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
                <Button
                    isLoading={loading}
                    value="Přihlásit se"
                    title="Přihlásit se"
                    type="submit"
                />
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
                lastName
                firstName
                createdAt
                updatedAt
            }
        }
    }
`;

const initialValues: LoginInput = {
    email: "",
    password: "",
};

const validationSchema = Yup.object().shape({
    email: Yup.string().email("Neplatný email").required("Povinné pole"),
    password: Yup.string().required("Povinné pole"),
});
