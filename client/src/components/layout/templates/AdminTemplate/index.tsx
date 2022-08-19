import { Navigation, NavigationProps, Sidebar } from "@/components/layout/main";
import { TemplateHead } from "@/components/layout/templates";
import { PropsWithChildren } from "@/types";

import * as Styled from "./styled";

/**
 * Template component
 */
export const AdminTemplate = ({
    children,
    title,
    fluid,
    forceHideNavigation,
    ...props
}: AdminTemplateProps) => {
    return (
        <Styled.Wrapper>
            <TemplateHead title={title} />
            <Sidebar />
            {!forceHideNavigation && <Navigation {...props} />}
            <Styled.Body fluid={fluid}>{children}</Styled.Body>
        </Styled.Wrapper>
    );
};

export interface AdminTemplateProps extends PropsWithChildren, NavigationProps {
    title: string;
    fluid?: boolean;
    forceHideNavigation?: boolean;
}
