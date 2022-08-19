import { gql, useQuery } from "@apollo/client";
import * as _ from "lodash";

import { FormSelect } from "@/components/form/inputs";
import {
    PageStatusesQuery,
    PageStatusesQueryVariables,
} from "@/graphql/schema";
import { SelectOption } from "@/types";
import { createSelectOption } from "@/utils/form";

/**
 * Page status select component
 */
export const PageStatusSelect = ({ name }: PageStatusSelectProps) => {
    const { data, loading } = useQuery<
        PageStatusesQuery,
        PageStatusesQueryVariables
    >(FIND_PAGE_STATUSES);

    const statuses = data?.pageStatuses.items;

    const options: SelectOption[] = _.map(statuses, (status) =>
        createSelectOption(status.id, status.name)
    );

    return (
        <FormSelect
            name={name}
            isLoading={loading}
            options={options}
            placeholder="Status"
            defaultValue={_.first(statuses)?.id}
        />
    );
};

const FIND_PAGE_STATUSES = gql`
    query FIND_PAGE_STATUSES {
        pageStatuses {
            items {
                id
                name
            }
        }
    }
`;

interface PageStatusSelectProps {
    name: string;
}
