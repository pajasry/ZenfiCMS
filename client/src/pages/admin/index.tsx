import { Template } from "@/components/layout";
import { Editor } from "@/Editor";

/**
 * Home page
 */
const Home = () => {
    return (
        <Template title="Přehled" fluid forceHideNavigation>
            <Editor />
        </Template>
    );
};

export default Home;
