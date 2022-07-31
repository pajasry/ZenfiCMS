import styled from "styled-components";
import { AlertProps, Text as _Text } from "@/components/core";
import { parseColorVariant } from "@/utils";

export const Wrapper = styled.div<WrapperProps>`
    border-radius: 4px;
    padding: 14px 16px;
    color: #fff;
    background: ${(props) => parseColorVariant(props)};
`;

export const Text = styled(_Text)``;

type WrapperProps = Pick<AlertProps, "variant">;
