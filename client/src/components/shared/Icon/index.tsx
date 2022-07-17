import * as Styled from "./styled";

/**
 * Icon component
 */
export const Icon = ({ name }: IconProps) => {
    return (
        <Styled.Wrapper>
            <use xlinkHref={`/assets/images/sprite.svg#${name}`} />
        </Styled.Wrapper>
    );
};

export interface IconProps {
    name: IconName;
}

export type IconName =
    | "add"
    | "align-center"
    | "align-justify"
    | "align-left"
    | "align-right"
    | "arrow"
    | "dashboard"
    | "desktop"
    | "download"
    | "editor"
    | "eye"
    | "gif"
    | "image"
    | "link"
    | "list"
    | "lock"
    | "logout"
    | "more-dots"
    | "movie"
    | "palette"
    | "redo"
    | "search"
    | "settings"
    | "smartphone"
    | "sticky-note"
    | "tablet"
    | "undo"
    | "user-circle"
    | "users";
