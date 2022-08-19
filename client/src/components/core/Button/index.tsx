import { Icon, IconName, Text } from "@/components/core";
import { VariantType } from "@/types";

import * as Styled from "./styled";

/**
 * Button component
 */
export const Button = ({
    value,
    icon,
    isLoading,
    variant = "primary",
    onClick,
    ...props
}: ButtonProps) => {
    return (
        <Styled.Wrapper
            onClick={onClick}
            disabled={isLoading}
            variant={variant}
            value={value}
            {...props}
        >
            {icon && <Icon name={icon} />}
            {value && <Text size="body" weight={600} value={value} />}
        </Styled.Wrapper>
    );
};

export interface ButtonProps {
    value?: string;
    icon?: IconName;
    outline?: boolean;
    isLoading?: boolean;
    isHidden?: boolean;
    disabled?: boolean;
    type?: "submit" | "button";
    variant?: VariantType;
    onClick?: () => void;
}
