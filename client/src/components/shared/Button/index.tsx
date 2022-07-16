import { Icon, IconName } from "@/components/shared";
import { StyledButton, StyledButtonValue } from "./styled";

/**
 * Button component
 */
export const Button = ({ value, icon, variant = "primary" }: ButtonProps) => {
    return (
        <StyledButton variant={variant}>
            {icon && <Icon name={icon} />}
            <StyledButtonValue weight="semi">{value}</StyledButtonValue>
        </StyledButton>
    );
};

export interface ButtonProps {
    value: string;
    variant?: "primary" | "secondary";
    icon?: IconName;
}
