import { useState } from "react";

/**
 * Pagination hook helper for values
 */
export const usePagination = (take: number) => {
    const [count, setCount] = useState(0);
    const [skip, setSkip] = useState(0);

    return { take, count, setCount, skip, setSkip };
};
