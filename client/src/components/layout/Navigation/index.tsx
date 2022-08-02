import { useState } from "react";

import { DropdownActions, DropdownActionType, Icon, Text } from "@/components/core";
import { selectSignedUser, useAppSelector } from "@/redux";
import { setAuthToken } from "@/utils";

import * as Styled from "./styled";

/**
 * Navigation component
 */
export const Navigation = () => {
    const [dropdown, setDropdown] = useState(false);

    const { signedUser } = useAppSelector(selectSignedUser);

    const showDropdown = () => setDropdown(true);
    const hideDropdown = () => setDropdown(false);

    const logout = () => {
        setAuthToken("");
        window.location.reload();
    };

    const actions: DropdownActionType[] = [
        {
            variant: "primary",
            value: "Přejít na profil",
            onClick: () => alert("yes"),
        },
        {
            variant: "danger",
            value: "Odhlásit se",
            onClick: logout,
        },
    ];

    const username = signedUser?.username;

    return (
        <Styled.Wrapper>
            <Styled.User onMouseEnter={showDropdown} onMouseLeave={hideDropdown}>
                <Styled.UserImage>
                    <img src="/assets/images/placeholder.svg" alt="" />
                </Styled.UserImage>
                <Text value={username} weight={600} />
                <Icon name="arrow" />

                <DropdownActions isVisible={dropdown} actions={actions} />
            </Styled.User>
        </Styled.Wrapper>
    );
};
