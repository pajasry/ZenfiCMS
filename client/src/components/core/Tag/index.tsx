import { Text } from "@/components/core";
import { Variant } from "@/types";

import * as Styled from "./styled";

/**
 * Tag component
 */
export const Tag = ({ variant = "primary", value }: TagProps) => {
    return (
        <Styled.Wrapper variant={variant}>
            <Text size="caption" weight={600} value={value} />
        </Styled.Wrapper>
    );
};

export interface TagProps {
    variant?: Variant;
    value: string;
}
