import { Formik, FormikConfig } from "formik";
import { ReactNode } from "react";

import * as Styled from "./styled";

/**
 * Form component
 */
export const Form = ({ children, ...props }: FormProps) => {
    return (
        <Formik {...props}>
            <Styled.Wrapper>{children}</Styled.Wrapper>
        </Formik>
    );
};

interface FormProps extends FormikConfig<any> {
    children: ReactNode;
}
