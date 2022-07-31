import { PropsWithChildren } from "@/types";
import { useField } from "formik";
import * as Styled from "./styled";

/**
 * Form group component
 */
export const FormGroup = ({ name, title, children }: FormGroupProps) => {
    const [_, fieldMeta] = useField(name);

    const isError = Boolean(fieldMeta.touched && fieldMeta.error);

    return (
        <Styled.Wrapper isError={isError}>
            <Styled.Label>{title}</Styled.Label>
            <Styled.Body>{children}</Styled.Body>
            {isError && <Styled.Error size="caption">{fieldMeta.error}</Styled.Error>}
        </Styled.Wrapper>
    );
};

interface FormGroupProps extends PropsWithChildren {
    name: string;
    title: string;
}
