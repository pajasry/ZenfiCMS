import { TemplateHead } from "@/components/layout/templates";
import { PropsWithChildren } from "@/types";

import * as Styled from "./styled";

/**
 * Client template component
 */
export const ClientTemplate = ({ title, children }: ClientTemplateProps) => {
    return (
        <Styled.Wrapper>
            <TemplateHead title={title} isClient />
            <Styled.Body>{children}</Styled.Body>
        </Styled.Wrapper>
    );
};

interface ClientTemplateProps extends PropsWithChildren {
    title: string;
}
