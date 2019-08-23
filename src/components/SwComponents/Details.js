import ItemDetails from '../ItemDetails';
import { withDetail, withSwapiService } from '../HocHelpers';
import {Record} from '../ItemDetails';
import React from 'react';

const mapPerson = (swapiService) => {
    return {
        getItem : swapiService.getPerson,
        getItemUrl : swapiService.getPersonImage
    };
};

const mapPlanet = (swapiService) => {
    return {
        getItem : swapiService.getPlanet,
        getItemUrl : swapiService.getPlanetImage
    };
};

const mapStarship = (swapiService) => {
    return {
        getItem : swapiService.getStarship,
        getItemUrl : swapiService.getStarshipImage
    };
};

const starshipParams = [
    <Record field="model" label="Model" />,
    <Record field="length" label="Length" />,
    <Record field="costInCredits" label="Cost" />
];

const planetParams = [                 
    <Record field="population" label="Population" />,
    <Record field="rotationPeriod" label="Rotation Period" />,
    <Record field="diameter" label="Diameter" />
];

const personParams = [
    <Record field="gender" label="Gender"/>,
    <Record field="eyeColor" label="Eye color"/>,
    <Record field="birthYear" label="Birth year"/>
];

const PersonDetails = withSwapiService(mapPerson)(withDetail(personParams)(ItemDetails));
const PlanetDetails = withSwapiService(mapPlanet)(withDetail(planetParams)(ItemDetails));
const StarshipDetails = withSwapiService(mapStarship)(withDetail(starshipParams)(ItemDetails));

export {
    PersonDetails,
    PlanetDetails,
    StarshipDetails
};