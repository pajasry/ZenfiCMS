import * as _ from "lodash";

export const formatPath = (value: string) => {
    const normalized = value.normalize("NFD");

    const withoutDiacritics = _.replace(normalized, /[\u0300-\u036f]/g, "");
    const lowerCased = _.lowerCase(withoutDiacritics);

    return _.replace(lowerCased, /[^\w\-]+/g, "-");
};
