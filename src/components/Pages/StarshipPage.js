import React from 'react';
import {withRouter} from 'react-router-dom';

import {StarshipList} from '../SwComponents';
import ErrorBoundry from '../ErrorBoundry';

const StarshipPage = ({history}) =>  {
    return (
        <ErrorBoundry>
            <StarshipList
                onItemSelected={(id) => history.push(id)} /> 
        </ErrorBoundry>    
    );
};

export default withRouter(StarshipPage);