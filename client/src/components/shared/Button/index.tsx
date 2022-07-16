import { Icon, IconName } from "@/components/shared";
import { StyledButton, StyledButtonValue } from "./styled";

/**
 * Button component
 */
export const Button = ({ value, icon, variant = "primary" }: ButtonProps) => {
    return (
        <StyledButton variant={variant} value={value}>
            {icon && <Icon name={icon} />}
            {value && (
                <StyledButtonValue size="body" weight="semi">
                    {value}
                </StyledButtonValue>
            )}
        </StyledButton>
    );
};

export interface ButtonProps {
    value?: string;
    variant?: "primary" | "secondary";
    icon?: IconName;
}
