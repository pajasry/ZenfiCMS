import * as _ from "lodash";

import { VariantType } from "@/types";

import * as Styled from "./styled";

/**
 * Dropdown actions
 */
export const DropdownActions = ({ actions, isVisible }: DropdownActionsProps) => {
    return (
        <Styled.Wrapper isVisible={isVisible}>
            {_.map(actions, (action) => (
                <Styled.Action
                    key={action.value}
                    onClick={action.onClick}
                    variant={action.variant || "primary"}
                >
                    {action.value}
                </Styled.Action>
            ))}
        </Styled.Wrapper>
    );
};

export interface DropdownActionsProps {
    actions: DropdownActionType[];
    isVisible: boolean;
}

export interface DropdownActionType {
    value: string;
    variant?: VariantType;
    onClick: (props?: any) => void;
}
