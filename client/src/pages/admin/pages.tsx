import { Button, Text } from "@/components/core";
import { Template, ViewHead } from "@/components/layout";
import { PagesTable } from "@/containers/tables";

/**
 * Pages page
 */
const Pages = () => {
    return (
        <Template title="Stránky">
            <ViewHead>
                <Text value="Stránky" as="h1" size="headline" weight={700} />
                <Button icon="add" value="Přidat stránku" title="Přidat stránku" />
            </ViewHead>
            <PagesTable />
        </Template>
    );
};

export default Pages;
