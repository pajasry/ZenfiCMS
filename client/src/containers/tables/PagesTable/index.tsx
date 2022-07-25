import { Table } from "@/components/core";
import { Column, RowAction } from "@/types";
import { useMemo } from "react";

/**
 * Pages table component
 */
export const PagesTable = () => {
    const actions = useMemo<RowAction<typeof dataItem>[]>(
        () => [
            { title: "Upravit", onClick: () => alert("edit") },
            { title: "Odstranit", variant: "danger", onClick: () => alert("remove") },
        ],
        []
    );

    const columns: Column<typeof dataItem>[] = useMemo(
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
                render: (row) => row.author.firstName,
            },
        ],
        []
    );

    return <Table columns={columns} data={[dataItem, dataItem]} actions={actions} />;
};

// Placeholder data
const dataItem = {
    name: "Stránka",
    status: {
        name: "visible",
    },
    languages: [{ name: "cs" }],
    createdAt: new Date().toDateString(),
    author: {
        firstName: "Filip",
        lastName: "Krivčík",
    },
};
