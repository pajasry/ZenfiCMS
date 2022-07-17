import { PropsWithChildren } from "@/types";
import { Navigation } from "@/components/layout";
import * as Styled from "./styled";

/**
 * Template component
 */
export const Template = ({ children }: Props) => {
    return (
        <Styled.Wrapper>
            <Navigation />
            <Styled.Body>{children}</Styled.Body>
        </Styled.Wrapper>
    );
};

type Props = PropsWithChildren;
