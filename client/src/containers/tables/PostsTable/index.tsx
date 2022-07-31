import { Table, Tag } from "@/components/core";
import { gql, useQuery } from "@apollo/client";
import { PostsEntity, PostsQuery, PostsQueryVariables } from "@/graphql/schema";
import { useMemo } from "react";
import { Column, RowAction } from "@/types";

/**
 * Posts table
 */
export const PostsTable = () => {
    const { data } = useQuery<PostsQuery, PostsQueryVariables>(GET_POSTS);

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
                render: ({ status }) => <Tag variant="success" value={status.name} />,
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

    return <Table actions={actions} columns={columns} data={data?.posts || []} />;
};

const GET_POSTS = gql`
    query GET_POSTS {
        posts {
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
`;
