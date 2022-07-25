import styled from "styled-components";
import { TagProps } from "@/components/core";

import * as StyledText from "@/components/core/Text/styled";

export const Wrapper = styled.div<WrapperProps>`
    padding: 2px 8px 4px;
    border-radius: 4px;
`;

export const Value = styled(StyledText.Wrapper)`
    font-weight: 600;
`;

type WrapperProps = Pick<TagProps, "variant">;
