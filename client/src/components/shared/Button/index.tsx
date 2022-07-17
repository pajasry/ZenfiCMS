import { Icon, IconName } from "@/components/shared";
import * as Styled from "./styled";

/**
 * Button component
 */
export const Button = ({ value, icon, title, variant = "primary" }: ButtonProps) => {
    return (
        <Styled.Wrapper variant={variant} value={value} title={title}>
            {icon && <Icon name={icon} />}
            {value && (
                <Styled.Value size="body" weight="semi">
                    {value}
                </Styled.Value>
            )}
        </Styled.Wrapper>
    );
};

export interface ButtonProps {
    value?: string;
    title: string;
    variant?: "primary" | "secondary";
    icon?: IconName;
}
