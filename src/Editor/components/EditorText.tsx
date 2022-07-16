/**
 * Text for editor component
 */
const EditorText = ({ text, fontSize }: Props) => {
    return (
        <div>
            <p style={{ fontSize }}>{text}</p>
        </div>
    );
};

interface Props {
    text: string;
    fontSize: number;
}

export default EditorText;
