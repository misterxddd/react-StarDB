import React from 'react';
import PropTypes from 'prop-types';

import SwapiService from '../../services/SwapiService';
import Spinner from '../Spinner';
import ErrorIndicator from '../ErrorIndicator';

import './RandomPlanet.css';

class RandomPlanet extends React.Component {
    constructor() {
        super();

        this.state = {
            planet: {},
            loading: true,
            error: false
        };

        this.swapiService = new SwapiService();
    }

    componentDidMount() {
        const {updateInterval} = this.props;
        this.updatePlanet();
        this.interval = setInterval(this.updatePlanet, updateInterval);
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    onError = (err) => {
        this.setState({
            error: true,
            loading: false
        });
    }

    onPlanetLoaded = (planet) => {
        this.setState({
            planet,
            loading: false
        });
    }

    updatePlanet = () => {
        const id = Math.floor(Math.random()*25) + 2;
        this.swapiService.getPlanet(id)
            .then(this.onPlanetLoaded)
            .catch(this.onError);
    }

    render() {
        const { planet, loading, error } = this.state;

        const hasData = !(loading || error);

        const spinner = loading ? <Spinner /> : null;
        const content = hasData ? <PlanetView planet={planet}/> : null;
        const errorMessage = error ? <ErrorIndicator /> : null;
        
        return (
            <div className="random-planet jumbotron rounded">
                {spinner}
                {content}
                {errorMessage}
            </div>
        );
    }
}

RandomPlanet.defaultProps = {
    updateInterval: 10000
};

RandomPlanet.propsTypes = {
    updateInterval: PropTypes.number
};

const PlanetView = ({planet}) => {

    const {id, name, population,
        rotationPeriod, diameter} = planet;

    return (
        <React.Fragment>
            <img className="planet-image"
                    src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`} alt=""
                    onError={() => {document.querySelector('.planet-image').src = "https://starwars-visualguide.com/assets/img/big-placeholder.jpg"}}/>
            <div>
                <h4>{name}</h4>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item">
                        <span className="term">Population:</span>
                        <span>{population}</span>
                    </li>
                    <li className="list-group-item">
                        <span className="term">Rotation Period:</span>
                        <span>{rotationPeriod}</span>
                    </li>
                    <li className="list-group-item">
                        <span className="term">Diameter:</span>
                        <span>{diameter}</span>
                    </li>
                </ul>
            </div>
        </React.Fragment>
    );
};

export default RandomPlanet;