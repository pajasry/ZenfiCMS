import { ChangeEvent, HTMLInputTypeAttribute } from "react";
import { useField } from "formik";
import * as Styled from "./styled";

/**
 * Input component
 */
export const Input = (props: InputProps) => {
    return (
        <Styled.Wrapper>
            <Styled.Field {...props} />
        </Styled.Wrapper>
    );
};

/**
 * Input component for form
 */
export const FormInput = (props: FormInputProps) => {
    const [field] = useField(props.name);

    return <Input {...props} {...field} />;
};

interface InputProps {
    name: string;
    value: string;
    placeholder?: string;
    type?: HTMLInputTypeAttribute;
    onChange: (e: ChangeEvent<any>) => void;
}

type FormInputProps = Omit<InputProps, "value" | "onChange">;
