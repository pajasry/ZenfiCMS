import "react-toastify/dist/ReactToastify.css";

import { gql, useQuery } from "@apollo/client";
import * as _ from "lodash";
import { AppProps } from "next/app";
import Head from "next/head";
import { useRouter } from "next/router";
import { Fragment, useCallback, useEffect, useState } from "react";

import { Spinner } from "@/components/core";
import * as Styled from "@/globalStyles";
import { MeQuery, MeQueryVariables, UserEntity } from "@/graphql/schema";
import {
    selectSignedUser,
    signInAction,
    useAppDispatch,
    useAppSelector,
} from "@/redux";
import { RoutesName } from "@/types";
import { withProviders } from "@/wrappers";

/**
 * App structure
 */
const App = ({ Component, pageProps }: AppProps) => {
    const router = useRouter();

    const isFront = !_.includes(router.pathname, "/admin");

    const dispatch = useAppDispatch();
    const { signedUser } = useAppSelector(selectSignedUser);

    const [loaded, setLoaded] = useState(false);

    const { loading } = useQuery<MeQuery, MeQueryVariables>(ME, {
        onCompleted: (data) => {
            const user = _.omit(data.me, "__typename");
            dispatch(signInAction(user.item as UserEntity));
        },
        skip: isFront,
    });

    const handleRedirects = useCallback(async () => {
        const authRoutes = [
            RoutesName.LOGIN,
            RoutesName.RESET_PASSWORD,
            RoutesName.CREATE_PASSWORD,
        ];

        const redirectFromAdmin =
            !_.includes(authRoutes, router.pathname) && !signedUser;

        const redirectFromLogin =
            _.includes(authRoutes, router.pathname) && signedUser;

        if (redirectFromAdmin) return router.push(RoutesName.LOGIN);
        if (redirectFromLogin) return router.push(RoutesName.HOME);

        setLoaded(true);
    }, [router, signedUser]);

    useEffect(() => {
        if (loading || isFront) return;

        handleRedirects().finally(() => setLoaded(true));
    }, [signedUser, loading, router, handleRedirects, isFront]);

    if (isFront) {
        return (
            <Styled.Wrapper>
                <Head>
                    <title>&#65279;</title>
                </Head>
                <Component {...pageProps} />
            </Styled.Wrapper>
        );
    }

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
        </Styled.Wrapper>
    );
};

const ME = gql`
    query ME {
        me {
            item {
                id
                email
                username
            }
        }
    }
`;

export default withProviders(App);
