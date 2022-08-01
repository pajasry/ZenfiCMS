import { rgba } from "polished";
import styled from "styled-components";

import { AlertProps } from "@/components/core";
import { parseColorVariant } from "@/utils";

export const Wrapper = styled.div<WrapperProps>`
    border-radius: 4px;
    padding: 14px 16px;
    color: #fff;
    background: ${(props) => parseColorVariant(props)};
    outline: 2px solid ${(props) => rgba(parseColorVariant(props), 0.1)};
`;

type WrapperProps = Pick<AlertProps, "variant">;
