import * as _ from "lodash";

import { Button, ButtonProps, Text } from "@/components/core";

import * as Styled from "./styled";

/**
 * Page header component
 */
export const PageHeader = ({ title, actions }: ViewHeadProps) => {
    return (
        <Styled.Wrapper>
            <Text value={title} as="h1" size="headline" weight={700} />
            <Styled.Actions isVisible={_.size(actions) > 0}>
                {_.map(actions, (action, i) => (
                    <Button key={i} {...action} />
                ))}
            </Styled.Actions>
        </Styled.Wrapper>
    );
};

interface ViewHeadProps {
    title: string;
    actions?: ButtonProps[];
}
