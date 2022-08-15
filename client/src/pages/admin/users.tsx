import { ButtonProps } from "@/components/core";
import { PageHeader, Template } from "@/components/layout";
import { UsersTable } from "@/containers/tables";

/**
 * Users page
 */
const Users = () => {
    const actions: ButtonProps[] = [
        {
            icon: "add",
            value: "Přidat uživatele",
            title: "Přidat uživatele",
            onClick: () => null,
        },
    ];

    return (
        <Template title="Uživatelé">
            <PageHeader title="Uživatelé" actions={actions} />
            <UsersTable />
        </Template>
    );
};

export default Users;
