import React from "react";

import {
    AdminTemplateHeader,
    AdminTemplateHeaderProps,
} from "@/components/layout/templates";

import * as Styled from "./styled";

/**
 * Custom admin template page header component
 */
export const AdminTemplatePageHeader = ({
    showPreview,
    ...props
}: AdminTemplatePageHeaderProps) => {
    return (
        <AdminTemplateHeader
            {...props}
            additionalInfo={
                <Styled.ShowPreview
                    icon="eye"
                    value="Zobrazit stránku"
                    onClick={showPreview}
                />
            }
        />
    );
};

interface AdminTemplatePageHeaderProps
    extends Pick<AdminTemplateHeaderProps, "title" | "actions"> {
    showPreview: () => void;
}
