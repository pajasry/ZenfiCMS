import { ButtonProps } from "@/components/core";
import {
    AdminTemplate,
    AdminTemplateHeader,
} from "@/components/layout/templates";
import { UsersTable } from "@/components/table/containers";

/**
 * Users page
 */
const Users = () => {
    const actions: ButtonProps[] = [
        {
            icon: "add",
            value: "Přidat uživatele",
            onClick: () => null,
        },
    ];

    return (
        <AdminTemplate title="Uživatelé">
            <AdminTemplateHeader title="Uživatelé" actions={actions} />
            <UsersTable />
        </AdminTemplate>
    );
};

export default Users;
