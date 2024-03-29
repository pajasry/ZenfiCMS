import { VariantType, WithDefaultTheme } from "@/types";

export const parseColorVariant = (props: ParseColorVariantProps) => {
    return props.theme.color[props.variant || "primary"];
};

type ParseColorVariantProps = WithDefaultTheme & { variant: VariantType } & any;
