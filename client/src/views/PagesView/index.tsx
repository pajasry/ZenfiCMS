import { Template, ViewHead } from "@/components/layout";
import { Button, Text } from "@/components/core";
import { PagesTable } from "@/containers/tables";
import * as Styled from "./styled";

/**
 * Pages view
 */
export const PagesView = () => {
    return (
        <Template title="Stránky">
            <Styled.Wrapper>
                <ViewHead>
                    <Text value="Stránky" as="h1" size="headline" weight={700} />
                    <Button icon="add" value="Přidat stránku" title="Přidat stránku" />
                </ViewHead>
                <PagesTable />
            </Styled.Wrapper>
        </Template>
    );
};
