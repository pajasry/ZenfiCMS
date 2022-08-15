import { gql, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import React, { Fragment } from "react";

import { PageQuery, PageQueryVariables } from "@/graphql/schema";

const Parent = () => {
    const router = useRouter();
    const path = router.query.path;

    const { data } = useQuery<PageQuery, PageQueryVariables>(GET_PAGE, {
        skip: !path,
        variables: { path: path as string },
    });

    const page = data?.page.item;

    if (!page) return <Fragment />;

    return (
        <div>
            <h1>{page.name}</h1>
            <p>{page.description}</p>
        </div>
    );
};

const GET_PAGE = gql`
    query GET_PAGE($path: String) {
        page(path: $path) {
            item {
                name
                description
            }
        }
    }
`;

export default Parent;
