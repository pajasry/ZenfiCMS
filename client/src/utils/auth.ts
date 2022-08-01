const key = "_zenfiCMS_auth";

export const getAuthToken = (): string => {
    return localStorage.getItem(key) || "";
};

export const setAuthToken = (token: string | undefined): void => {
    localStorage.setItem(key, token || "");
};
