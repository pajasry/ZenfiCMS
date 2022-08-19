import { SelectOption } from "@/types";

export const createSelectOption = (
    value: string,
    label: string
): SelectOption => {
    return { label, value };
};
