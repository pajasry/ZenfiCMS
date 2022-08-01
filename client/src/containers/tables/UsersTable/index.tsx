import { gql, useQuery } from "@apollo/client";
import { useMemo } from "react";

import { Table } from "@/components/core";
import { UsersEntity, UsersQuery, UsersQueryVariables } from "@/graphql/schema";
import { Column, RowAction } from "@/types";

/**
 * Users table component
 */
export const UsersTable = () => {
    const { data, loading } = useQuery<UsersQuery, UsersQueryVariables>(GET_USERS);

    const actions = useMemo<RowAction<UsersEntity>[]>(
        () => [
            { title: "Upravit", onClick: () => alert("edit") },
            { title: "Odstranit", variant: "danger", onClick: () => alert("remove") },
        ],
        []
    );

    const columns = useMemo<Column<UsersEntity>[]>(
        () => [
            {
                name: "Jméno",
                field: "firstName",
                render: (row) => parseName(row),
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
        <Table isLoading={loading} actions={actions} columns={columns} data={data?.users || []} />
    );
};

const parseName = ({ firstName, lastName }: UsersEntity) => {
    return firstName ? `${firstName} ${lastName}` : "-";
};

const GET_USERS = gql`
    query GET_USERS {
        users {
            email
            firstName
            lastName
            createdAt
        }
    }
`;
