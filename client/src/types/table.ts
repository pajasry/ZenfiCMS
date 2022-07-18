export type Column<T extends object> = {
    name: string;
    field: keyof T;
    grow?: number;
    type?: "status" | "date";
    render?: (row: T) => JSX.Element | string | number;
};

export type RowAction<T extends object> = {
    title: string;
    onClick: (row: T) => void;
};
