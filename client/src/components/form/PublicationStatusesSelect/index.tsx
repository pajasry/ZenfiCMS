import { gql, useQuery } from "@apollo/client";
import * as _ from "lodash";

import { FormSelect } from "@/components/form";
import {
    PublicationStatusesQuery,
    PublicationStatusesQueryVariables,
} from "@/graphql/schema";
import { SelectOption } from "@/types";
import { createSelectOption } from "@/utils/form";

/**
 * Publication statuses select component
 */
export const PublicationStatusesSelect = ({
    name,
}: PublicationStatusesSelectProps) => {
    const { data, loading } = useQuery<
        PublicationStatusesQuery,
        PublicationStatusesQueryVariables
    >(GET_PUBLICATION_STATUSES);

    const items = data?.publicationStatuses.items;

    const options: SelectOption[] = _.map(items, (status) =>
        createSelectOption(status.id, status.name)
    );

    return (
        <FormSelect
            name={name}
            isLoading={loading}
            options={options}
            placeholder="Status"
            defaultValue={_.first(items)?.id}
        />
    );
};

const GET_PUBLICATION_STATUSES = gql`
    query GET_PUBLICATION_STATUSES {
        publicationStatuses {
            items {
                id
                name
            }
        }
    }
`;

interface PublicationStatusesSelectProps {
    name: string;
}
