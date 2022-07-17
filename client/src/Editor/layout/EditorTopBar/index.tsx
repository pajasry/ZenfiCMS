import { Button } from "@/components/core";
import * as Styled from "./styled";

/**
 * Top bar for editor component
 */
export const EditorTopBar = () => {
    return (
        <Styled.Wrapper>
            <Styled.HistoryActions>
                <Button icon="undo" variant="secondary" title="Krok zpět" outline />
                <Button icon="redo" variant="secondary" title="Krok vpřed" outline />
            </Styled.HistoryActions>

            <Styled.DevicesActions>Devices</Styled.DevicesActions>

            <Styled.SaveActions>
                <Button icon="download" variant="success" value="Uložit" title="Uložit změny" />
            </Styled.SaveActions>
        </Styled.Wrapper>
    );
};
