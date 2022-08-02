import { Text } from "@/components/core";
import { VariantType } from "@/types";

import * as Styled from "./styled";

/**
 * Alert component
 */
export const Alert = ({ variant, value }: AlertProps) => {
    return (
        <Styled.Wrapper variant={variant}>
            <Text value={value} weight={600} />
        </Styled.Wrapper>
    );
};

export interface AlertProps {
    variant: VariantType;
    value: string;
}
