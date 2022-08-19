import * as _ from "lodash";

import { PageEntity } from "@/graphql/schema";

export const getUrlParam = (param: string): string | null => {
    const queryString = window.location.search;
    return new URLSearchParams(queryString).get(param);
};

export const formatPath = (value: string) => {
    const normalized = value.normalize("NFD");

    const withoutDiacritics = _.replace(normalized, /[\u0300-\u036f]/g, "");
    const lowerCased = _.lowerCase(withoutDiacritics);

    return _.replace(lowerCased, /[^\w\-]+/g, "-");
};

export const createPagePreviewLink = (page: PageEntity) => {
    return `${window.location.origin}/${page.path}`;
};
