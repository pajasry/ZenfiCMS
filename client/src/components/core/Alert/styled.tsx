import styled from "styled-components";
import { AlertProps, Text as _Text } from "@/components/core";
import { parseColorVariant } from "@/utils";
import { rgba } from "polished";

export const Wrapper = styled.div<WrapperProps>`
    border-radius: 4px;
    padding: 14px 16px;
    color: #fff;
    background: ${(props) => parseColorVariant(props)};
    outline: 2px solid ${(props) => rgba(parseColorVariant(props), 0.1)};
`;

export const Text = styled(_Text)``;

type WrapperProps = Pick<AlertProps, "variant">;
