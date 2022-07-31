import store from "storejs";

const key = "_zenfiCMS_auth";

export const getAuthToken = (): string => {
    return store.get(key);
};

export const setAuthToken = (token: string | undefined): void => {
    store.set(key, token);
};
