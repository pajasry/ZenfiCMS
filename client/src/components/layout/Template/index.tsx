import { PropsWithChildren } from "@/types";
import { Sidebar, Navigation } from "@/components/layout";
import { Helmet } from "react-helmet";
import * as Styled from "./styled";

/**
 * Template component
 */
export const Template = ({ children, title, fluid, forceHideNavigation }: TemplateProps) => {
    return (
        <Styled.Wrapper>
            <Helmet>
                <title>ZenfiCMS | {title}</title>
                <link
                    rel="apple-touch-icon"
                    sizes="180x180"
                    href="/assets/favicon/apple-touch-icon.png"
                />
                <link
                    rel="icon"
                    type="image/png"
                    sizes="32x32"
                    href="/assets/favicon/favicon-32x32.png"
                />
                <link
                    rel="icon"
                    type="image/png"
                    sizes="16x16"
                    href="/assets/favicon/favicon-16x16.png"
                />
            </Helmet>
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
