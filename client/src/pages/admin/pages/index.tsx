import { useRouter } from "next/router";

import { ButtonProps } from "@/components/core";
import {
    AdminTemplate,
    AdminTemplateHeader,
} from "@/components/layout/templates";
import { PagesTable } from "@/components/table/containers";
import { RoutesName } from "@/types";

/**
 * Pages page
 */
const Pages = () => {
    const router = useRouter();

    const gotoCreatePage = () => {
        return router.push(RoutesName.CREATE_PAGE);
    };

    const actions: ButtonProps[] = [
        {
            icon: "add",
            value: "Přidat stránku",
            onClick: gotoCreatePage,
        },
    ];

    return (
        <AdminTemplate title="Stránky">
            <AdminTemplateHeader title="Stránky" actions={actions} />
            <PagesTable />
        </AdminTemplate>
    );
};

export default Pages;
