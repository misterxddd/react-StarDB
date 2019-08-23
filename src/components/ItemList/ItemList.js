import React from 'react';
import PropTypes from 'prop-types';

import './ItemList.css';

const ItemList = (props) =>  {

    const {itemList, onItemSelected, children: renderLabel} = props;

    const items = itemList.map((item) => {
        const {id} = item;
        const label = renderLabel(item);
        return (
            <li className="list-group-item"
                key={id}
                onClick={() => onItemSelected(id)}>
                {label}
            </li>
        );
    });

    return (
        <ul className="item-list list-group">
            {items}
        </ul>
    );

}

ItemList.defaultProps = {
    children: ({name}) => <span>{name}</span>
};

ItemList.propTypes = {
    onItemSelected: PropTypes.func,
    itemList: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default ItemList;