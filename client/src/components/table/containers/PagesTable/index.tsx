import { gql, useMutation, useQuery } from "@apollo/client";
import * as _ from "lodash";
import Link from "next/link";
import { useRouter } from "next/router";
import { useCallback, useMemo } from "react";
import { toast } from "react-toastify";

import { Text } from "@/components/core";
import { Pagination } from "@/components/layout/main";
import { Table } from "@/components/table/main";
import {
    DeletePageMutation,
    DeletePageMutationVariables,
    PageEntity,
    PagesQuery,
    PagesQueryVariables,
} from "@/graphql/schema";
import { usePagination } from "@/hooks";
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
        FIND_PAGES,
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
        refetchQueries: ["FIND_PAGES"],
    });

    const createRowLink = (row: PageEntity) => {
        return _.replace(RoutesName.PAGE, ":pageId", row.id);
    };

    const onUpdatePage = useCallback(
        (row: PageEntity) => {
            return router.push(createRowLink(row));
        },
        [router]
    );

    const onDeletePage = useCallback(
        (row: PageEntity) => {
            return withConfirm("Přejete si odstranit stránku?", () =>
                deletePage({ variables: { id: row.id } })
            );
        },
        [deletePage]
    );

    const parsePageName = (page: PageEntity) => {
        return page.isHomepage
            ? `<strong>Domovská stránka</strong> - ${page.name}`
            : page.name;
    };

    const actions = useMemo<TableActionType<PageEntity>[]>(
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

    const columns = useMemo<TableColumnType<PageEntity>[]>(
        () => [
            {
                name: "Název",
                field: "name",
                grow: 3,
                render: (row) => (
                    <Link href={createRowLink(row)}>
                        <Text as="a" value={parsePageName(row)} />
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

const FIND_PAGES = gql`
    query FIND_PAGES($take: Int, $skip: Int) {
        pages(take: $take, skip: $skip) {
            count
            items {
                id
                name
                createdAt
                isHomepage
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
