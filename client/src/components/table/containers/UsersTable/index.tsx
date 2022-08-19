import { gql, useQuery } from "@apollo/client";
import { useMemo } from "react";

import { Table } from "@/components/table/main";
import { UserEntity, UsersQuery, UsersQueryVariables } from "@/graphql/schema";
import { TableActionType, TableColumnType } from "@/types";

/**
 * Users table component
 */
export const UsersTable = () => {
    const { data, loading } = useQuery<UsersQuery, UsersQueryVariables>(
        FIND_USERS
    );

    const actions = useMemo<TableActionType<UserEntity>[]>(
        () => [
            { value: "Upravit", onClick: () => alert("edit") },
            {
                value: "Odstranit",
                variant: "danger",
                onClick: () => alert("remove"),
            },
        ],
        []
    );

    const columns = useMemo<TableColumnType<UserEntity>[]>(
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

const FIND_USERS = gql`
    query FIND_USERS {
        users {
            items {
                email
                username
                createdAt
            }
        }
    }
`;
