import "react-toastify/dist/ReactToastify.css";

import { gql, useQuery } from "@apollo/client";
import * as _ from "lodash";
import { AppProps } from "next/app";
import Head from "next/head";
import { useRouter } from "next/router";
import { Fragment, useCallback, useEffect, useState } from "react";
import { ToastContainer } from "react-toastify";

import { Spinner } from "@/components/core";
import * as Styled from "@/globalStyles";
import { MeQuery, MeQueryVariables } from "@/graphql/schema";
import { selectSignedUser, signInAction, useAppDispatch, useAppSelector } from "@/redux";
import { RoutesName } from "@/types";
import { withProviders } from "@/wrappers";

/**
 * App structure
 */
const App = ({ Component, pageProps }: AppProps) => {
    const router = useRouter();
    const dispatch = useAppDispatch();
    const { signedUser } = useAppSelector(selectSignedUser);

    const [loaded, setLoaded] = useState(false);

    const { loading } = useQuery<MeQuery, MeQueryVariables>(ME, {
        onCompleted: (data) => {
            const user = _.omit(data.me, "__typename");
            dispatch(signInAction(user.item));
        },
    });

    const handleRedirects = useCallback(async () => {
        const redirectFromAdmin = router.pathname !== RoutesName.LOGIN && !signedUser;
        const redirectFromLogin = router.pathname === RoutesName.LOGIN && signedUser;

        if (redirectFromAdmin) return router.push(RoutesName.LOGIN);
        if (redirectFromLogin) return router.push(RoutesName.HOME);

        setLoaded(true);
    }, [router, signedUser]);

    useEffect(() => {
        if (loading) return;

        handleRedirects().finally(() => setLoaded(true));
    }, [signedUser, loading, router, handleRedirects]);

    if (!loaded) {
        return (
            <Fragment>
                <Head>
                    <title>ZenfiCMS</title>
                </Head>
                <Styled.Loading>
                    <Spinner />
                </Styled.Loading>
            </Fragment>
        );
    }

    return (
        <Styled.Wrapper>
            <Styled.Global />
            <Component {...pageProps} />
            <ToastContainer />
        </Styled.Wrapper>
    );
};

const ME = gql`
    query ME {
        me {
            item {
                id
                email
                firstName
                lastName
            }
        }
    }
`;

export default withProviders(App);
