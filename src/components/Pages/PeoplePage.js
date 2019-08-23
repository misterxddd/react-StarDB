import React from 'react';
import {withRouter} from 'react-router-dom';

import {PersonList, PersonDetails} from '../SwComponents';
import ErrorBoundry from '../ErrorBoundry';
import Row from '../Row';

const PeoplePage = ({history, match}) => {

    const {id} = match.params;

    return (
        <ErrorBoundry>
            <Row left={<PersonList onItemSelected={(id) => history.push(id)} /> } 
                 right={<PersonDetails itemId={id} /> } />
        </ErrorBoundry>    
    )
};

export default withRouter(PeoplePage);