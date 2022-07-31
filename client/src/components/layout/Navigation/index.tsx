import { Icon, Text } from "@/components/core";
import { selectSignedUser, useAppSelector } from "@/redux";
import * as Styled from "./styled";

/**
 * Navigation component
 */
export const Navigation = () => {
    const { signedUser } = useAppSelector(selectSignedUser);

    const username = signedUser?.firstName || signedUser?.email;

    return (
        <Styled.Wrapper>
            <Styled.User>
                <Styled.UserImage>
                    <img src="/assets/images/placeholder.svg" alt="" />
                </Styled.UserImage>
                <Text value={username} weight={600} />
                <Icon name="arrow" />
            </Styled.User>
        </Styled.Wrapper>
    );
};
