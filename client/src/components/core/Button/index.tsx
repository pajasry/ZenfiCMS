import { Icon, IconName } from "@/components/core";
import { Variant } from "@/types";
import * as Styled from "./styled";

/**
 * Button component
 */
export const Button = ({ value, icon, variant = "primary", ...props }: ButtonProps) => {
    return (
        <Styled.Wrapper variant={variant} value={value} {...props}>
            {icon && <Icon name={icon} />}
            {value && (
                <Styled.Value size="body" weight={600}>
                    {value}
                </Styled.Value>
            )}
        </Styled.Wrapper>
    );
};

export interface ButtonProps {
    value?: string;
    title: string;
    icon?: IconName;
    outline?: boolean;
    variant?: Variant;
}
