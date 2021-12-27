import React, {FC} from 'react';

interface ListItemsProps<T> {
    item: T[];
    renderitem: (item: T) => React.ReactNode;
}

export default function List<T>(props: ListItemsProps<T>) {
    return(
        <div>
            {props.item.map(props.renderitem)}
        </div>
    )
}