import { Router } from "@/components/routing";
import { gql, useQuery } from "@apollo/client";
import { signInAction, useAppDispatch } from "@/redux";
import { MeQuery, MeQueryVariables } from "@/graphql/schema";
import { ToastContainer } from "react-toastify";
import { Spinner } from "@/components/core";
import * as Styled from "./styled";
import * as _ from "lodash";

/**
 * App component
 */
export const App = () => {
    const dispatch = useAppDispatch();

    const { loading } = useQuery<MeQuery, MeQueryVariables>(ME, {
        onCompleted: (data) => {
            const user = _.omit(data.me, "__typename");

            dispatch(signInAction(user));
        },
    });

    if (loading)
        return (
            <Styled.Loading>
                <Spinner />
            </Styled.Loading>
        );

    return (
        <Styled.Wrapper>
            <Styled.Global />
            <Router />
            <ToastContainer />
        </Styled.Wrapper>
    );
};

const ME = gql`
    query ME {
        me {
            id
            email
            firstName
            lastName
        }
    }
`;
