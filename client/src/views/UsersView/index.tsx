import { Template, ViewHead } from "@/components/layout";
import { UsersTable } from "@/containers/tables";
import { Button, Text } from "@/components/core";
import * as Styled from "./styled";

/**
 * Users view
 */
export const UsersView = () => {
    return (
        <Template title="Uživatelé">
            <Styled.Wrapper>
                <ViewHead>
                    <Text value="Uživatelé" as="h1" size="headline" weight={700} />
                    <Button icon="add" value="Přidat uživatele" title="Přidat uživatele" />
                </ViewHead>
                <UsersTable />
            </Styled.Wrapper>
        </Template>
    );
};
