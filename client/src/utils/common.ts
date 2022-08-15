export const withConfirm = (message: string, cb: () => void) => {
    if (window.confirm(message)) {
        return cb();
    }
};
