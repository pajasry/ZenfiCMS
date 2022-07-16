import { ReactNode } from "react";

export interface PropsWithChildren {
    children: ReactNode;
}

export interface PropsWithClassName {
    className?: string;
}
