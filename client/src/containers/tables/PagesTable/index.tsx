import { gql, useQuery } from "@apollo/client";
import { useMemo } from "react";

import { Pagination, Table, Tag } from "@/components/core";
import { PagesEntity, PagesQuery, PagesQueryVariables } from "@/graphql/schema";
import { usePagination } from "@/hooks/usePagination";
import { TableActionType, TableColumnType } from "@/types";

import * as Styled from "./styled";

/**
 * Pages table component
 */
export const PagesTable = () => {
    const { skip, setSkip, count, setCount, take } = usePagination(10);

    const { data, loading } = useQuery<PagesQuery, PagesQueryVariables>(GET_PAGES, {
        variables: {
            take,
            skip,
        },
        onCompleted: (data) => setCount(data?.pages.count),
    });

    const actions = useMemo<TableActionType<PagesEntity>[]>(
        () => [
            { value: "Upravit", onClick: () => alert("edit") },
            { value: "Odstranit", variant: "danger", onClick: () => alert("remove") },
        ],
        []
    );

    const columns = useMemo<TableColumnType<PagesEntity>[]>(
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
                render: ({ author }) => author.username,
            },
        ],
        []
    );

    return (
        <Styled.Wrapper>
            <Table
                isLoading={loading}
                columns={columns}
                data={data?.pages.items || []}
                actions={actions}
            />
            <Pagination count={count} take={take} skip={skip} setSkip={setSkip} />
        </Styled.Wrapper>
    );
};

const GET_PAGES = gql`
    query GET_PAGES($take: Int, $skip: Int) {
        pages(take: $take, skip: $skip) {
            count
            items {
                id
                name
                createdAt
                author {
                    username
                }
                status {
                    name
                }
            }
        }
    }
`;
