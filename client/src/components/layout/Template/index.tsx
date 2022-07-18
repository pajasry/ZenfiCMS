import { PropsWithChildren } from "@/types";
import { Navigation } from "@/components/layout";
import { Helmet } from "react-helmet";
import * as Styled from "./styled";

/**
 * Template component
 */
export const Template = ({ children, title }: Props) => {
    return (
        <Styled.Wrapper>
            <Helmet>
                <title>ZenfiCMS | {title}</title>
            </Helmet>
            <Navigation />
            <Styled.Body>{children}</Styled.Body>
        </Styled.Wrapper>
    );
};

interface Props extends PropsWithChildren {
    title: string;
}
