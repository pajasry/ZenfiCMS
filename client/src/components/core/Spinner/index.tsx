import { defaultTheme } from "@/theme";

import * as Styled from "./styled";

export const Spinner = ({ height = 40, width = 40 }: SpinnerProps) => {
    return (
        <Styled.Wrapper
            width={width}
            height={height}
            strokeWidth={4}
            color={defaultTheme.color.primary}
            secondaryColor={defaultTheme.color.light}
        />
    );
};

interface SpinnerProps {
    width?: number;
    height?: number;
}
