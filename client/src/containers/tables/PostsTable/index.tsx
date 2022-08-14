import { gql, useQuery } from "@apollo/client";
import { useMemo } from "react";

import { Pagination, Table } from "@/components/core";
import { PostsEntity, PostsQuery, PostsQueryVariables } from "@/graphql/schema";
import { usePagination } from "@/hooks/usePagination";
import { TableActionType, TableColumnType } from "@/types";

import * as Styled from "./styled";

/**
 * Posts table
 */
export const PostsTable = () => {
    const { take, setSkip, skip, count, setCount } = usePagination(10);

    const { data, loading } = useQuery<PostsQuery, PostsQueryVariables>(GET_POSTS, {
        variables: {
            skip,
            take,
        },
        onCompleted: (data) => setCount(data.posts.count),
    });

    const actions = useMemo<TableActionType<PostsEntity>[]>(
        () => [
            { value: "Upravit", onClick: () => alert("edit") },
            { value: "Odstranit", variant: "danger", onClick: () => alert("remove") },
        ],
        []
    );

    const columns = useMemo<TableColumnType<PostsEntity>[]>(
        () => [
            {
                name: "Název",
                field: "name",
                grow: 3,
            },
            {
                name: "Stav",
                field: "status",
                type: "publicationStatus",
            },
            {
                name: "Datum vytvoření",
                type: "date",
                field: "createdAt",
            },
            {
                name: "Autor",
                field: "author",
                type: "author",
            },
        ],
        []
    );

    return (
        <Styled.Wrapper>
            <Table
                isLoading={loading}
                actions={actions}
                columns={columns}
                data={data?.posts.items || []}
            />
            <Pagination count={count} take={take} skip={skip} setSkip={setSkip} />
        </Styled.Wrapper>
    );
};

const GET_POSTS = gql`
    query GET_POSTS($skip: Int, $take: Int) {
        posts(skip: $skip, take: $take) {
            count
            items {
                name
                author {
                    username
                    email
                }
                status {
                    name
                    variant
                }
                createdAt
            }
        }
    }
`;
