import React from 'react';

import ErrorIndicator from '../ErrorIndicator';
import Spinner from '../Spinner';


const withData = (View) => {
    return class extends React.Component {
        constructor() {
            super();

            this.state ={
                itemList: null,
                error: false,
                loading: true
            };
        }

        onError = (err) => {
            this.setState({
                error: true,
                loading: false
            });
        }

        componentDidMount() {
            this.props.getData()
                .then((itemList) => {
                    this.setState({
                        itemList,
                        loading: false
                    });
                })
                .catch(this.onError); 
        }
                    
        render() {
            const {itemList, error, loading} = this.state;

            if (loading) {
                return <Spinner />
            }
            if (error) {
                return <ErrorIndicator />
            }

            return (
                <View {...this.props} itemList={itemList} />
            );
        }
    };
}

export default withData;