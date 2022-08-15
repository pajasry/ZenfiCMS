import { useRouter } from "next/router";

import { ButtonProps } from "@/components/core";
import { PageHeader, Template } from "@/components/layout";
import { PagesTable } from "@/containers/tables";
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
            title: "Přidat stránku",
            onClick: gotoCreatePage,
        },
    ];

    return (
        <Template title="Stránky">
            <PageHeader title="Stránky" actions={actions} />
            <PagesTable />
        </Template>
    );
};

export default Pages;
