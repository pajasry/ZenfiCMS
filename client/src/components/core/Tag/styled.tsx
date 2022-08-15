import styled from "styled-components";

import { TagProps } from "@/components/core";
import { parseColorVariant } from "@/utils";

export const Wrapper = styled.div<WrapperProps>`
    padding: 4px 10px 6px;
    border-radius: 4px;
    background: ${(props) => parseColorVariant(props)};
    color: #fff;
    width: max-content;
`;

type WrapperProps = Pick<TagProps, "variant">;
