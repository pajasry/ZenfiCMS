import styled from "styled-components";
import { TagProps } from "@/components/core";
import { parseColorVariant } from "@/utils";
import { Text } from "@/components/core";
import { rgba } from "polished";

export const Wrapper = styled.div<WrapperProps>`
    padding: 2px 8px 4px;
    border-radius: 4px;
    background: ${(props) => parseColorVariant(props)};
    color: #fff;
    width: max-content;
    outline: 2px solid ${(props) => rgba(parseColorVariant(props), 0.1)};
`;

export const Value = styled(Text)`
    font-weight: 600;
`;

type WrapperProps = Pick<TagProps, "variant">;
