import { useField } from "formik";
import * as _ from "lodash";
import { useEffect } from "react";
import ReactSelect from "react-select";

import { SelectMultiOption, SelectOption } from "@/types";

import * as Styled from "./styled";

/**
 * Select component
 */
export const Select = ({
    options,
    value,
    isMulti,
    onChange,
    ...props
}: SelectProps) => {
    const selectOnChange = (option: SelectOption | SelectMultiOption) => {
        const value = _.isArray(option)
            ? _.map(option, (item) => item.value || "")
            : _.get(option, "value") || "";

        onChange(value);
    };

    let selectValue: any = _.find(options, (option) =>
        _.isEqual(option?.value, value)
    );

    if (isMulti) {
        selectValue = _.filter(options, (option) =>
            _.includes(value, option?.value)
        );
    }

    return (
        <Styled.Wrapper>
            <ReactSelect
                {...props}
                options={options}
                value={selectValue}
                onChange={selectOnChange}
                noOptionsMessage={() => "Nic nebylo nalezeno"}
            />
        </Styled.Wrapper>
    );
};

/**
 * Select for form
 */
export const FormSelect = (props: FormSelectProps) => {
    const { name, defaultValue } = props;

    const [field, _, helpers] = useField(name);

    const onChange = (value: string | number) => {
        helpers.setValue(value);
    };

    const onBlur = () => {
        helpers.setTouched(true);
    };

    useEffect(() => {
        if (defaultValue && !field.value) {
            helpers.setValue(defaultValue);
        }
    }, [defaultValue, field.value, helpers]);

    return <Select {...props} {...field} onBlur={onBlur} onChange={onChange} />;
};

interface SelectProps {
    name: string;
    value: any;
    defaultValue?: any;
    placeholder?: string;
    isLoading?: boolean;
    isClearable?: boolean;
    isMulti?: boolean;
    options: SelectOption[];
    onChange: (value: any) => void;
    onBlur?: (props: any) => void;
}

type FormSelectProps = Omit<SelectProps, "value" | "onChange" | "onBlur">;
