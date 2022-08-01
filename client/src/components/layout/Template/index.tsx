import { Navigation, Sidebar, TemplateHead } from "@/components/layout";
import { PropsWithChildren } from "@/types";

import * as Styled from "./styled";

/**
 * Template component
 */
export const Template = ({ children, title, fluid, forceHideNavigation }: TemplateProps) => {
    return (
        <Styled.Wrapper>
            <TemplateHead title={title} />
            <Sidebar />
            {!forceHideNavigation && <Navigation />}
            <Styled.Body fluid={fluid}>{children}</Styled.Body>
        </Styled.Wrapper>
    );
};

export interface TemplateProps extends PropsWithChildren {
    title: string;
    fluid?: boolean;
    forceHideNavigation?: boolean;
}
