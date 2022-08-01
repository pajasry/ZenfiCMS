import { gql, useQuery } from "@apollo/client";
import { useMemo } from "react";

import { Pagination, Table, Tag } from "@/components/core";
import { PostsEntity, PostsQuery, PostsQueryVariables } from "@/graphql/schema";
import { usePagination } from "@/hooks/usePagination";
import { Column, RowAction } from "@/types";

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

    const actions = useMemo<RowAction<PostsEntity>[]>(
        () => [
            { title: "Upravit", onClick: () => alert("edit") },
            { title: "Odstranit", variant: "danger", onClick: () => alert("remove") },
        ],
        []
    );

    const columns = useMemo<Column<PostsEntity>[]>(
        () => [
            {
                name: "Název",
                field: "name",
                grow: 3,
            },
            {
                name: "Stav",
                field: "status",
                render: ({ status }) => (
                    <Tag
                        variant={status.name === "Veřejný" ? "success" : "danger"}
                        value={status.name}
                    />
                ),
            },
            {
                name: "Datum vytvoření",
                type: "date",
                field: "createdAt",
            },
            {
                name: "Autor",
                field: "author",
                render: ({ author }) => author.firstName || author.email,
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
                    lastName
                    firstName
                    email
                }
                status {
                    name
                }
                createdAt
            }
        }
    }
`;
