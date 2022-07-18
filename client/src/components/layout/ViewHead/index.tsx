import { PropsWithChildren } from "@/types";
import * as Styled from "./styled";

/**
 * View head component
 */
export const ViewHead = ({ children }: ViewHeadProps) => {
    return <Styled.Wrapper>{children}</Styled.Wrapper>;
};

type ViewHeadProps = PropsWithChildren;
