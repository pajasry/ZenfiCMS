import { useRouter } from "next/router";
import { useState } from "react";

import {
    Button,
    DropdownActions,
    DropdownActionType,
    Icon,
    Text,
} from "@/components/core";
import { selectSignedUser, useAppSelector } from "@/redux";
import { RoutesName } from "@/types";
import { setAuthToken } from "@/utils";

import * as Styled from "./styled";

/**
 * Navigation component
 */
export const Navigation = ({ forceHideWebPreview }: NavigationProps) => {
    const router = useRouter();

    const [dropdown, setDropdown] = useState(false);

    const { signedUser } = useAppSelector(selectSignedUser);

    const showDropdown = () => setDropdown(true);
    const hideDropdown = () => setDropdown(false);

    const logout = () => {
        setAuthToken("");
        window.location.reload();
    };

    const showFront = () => {
        return router.push(RoutesName.FRONT);
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
            {!forceHideWebPreview && (
                <Button
                    outline
                    icon="eye"
                    onClick={showFront}
                    value="Zobrazit web"
                    variant="secondary"
                />
            )}
            <Styled.User
                onMouseEnter={showDropdown}
                onMouseLeave={hideDropdown}
            >
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

export interface NavigationProps {
    forceHideWebPreview?: boolean;
}
