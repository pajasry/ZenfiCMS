import * as _ from "lodash";
import { ReactNode } from "react";

import { Button, ButtonProps, Text } from "@/components/core";

import * as Styled from "./styled";

/**
 * Admin Template header component
 */
export const AdminTemplateHeader = ({
    title,
    actions,
    additionalInfo,
}: AdminTemplateHeaderProps) => {
    return (
        <Styled.Wrapper>
            <Styled.Info>
                <Text value={title} as="h1" size="headline" weight={700} />
                {additionalInfo}
            </Styled.Info>
            <Styled.Actions isVisible={_.size(actions) > 0}>
                {_.map(actions, (action, i) => (
                    <Button key={i} {...action} />
                ))}
            </Styled.Actions>
        </Styled.Wrapper>
    );
};

export interface AdminTemplateHeaderProps {
    title: string;
    actions?: ButtonProps[];
    additionalInfo?: ReactNode;
}
