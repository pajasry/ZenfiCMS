import { Button } from "@/components/shared";
import * as Styled from "./styled";

/**
 * Top bar for editor component
 */
export const EditorTopBar = () => {
    return (
        <Styled.Wrapper>
            <Styled.HistoryActions>
                <Button icon="redo" variant="secondary" title="Krok zpět" />
                <Button icon="undo" variant="secondary" title="Krok vpřed" />
            </Styled.HistoryActions>

            <Styled.DevicesActions>Devices</Styled.DevicesActions>

            <Styled.SaveActions>
                <Button icon="download" value="Uložit" title="Uložit změny" />
            </Styled.SaveActions>
        </Styled.Wrapper>
    );
};
