import { rgba } from "polished";
import styled from "styled-components";

import { TagProps } from "@/components/core";
import { parseColorVariant } from "@/utils";

export const Wrapper = styled.div<WrapperProps>`
    padding: 2px 8px 4px;
    border-radius: 4px;
    background: ${(props) => parseColorVariant(props)};
    color: #fff;
    width: max-content;
    outline: 2px solid ${(props) => rgba(parseColorVariant(props), 0.1)};
`;

type WrapperProps = Pick<TagProps, "variant">;
