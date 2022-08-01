import { useRouter } from "next/router";

import { Icon, IconName, Text } from "@/components/core";
import { RoutesName } from "@/types";

import * as Styled from "./styled";

/**
 * Sidebar component
 */
export const Sidebar = () => {
    return (
        <Styled.Wrapper>
            <Styled.Logo>
                <img src="/assets/images/logo.svg" alt="ZenfiCMS" />
            </Styled.Logo>
            <Styled.Menu>
                <MenuItem value="Přehled" icon="dashboard" route={RoutesName.HOME} />
                <MenuItem value="Média" icon="image" route={RoutesName.MEDIA} />
                <MenuItem value="Příspěvky" icon="sticky-note" route={RoutesName.POSTS} />
                <MenuItem value="Stránky" icon="editor" route={RoutesName.PAGES} />
                <MenuItem value="Vzhled" icon="palette" route={RoutesName.APPEARANCE} />
                <MenuItem value="Uživatelé" icon="users" route={RoutesName.USERS} />
                <MenuItem value="Nastavené" icon="settings" route={RoutesName.SETTINGS} />
            </Styled.Menu>
        </Styled.Wrapper>
    );
};

const MenuItem = ({ icon, route, value }: MenuItemProps) => {
    const router = useRouter();

    const isActive = route === router.pathname;

    return (
        <Styled.MenuItem isActive={isActive} onClick={() => router.push(route)}>
            <Icon name={icon} />
            <Text value={value} weight={600} />
        </Styled.MenuItem>
    );
};

interface MenuItemProps {
    value: string;
    icon: IconName;
    route: RoutesName;
}
