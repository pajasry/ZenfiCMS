import * as _ from "lodash";
import { useState } from "react";

import { Alert, ContentLoader, DropdownActions, Icon, Tag, Text } from "@/components/core";
import { selectSignedUser, useAppSelector } from "@/redux";
import { TableActionType, TableColumnType } from "@/types";

import * as Styled from "./styled";

/**
 * Table component
 */
export const Table = ({ isLoading, columns, data, actions }: TableProps) => {
    const { signedUser } = useAppSelector(selectSignedUser);

    const [actionsDropdowns, setActionsDropdowns] = useState<boolean[]>([]);

    const updateActionDropdown = (index: number, value: boolean) => {
        setActionsDropdowns(_.set([...actionsDropdowns], index, value));
    };

    const renderColumnValue = (column: TableColumnType<any>, item: any) => {
        const columnValue = _.get(item, column.field);

        if (column.render) return column.render(item);
        if (!column.type) return columnValue;

        if (column.type === "date") {
            return new Date(columnValue).toLocaleDateString();
        }

        if (column.type === "publicationStatus") {
            return <Tag variant={columnValue.variant} value={columnValue.name} />;
        }

        if (column.type === "author") {
            return columnValue.username === signedUser?.username ? "Já" : columnValue.username;
        }
    };

    if (isLoading) {
        return (
            <Styled.Wrapper>
                <ContentLoader />
            </Styled.Wrapper>
        );
    }

    if (!isLoading && _.size(data) === 0) {
        return (
            <Styled.Wrapper>
                <Alert variant="info" value="Nic nebylo nalezeno" />
            </Styled.Wrapper>
        );
    }

    return (
        <Styled.Wrapper>
            <Styled.RowHead>
                {_.map(columns, (column) => (
                    <Styled.Column key={column.name} grow={column.grow || 1}>
                        <Text value={column.name} weight={700} />
                    </Styled.Column>
                ))}
            </Styled.RowHead>
            {_.map(data, (item, i) => (
                <Styled.Row key={i} active={actionsDropdowns[i]}>
                    {_.map(columns, (column) => (
                        <Styled.Column key={column.name} grow={column.grow || 1}>
                            {renderColumnValue(column, item)}
                        </Styled.Column>
                    ))}
                    <Styled.RowActions
                        tabIndex={0}
                        onBlur={() => updateActionDropdown(i, false)}
                        onClick={() => updateActionDropdown(i, !actionsDropdowns[i])}
                    >
                        <Icon name="more-dots" />
                        <DropdownActions
                            isVisible={actionsDropdowns[i]}
                            actions={_.map(actions, (a) => ({
                                ...a,
                                onClick: () => a.onClick(item),
                            }))}
                        />
                    </Styled.RowActions>
                </Styled.Row>
            ))}
        </Styled.Wrapper>
    );
};

interface TableProps {
    isLoading?: boolean;
    columns: TableColumnType<any>[];
    actions: TableActionType<any>[];
    data: object[];
}
