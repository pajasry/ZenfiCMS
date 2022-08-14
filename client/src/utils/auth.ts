import { getUrlParam } from "@/utils/url";

const key = "_zenfiCMS_auth";

export const getAuthToken = (): string => {
    return localStorage.getItem(key) || "";
};

export const setAuthToken = (token: string | undefined): void => {
    localStorage.setItem(key, token || "");
};

export const getPasswordToken = (): string | null => {
    return getUrlParam("token");
};
