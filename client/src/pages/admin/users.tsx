import { Button, Text } from "@/components/core";
import { Template, ViewHead } from "@/components/layout";
import { UsersTable } from "@/containers/tables";

/**
 * Users page
 */
const Users = () => {
    return (
        <Template title="Uživatelé">
            <ViewHead>
                <Text value="Uživatelé" as="h1" size="headline" weight={700} />
                <Button icon="add" value="Přidat uživatele" title="Přidat uživatele" />
            </ViewHead>
            <UsersTable />
        </Template>
    );
};

export default Users;
