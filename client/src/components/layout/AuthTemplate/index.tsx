import * as Styled from "./styled";
import { Head } from "@/components/layout";
import { PropsWithChildren } from "@/types";

/**
 * Auth template
 */
export const AuthTemplate = ({ title, children }: Props) => {
    return (
        <Styled.Wrapper>
            <Head title={title} />
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
