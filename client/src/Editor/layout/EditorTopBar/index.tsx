import { Button } from "@/components/shared";
import {
    StyledEditorTopBar,
    StyledEditorTopBarHistoryActions,
    StyledEditorTopBarSaveActions,
    StyledEditorTopBarDevicesActions,
} from "./styled";

/**
 * Top bar for editor component
 */
export const EditorTopBar = () => {
    return (
        <StyledEditorTopBar>
            <StyledEditorTopBarHistoryActions>
                <Button icon="redo" variant="secondary" />
                <Button icon="undo" variant="secondary" />
            </StyledEditorTopBarHistoryActions>

            <StyledEditorTopBarDevicesActions>Devices</StyledEditorTopBarDevicesActions>

            <StyledEditorTopBarSaveActions>
                <Button icon="download" value="Uložit" />
            </StyledEditorTopBarSaveActions>
        </StyledEditorTopBar>
    );
};
