import Loader from "react-content-loader";

import * as Styled from "./styled";

/**
 * Content loader
 */
export const ContentLoader = () => {
    return (
        <Styled.Wrapper>
            <Loader>
                <rect x="0" y="0" rx="5" ry="5" width="100%" height="80" />
            </Loader>
        </Styled.Wrapper>
    );
};
