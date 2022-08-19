import { TemplateHead } from "@/components/layout/templates";
import { PropsWithChildren } from "@/types";

import * as Styled from "./styled";

/**
 * Auth template
 */
export const AuthTemplate = ({ title, children }: Props) => {
    return (
        <Styled.Wrapper>
            <TemplateHead title={title} />
            <Styled.Body>
                <Styled.BodyTitle size="headline" weight={600}>
                    {title}
                </Styled.BodyTitle>
                {children}
            </Styled.Body>
        </Styled.Wrapper>
    );
};

interface Props extends PropsWithChildren {
    title: string;
}
