import { Column, RowAction } from "@/types";
import * as Styled from "./styled";
import * as _ from "lodash";
import { Icon, Text } from "@/components/core";
import { useState } from "react";

/**
 * Table component
 */
export const Table = ({ columns, data, actions }: TableProps) => {
    const [actionsPopups, setActionsPopups] = useState<boolean[]>([]);

    const updateActionPopup = (index: number, value: boolean) => {
        setActionsPopups(_.set([...actionsPopups], index, value));
    };

    const renderColumnValue = (column: Column<any>, item: any) => {
        const columnValue = _.get(item, column.field);

        if (column.render) return column.render(item);
        if (!column.type) return columnValue;

        if (column.type === "status") return <Styled.RowStatus />;
        if (column.type === "date") return new Date(columnValue).toLocaleDateString();
    };

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
                <Styled.Row key={i} active={actionsPopups[i]}>
                    {_.map(columns, (column) => (
                        <Styled.Column key={column.name} grow={column.grow || 1}>
                            {renderColumnValue(column, item)}
                        </Styled.Column>
                    ))}
                    <Styled.RowActions
                        tabIndex={0}
                        onBlur={() => updateActionPopup(i, false)}
                        onClick={() => updateActionPopup(i, !actionsPopups[i])}
                    >
                        <Icon name="more-dots" />
                        <Styled.RowActionsPopup visible={actionsPopups[i]}>
                            {_.map(actions, (action, i) => (
                                <Styled.RowAction
                                    key={i}
                                    variant={action.variant}
                                    onClick={() => action.onClick(item)}
                                >
                                    {action.title}
                                </Styled.RowAction>
                            ))}
                        </Styled.RowActionsPopup>
                    </Styled.RowActions>
                </Styled.Row>
            ))}
        </Styled.Wrapper>
    );
};

interface TableProps {
    columns: Column<any>[];
    actions: RowAction<any>[];
    data: object[];
}
