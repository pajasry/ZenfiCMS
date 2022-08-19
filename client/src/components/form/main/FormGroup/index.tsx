import { useField } from "formik";

import { PropsWithChildren } from "@/types";

import * as Styled from "./styled";

/**
 * Form group component
 */
export const FormGroup = ({ name, title, children }: FormGroupProps) => {
    const [_, fieldMeta] = useField(name);

    const isError = Boolean(fieldMeta.touched && fieldMeta.error);

    return (
        <Styled.Wrapper isError={isError}>
            <Styled.Label weight={500} size="caption" value={title} />
            <Styled.Body>{children}</Styled.Body>
            {isError && <Styled.Error size="caption" value={fieldMeta.error} />}
        </Styled.Wrapper>
    );
};

interface FormGroupProps extends PropsWithChildren {
    name: string;
    title: string;
}
