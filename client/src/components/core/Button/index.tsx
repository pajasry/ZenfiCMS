import { Icon, IconName, Text } from "@/components/core";
import { Variant } from "@/types";

import * as Styled from "./styled";

/**
 * Button component
 */
export const Button = ({ value, icon, isLoading, variant = "primary", ...props }: ButtonProps) => {
    return (
        <Styled.Wrapper disabled={isLoading} variant={variant} value={value} {...props}>
            {icon && <Icon name={icon} />}
            {value && <Text size="body" weight={600} value={value} />}
        </Styled.Wrapper>
    );
};

export interface ButtonProps {
    value?: string;
    title: string;
    icon?: IconName;
    outline?: boolean;
    isLoading?: boolean;
    type?: "submit" | "button";
    variant?: Variant;
}
