import { MultiValue, SingleValue } from "react-select";

export type SelectValue = {
    value: string;
    label: string;
};

export type SelectOption = SingleValue<SelectValue>;
export type SelectMultiOption = MultiValue<SelectValue>;
