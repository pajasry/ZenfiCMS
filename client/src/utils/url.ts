export const getUrlParam = (param: string): string | null => {
    const queryString = window.location.search;
    return new URLSearchParams(queryString).get(param);
};
