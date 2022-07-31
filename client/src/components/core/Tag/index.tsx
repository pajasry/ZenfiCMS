import * as Styled from "./styled";
import { Variant } from "@/types";

/**
 * Tag component
 */
export const Tag = ({ variant = "primary", value }: TagProps) => {
    return (
        <Styled.Wrapper variant={variant}>
            <Styled.Value size="caption" weight={600} value={value} />
        </Styled.Wrapper>
    );
};

export interface TagProps {
    variant?: Variant;
    value: string;
}
