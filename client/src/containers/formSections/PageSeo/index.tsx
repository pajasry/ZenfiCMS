import { useFormikContext } from "formik";

import { Alert } from "@/components/core";
import { CreatePageInput } from "@/graphql/schema";
import { createPath } from "@/utils";

import * as Styled from "./styled";

/**
 * Page seo component
 */
export const PageSeo = () => {
    const { values } = useFormikContext<CreatePageInput>();
    const { description, name } = values;

    const createPagePath = (name: string) => {
        return `${window.location.origin}/${createPath(name)}`;
    };

    if (!Boolean(description && name)) {
        return (
            <Styled.Wrapper>
                <Alert
                    variant="info"
                    value="Přidejte název a popis pro náhled SEO"
                />
            </Styled.Wrapper>
        );
    }

    return (
        <Styled.Wrapper>
            <Styled.Title weight={600} size="bigger-title" value="Náhled SEO" />
            <Styled.Path size="caption" value={createPagePath(name)} />
            <Styled.Name weight={600} size="title" value={name} />
            <Styled.Description value={description} />
        </Styled.Wrapper>
    );
};
