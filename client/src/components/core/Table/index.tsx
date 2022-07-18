import { Column, RowAction } from "@/types";
import * as Styled from "./styled";
import * as _ from "lodash";
import { Icon, Text } from "@/components/core";
import { useState } from "react";

/**
 * Table component
 */
export const Table = ({ columns, data, actions }: TableProps) => {
    const [actionsPopupVisible, setActionsPopupVisible] = useState(false);

    const toggleActionsPopupVisibility = () => {
        setActionsPopupVisible((p) => !p);
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
                        <Text value={column.name} weight={600} />
                    </Styled.Column>
                ))}
            </Styled.RowHead>
            {_.map(data, (item, i) => (
                <Styled.Row key={i}>
                    {_.map(columns, (column) => (
                        <Styled.Column key={column.name} grow={column.grow || 1}>
                            {renderColumnValue(column, item)}
                        </Styled.Column>
                    ))}
                    <Styled.RowActions
                        tabIndex={0}
                        onBlur={() => setActionsPopupVisible(false)}
                        onClick={toggleActionsPopupVisibility}
                    >
                        <Icon name="more-dots" />
                        <Styled.RowActionsPopup visible={actionsPopupVisible}>
                            {_.map(actions, (action, i) => (
                                <Styled.RowAction key={i} onClick={() => action.onClick(item)}>
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
