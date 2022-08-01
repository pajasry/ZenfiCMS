import { Button, Text } from "@/components/core";
import { Template, ViewHead } from "@/components/layout";
import { PostsTable } from "@/containers/tables";

/**
 * Posts page
 */
const Posts = () => {
    return (
        <Template title="Příspěvky">
            <ViewHead>
                <Text value="Příspěvky" as="h1" size="headline" weight={700} />
                <Button icon="add" value="Přidat příspěvek" title="Přidat příspěvek" />
            </ViewHead>
            <PostsTable />
        </Template>
    );
};

export default Posts;
