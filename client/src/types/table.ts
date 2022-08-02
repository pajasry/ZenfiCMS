import { VariantType } from "@/types";

export type TableColumnType<T extends object> = {
    name: string;
    field: keyof T;
    grow?: number;
    type?: "date" | "publicationStatus" | "author";
    render?: (row: T) => JSX.Element | string | number;
};

export type TableActionType<T extends object> = {
    value: string;
    variant?: VariantType;
    onClick: (row: T) => void;
};
