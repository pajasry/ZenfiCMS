import { EditorSettings, EditorToolbox, EditorTopBar } from "@/Editor/layout";

/**
 * Editor component
 */

const Editor = () => {
    return (
        <div className="editor">
            <EditorTopBar />
            <EditorToolbox />
            <EditorSettings />
        </div>
    );
};

export default Editor;
