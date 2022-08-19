import { gql, useQuery } from "@apollo/client";
import * as _ from "lodash";
import React from "react";

import { FormSelect } from "@/components/form/inputs";
import { PageEntity, PagesQuery, PagesQueryVariables } from "@/graphql/schema";
import { SelectOption } from "@/types";
import { createSelectOption } from "@/utils/form";

/**
 * Sub pages select component
 */
export const SubpagesSelect = ({
    name,
    pageId,
    subpages,
}: ParentPageSelectionProps) => {
    const { data, loading } = useQuery<PagesQuery, PagesQueryVariables>(
        FIND_PAGES,
        { variables: { except: pageId } }
    );

    const pages = data?.pages.items;

    const initOptions: SelectOption[] = _.map(subpages, (subpage) =>
        createSelectOption(subpage.id, subpage.name)
    );

    const options: SelectOption[] = _.map(pages, (page) =>
        createSelectOption(page.id, page.name)
    );

    return (
        <FormSelect
            isMulti
            name={name}
            isClearable
            isLoading={loading}
            placeholder="Podstránky"
            options={_.concat(initOptions, options)}
        />
    );
};

const FIND_PAGES = gql`
    query FIND_PAGES($except: String) {
        pages(
            isHomepage: false
            hasSubpages: false
            parentId: null
            except: $except
        ) {
            items {
                id
                name
            }
        }
    }
`;

interface ParentPageSelectionProps {
    name: string;
    pageId?: string;
    subpages?: PageEntity[];
}
