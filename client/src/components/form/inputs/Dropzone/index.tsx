import React from "react";

import * as Styled from "./styled";

/**
 * Dropzone component
 * @constructor
 */
export const Dropzone = ({}: DropzoneProps) => {
    return <Styled.Wrapper>DROPZONE</Styled.Wrapper>;
};

/**
 * Dropzone for form
 * @constructor
 */
export const FormDropzone = ({}: FormDropzoneProps) => {
    return <div></div>;
};

interface DropzoneProps {
    name: string;
}

type FormDropzoneProps = Omit<DropzoneProps, "">;
