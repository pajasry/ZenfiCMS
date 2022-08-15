import * as _ from "lodash";

export const getUrlParam = (param: string): string | null => {
    const queryString = window.location.search;
    return new URLSearchParams(queryString).get(param);
};

export const normalizeValueForUrl = (value: string) => {
    const normalized = value.normalize("NFD");

    const withoutDiacritics = _.replace(normalized, /[\u0300-\u036f]/g, "");
    const lowerCased = _.lowerCase(withoutDiacritics);

    return _.replace(lowerCased, /[^\w\-]+/g, "-");
};
