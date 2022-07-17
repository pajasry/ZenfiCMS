import { EditorSettings, EditorToolbox, EditorTopBar } from "@/Editor/layout";

/**
 * Editor component
 */

export const Editor = () => {
    return (
        <div className="editor">
            <EditorTopBar />
            <EditorToolbox />
            <EditorSettings />
        </div>
    );
};
