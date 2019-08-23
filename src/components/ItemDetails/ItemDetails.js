import React from 'react';

import './ItemDetails.css';

class Record extends React.Component {

    render() {
        const {item, field, label} = this.props;

        return (
            <li className="list-group-item">
                <span className="term">{label}:</span>
                <span>{item[field]}</span>
            </li>
        );
    }
}

const ItemDetails = (props) => {

    const {item, child} = props;

    if (!item) {
        return <span>Select an item from list!</span>;
    }

    const contentData = (
        <React.Fragment>
            <img className="item-image"
                src={item.image} alt="Sas"/>
            <div className="card-body">
                <h4>{item.name}</h4>
                <ul className="list-group list-group-flush">
                    {
                        React.Children.map(child, (child) => {
                            return React.cloneElement(child, {item})
                        })
                    }
                </ul>
            </div>
        </React.Fragment>
        
    );

    return (
        <div className="item-details card">
            {contentData}
        </div>
    );
}

export {
    Record
}

export default ItemDetails;