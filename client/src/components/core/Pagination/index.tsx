import * as _ from "lodash";
import { Dispatch, Fragment, SetStateAction } from "react";

import * as Styled from "./styled";

/**
 * Pagination component
 */
export const Pagination = ({ count = 0, skip, setSkip, take }: PaginationProps) => {
    const maxPage = Math.ceil(count / take);
    const currentPage = skip / take + 1;

    const canPrev = skip > 0;
    const canNext = count > take + skip;

    const gotoPage = (page: number) => {
        setSkip((page - 1) * take);
    };

    const gotoPrevPage = () => {
        if (canPrev) setSkip((p) => p - take);
    };

    const gotoNextPage = () => {
        if (canNext) setSkip((p) => p + take);
    };

    const generatePagesList = () => {
        if (currentPage === 1) return _.range(1, 4);
        if (currentPage === maxPage) return _.range(currentPage - 2, currentPage + 1);
        return [currentPage - 1, currentPage, currentPage + 1];
    };

    if (3 > maxPage) return <Fragment />;

    return (
        <Styled.Wrapper>
            <Styled.Button disabled={!canPrev} onClick={gotoPrevPage}>
                Předchozí
            </Styled.Button>
            {generatePagesList().map((page) => (
                <Styled.Button
                    key={page}
                    isActive={page === currentPage}
                    onClick={() => gotoPage(page)}
                >
                    {page}
                </Styled.Button>
            ))}
            <Styled.Button disabled={!canNext} onClick={gotoNextPage}>
                Následující
            </Styled.Button>
        </Styled.Wrapper>
    );
};

interface PaginationProps {
    count: number | undefined;
    take: number;
    skip: number;
    setSkip: Dispatch<SetStateAction<number>>;
}
