import React from 'react';

import {PlanetList, PlanetDetails} from '../SwComponents';
import ErrorBoundry from '../ErrorBoundry';
import Row from '../Row';

class PlanetPage extends React.Component {

    constructor() {
        super();

        this.state = {
            selectedPlanet: null
        };

    }

    onPlanetSelected = (id) => {
        this.setState({
            selectedPlanet: id
        });
    }

    render() {
        const { selectedPlanet } = this.state;

        const itemList = (
            <PlanetList
                onItemSelected={this.onPlanetSelected} >  
            </PlanetList>
        );

        const planetDetails = (
            <PlanetDetails 
                itemId={selectedPlanet}>              
            </PlanetDetails>
        );

        return (
            <ErrorBoundry>
                <Row left={itemList} right={planetDetails} />
            </ErrorBoundry>    
        );
    }
};

export default PlanetPage;