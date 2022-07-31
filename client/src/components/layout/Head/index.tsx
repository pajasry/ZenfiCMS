import { Helmet } from "react-helmet";

/**
 * Head component
 */
export const Head = ({ title }: Props) => {
    return (
        <Helmet>
            <title>ZenfiCMS | {title}</title>
            <link
                rel="apple-touch-icon"
                sizes="180x180"
                href="/assets/favicon/apple-touch-icon.png"
            />
            <link
                rel="icon"
                type="image/png"
                sizes="32x32"
                href="/assets/favicon/favicon-32x32.png"
            />
            <link
                rel="icon"
                type="image/png"
                sizes="16x16"
                href="/assets/favicon/favicon-16x16.png"
            />
        </Helmet>
    );
};

interface Props {
    title: string;
}
