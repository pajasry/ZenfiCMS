import { Table } from "@/components/core";
import { Column, RowAction } from "@/types";
import { useMemo } from "react";
import { useQuery, gql } from "@apollo/client";
import { PagesEntity, PagesQuery, PagesQueryVariables } from "@/graphql/schema";

/**
 * Pages table component
 */
export const PagesTable = () => {
    const { data } = useQuery<PagesQuery, PagesQueryVariables>(GET_PAGES);

    const actions = useMemo<RowAction<PagesEntity>[]>(
        () => [
            { title: "Upravit", onClick: () => alert("edit") },
            { title: "Odstranit", variant: "danger", onClick: () => alert("remove") },
        ],
        []
    );

    const columns: Column<PagesEntity>[] = useMemo(
        () => [
            {
                name: "Název",
                field: "name",
                grow: 3,
            },
            {
                name: "Stav",
                type: "status",
                field: "status",
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

    return <Table columns={columns} data={data?.pages || []} actions={actions} />;
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
        }
    }
`;
