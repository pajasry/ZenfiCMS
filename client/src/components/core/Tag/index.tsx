import * as Styled from "./styled";
import { Variant } from "@/types";

/**
 * Tag component
 */
export const Tag = ({ variant, value }: TagProps) => {
    return (
        <Styled.Wrapper variant={variant}>
            <Styled.Value>{value}</Styled.Value>
        </Styled.Wrapper>
    );
};

export interface TagProps {
    variant: Variant;
    value: string;
}
