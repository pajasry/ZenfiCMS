import { Table, Tag } from "@/components/core";
import { Column, RowAction } from "@/types";
import { useMemo } from "react";
import { useQuery, gql } from "@apollo/client";
import { PagesEntity, PagesQuery, PagesQueryVariables } from "@/graphql/schema";

/**
 * Pages table component
 */
export const PagesTable = () => {
    const { data, loading } = useQuery<PagesQuery, PagesQueryVariables>(GET_PAGES);

    const actions = useMemo<RowAction<PagesEntity>[]>(
        () => [
            { title: "Upravit", onClick: () => alert("edit") },
            { title: "Odstranit", variant: "danger", onClick: () => alert("remove") },
        ],
        []
    );

    const columns = useMemo<Column<PagesEntity>[]>(
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
        <Table isLoading={loading} columns={columns} data={data?.pages || []} actions={actions} />
    );
};

const GET_PAGES = gql`
    query GET_PAGES {
        pages {
            id
            name
            createdAt
            author {
                firstName
                email
            }
            status {
                name
            }
        }
    }
`;
