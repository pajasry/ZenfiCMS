import {
    EditorSettings,
    EditorToolbox,
    EditorTopBar,
} from "@/components/editor/layout";

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
