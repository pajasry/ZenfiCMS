import { Template, ViewHead } from "@/components/layout";
import { Button, Text } from "@/components/core";
import { PostsTable } from "@/containers/tables";
import * as Styled from "@/views/PagesView/styled";

/**
 * Posts view
 */
export const PostsView = () => {
    return (
        <Template title="Příspěvky">
            <Styled.Wrapper>
                <ViewHead>
                    <Text value="Příspěvky" as="h1" size="headline" weight={700} />
                    <Button icon="add" value="Přidat příspěvek" title="Přidat příspěvek" />
                </ViewHead>
                <PostsTable />
            </Styled.Wrapper>
        </Template>
    );
};
