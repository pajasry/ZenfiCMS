import { useRouter } from "next/router";
import React, { Fragment } from "react";

import { ClientTemplate } from "@/components/layout/templates";
import { useClientPage } from "@/hooks";

const Parent = () => {
    const router = useRouter();
    const path = router.query.path;

    const { page } = useClientPage(path as string);

    if (!page) return <Fragment />;

    return (
        <ClientTemplate title={page.name}>
            <h1>{page.name}</h1>
            <p>{page.description}</p>
        </ClientTemplate>
    );
};

export default Parent;
