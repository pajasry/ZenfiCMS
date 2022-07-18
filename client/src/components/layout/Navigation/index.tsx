import * as Styled from "./styled";
import { Icon, Text } from "@/components/core";

/**
 * Navigation component
 */
export const Navigation = () => {
    return (
        <Styled.Wrapper>
            <Styled.User>
                <Styled.UserImage>
                    <img src="/assets/images/placeholder.svg" alt="" />
                </Styled.UserImage>
                <Text value="Jiří" weight={600} />
                <Icon name="arrow" />
            </Styled.User>
        </Styled.Wrapper>
    );
};
