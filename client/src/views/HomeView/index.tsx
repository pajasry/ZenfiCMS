import { Template } from "@/components/layout";
import { Editor } from "@/Editor";

/**
 * Home view
 */
export const HomeView = () => {
    return (
        <Template title="Přehled" fluid forceHideNavigation>
            <Editor />
        </Template>
    );
};
