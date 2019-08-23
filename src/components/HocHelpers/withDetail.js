import React from 'react';

import ErrorIndicator from '../ErrorIndicator';
import Spinner from '../Spinner';

const withDetail = (child) => (View) => {
    return class extends React.Component {

        constructor() {
            super();
    
            this.state = {
                item: null,
                loading: false,
                error: false
            };
        }
    
        componentDidMount() {
            this.updateItem();
        }
    
        componentDidUpdate(prevProps) {
            if(this.props.itemId !== prevProps.itemId) {
                this.setState({loading: true});
                this.updateItem();
            }
        }
    
        onError = (err) => {
            this.setState({
                error: true,
                loading: false
            });
        }
    
        updateItem = () => {
            const {itemId} = this.props;
    
            if(!itemId) {
                return;
            }
    
            this.props.getItem(itemId)
                .then(item => this.setState(() => {
                    const image = this.props.getItemUrl(item);
                    item.image = image;
                    return {
                        loading: false,
                        item
                    }
                }))
                .catch(this.onError);
        }

        render() {
            const {item, error, loading} = this.state;

            if (loading) {
                return <Spinner />
            }
            if (error) {
                return <ErrorIndicator />
            }

            return (
                <View {...this.props} item={item} child={child} /> 
            )
        }
    }
}

export default withDetail;