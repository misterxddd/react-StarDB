import React from 'react';
import ItemList from '../ItemList';
import { withData, withSwapiService, withDataChildren, compose } from '../HocHelpers';

const renderPerson = (i) => (
    `${i.name} (${i.gender}, ${i.birthYear})`
);  

const renderName = ({name}) => <span>{name}</span>;

const mapPeople = (swapiService) => {
    return {
        getData : swapiService.getAllPeople
    };
};

const mapPlanets = (swapiService) => {
    return {
        getData : swapiService.getAllPlanets
    };
};

const mapStarships = (swapiService) => {
    return {
        getData : swapiService.getAllStarships
    };
};

const PersonList = compose(
                    withSwapiService(mapPeople),
                    withData,
                    withDataChildren(renderPerson)
                  )(ItemList);

const PlanetList = compose(
                    withSwapiService(mapPlanets),
                    withData,
                    withDataChildren(renderName)
                  )(ItemList);

const StarshipList = compose(
                    withSwapiService(mapStarships),
                    withData,
                    withDataChildren(renderName)
                  )(ItemList);

export {
    PersonList,
    PlanetList,
    StarshipList
};