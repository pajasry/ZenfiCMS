import { Button } from "@/components/core";

import * as Styled from "./styled";

/**
 * Top bar for editor component
 */
export const EditorTopBar = () => {
    return (
        <Styled.Wrapper>
            <Styled.HistoryActions>
                <Button icon="undo" variant="secondary" outline />
                <Button icon="redo" variant="secondary" outline />
            </Styled.HistoryActions>

            <Styled.DevicesActions>Devices</Styled.DevicesActions>

            <Styled.SaveActions>
                <Button icon="download" value="Uložit" />
            </Styled.SaveActions>
        </Styled.Wrapper>
    );
};
