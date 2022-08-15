import { ButtonProps } from "@/components/core";
import { PageHeader, Template } from "@/components/layout";
import { PostsTable } from "@/containers/tables";

/**
 * Posts page
 */
const Posts = () => {
    const actions: ButtonProps[] = [
        {
            icon: "add",
            value: "Přidat příspěvek",
            title: "Přidat příspěvek",
            onClick: () => null,
        },
    ];

    return (
        <Template title="Příspěvky">
            <PageHeader title="Příspěvky" actions={actions} />
            <PostsTable />
        </Template>
    );
};

export default Posts;
