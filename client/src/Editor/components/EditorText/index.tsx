/**
 * Text for editor component
 */
export const EditorText = ({ text, fontSize }: EditorTextProps) => {
    return (
        <div>
            <p style={{ fontSize }}>{text}</p>
        </div>
    );
};

interface EditorTextProps {
    text: string;
    fontSize: number;
}
