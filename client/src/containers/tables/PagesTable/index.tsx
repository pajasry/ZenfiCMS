import { gql, useMutation, useQuery } from "@apollo/client";
import * as _ from "lodash";
import Link from "next/link";
import { useRouter } from "next/router";
import { useCallback, useMemo } from "react";
import { toast } from "react-toastify";

import { Pagination, Table, Text } from "@/components/core";
import {
    DeletePageMutation,
    DeletePageMutationVariables,
    PagesEntity,
    PagesQuery,
    PagesQueryVariables,
} from "@/graphql/schema";
import { usePagination } from "@/hooks/usePagination";
import { RoutesName, TableActionType, TableColumnType } from "@/types";
import { withConfirm } from "@/utils";

import * as Styled from "./styled";

/**
 * Pages table component
 */
export const PagesTable = () => {
    const router = useRouter();

    const { skip, setSkip, count, setCount, take } = usePagination(8);

    const { data, loading } = useQuery<PagesQuery, PagesQueryVariables>(
        GET_PAGES,
        {
            variables: {
                take,
                skip,
            },
            onCompleted: (data) => setCount(data?.pages.count),
        }
    );

    const [deletePage] = useMutation<
        DeletePageMutation,
        DeletePageMutationVariables
    >(DELETE_PAGE, {
        onCompleted: () => toast.success("Stránka byla odstraněna"),
        refetchQueries: ["GET_PAGES"],
    });

    const createRowLink = (row: PagesEntity) => {
        return _.replace(RoutesName.PAGE, ":pageId", row.id);
    };

    const onUpdatePage = useCallback(
        (row: PagesEntity) => {
            return router.push(createRowLink(row));
        },
        [router]
    );

    const onDeletePage = useCallback(
        (row: PagesEntity) => {
            return withConfirm("Přejete si odstranit stránku?", () =>
                deletePage({ variables: { id: row.id } })
            );
        },
        [deletePage]
    );

    const actions = useMemo<TableActionType<PagesEntity>[]>(
        () => [
            {
                value: "Upravit",
                onClick: onUpdatePage,
            },
            {
                value: "Odstranit",
                variant: "danger",
                onClick: onDeletePage,
            },
        ],
        [onDeletePage, onUpdatePage]
    );

    const columns = useMemo<TableColumnType<PagesEntity>[]>(
        () => [
            {
                name: "Název",
                field: "name",
                grow: 3,
                render: (row) => (
                    <Link href={createRowLink(row)}>
                        <Text as="a" value={row.name} />
                    </Link>
                ),
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
                columns={columns}
                data={data?.pages.items || []}
                actions={actions}
            />
            <Pagination
                count={count}
                take={take}
                skip={skip}
                setSkip={setSkip}
            />
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
                    variant
                }
            }
        }
    }
`;

const DELETE_PAGE = gql`
    mutation DELETE_PAGE($id: String!) {
        deletePage(id: $id)
    }
`;
