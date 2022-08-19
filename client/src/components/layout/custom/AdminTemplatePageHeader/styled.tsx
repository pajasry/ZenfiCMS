import styled from "styled-components";

import { Button } from "@/components/core";
import * as StyledIcon from "@/components/core/Icon/styled";

export const ShowPreview = styled(Button)`
    border: none;
    background: none;
    box-shadow: none !important;
    display: inline-flex;
    color: ${(props) => props.theme.color.dark};

    ${StyledIcon.Wrapper} {
        fill: ${(props) => props.theme.color.dark};
    }

    &:hover {
        text-decoration: underline;
    }
`;
