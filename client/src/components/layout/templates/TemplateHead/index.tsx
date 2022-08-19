import Head from "next/head";

/**
 * Template head component
 */
export const TemplateHead = ({ title, isClient }: TemplateHeadProps) => {
    return (
        <Head>
            {isClient ? (
                <title>{title}</title>
            ) : (
                <title>ZenfiCMS | {title}</title>
            )}

            <meta charSet="UTF-8" />
            <meta
                name="viewport"
                content="width=device-width, initial-scale=1.0"
            />
        </Head>
    );
};

interface TemplateHeadProps {
    title: string | undefined;
    isClient?: boolean;
}
