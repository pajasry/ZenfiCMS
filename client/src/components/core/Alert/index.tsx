import { Variant } from "@/types";
import * as Styled from "./styled";

/**
 * Alert component
 */
export const Alert = ({ variant, value }: AlertProps) => {
    return (
        <Styled.Wrapper variant={variant}>
            <Styled.Text value={value} weight={500} />
        </Styled.Wrapper>
    );
};

export interface AlertProps {
    variant: Variant;
    value: string;
}
