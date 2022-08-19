import { gql, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { useEffect } from "react";

import { ClientPageQuery, ClientPageQueryVariables } from "@/graphql/schema";
import { RoutesName } from "@/types";

export const useClientPage = (path: string | undefined) => {
    const router = useRouter();

    const { data, loading } = useQuery<
        ClientPageQuery,
        ClientPageQueryVariables
    >(FIND_PAGE, {
        skip: !path,
        variables: { path: path as string },
    });

    const page = data?.clientPage.item;

    useEffect(() => {
        const pageWasNotFound = !page && !loading && !!path;
        const pageIsHidden = page && page.status.name !== "Veřejný";

        if (pageWasNotFound || pageIsHidden) {
            router.push(RoutesName.NOT_FOUND);
        }
    }, [loading, data, path, router, page]);

    return { page };
};

const FIND_PAGE = gql`
    query FIND_PAGE($path: String!) {
        clientPage(path: $path) {
            item {
                name
                description
                status {
                    name
                }
            }
        }
    }
`;
