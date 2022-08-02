import { gql, useQuery } from "@apollo/client";
import { useMemo } from "react";

import { Table } from "@/components/core";
import { UsersEntity, UsersQuery, UsersQueryVariables } from "@/graphql/schema";
import { TableActionType, TableColumnType } from "@/types";

/**
 * Users table component
 */
export const UsersTable = () => {
    const { data, loading } = useQuery<UsersQuery, UsersQueryVariables>(GET_USERS);

    const actions = useMemo<TableActionType<UsersEntity>[]>(
        () => [
            { value: "Upravit", onClick: () => alert("edit") },
            { value: "Odstranit", variant: "danger", onClick: () => alert("remove") },
        ],
        []
    );

    const columns = useMemo<TableColumnType<UsersEntity>[]>(
        () => [
            {
                name: "Jméno",
                field: "username",
            },
            {
                name: "Email",
                field: "email",
            },
            {
                name: "Datum vytvoření",
                type: "date",
                field: "createdAt",
            },
        ],
        []
    );

    return (
        <Table
            isLoading={loading}
            actions={actions}
            columns={columns}
            data={data?.users.items || []}
        />
    );
};

const GET_USERS = gql`
    query GET_USERS {
        users {
            items {
                email
                username
                createdAt
            }
        }
    }
`;
