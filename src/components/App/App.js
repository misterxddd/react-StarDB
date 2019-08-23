import React from 'react';
import {BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom';

import Header from '../Header';
import RandomPlanet from '../RandomPlanet';
import {PeoplePage, PlanetPage, StarshipPage, SecretPage, LoginPage} from '../Pages';
import ErrorBoundry from '../ErrorBoundry';
import {ProviderSwapiService} from '../SwapiServiceContext';
import SwapiService from '../../services/SwapiService';
import {StarshipDetails} from '../SwComponents';

import './App.css';

class App extends React.Component {

    constructor() {
        super();

        this.swapiService = new SwapiService();

        this.state = {
            isLoggedIn: false
        };
    }

    onLogin = () => {
        this.setState({
            isLoggedIn: true
        });
    }

    render() {

        const {isLoggedIn} = this.state;
        
        return (
            
            <ErrorBoundry>
                <ProviderSwapiService value={this.swapiService}>
                    <Router>
                        <div className="stardb-app">
                            <Header />
                            <RandomPlanet />

                            <Switch>
                                <Route path="/" render={()=> <h2>Welcome to StarDB</h2>} exact/>
                                <Route path="/people/:id?" component={PeoplePage} />
                                <Route path="/planets" component={PlanetPage} />
                                <Route path="/starships" component={StarshipPage} exact/>
                                <Route path="/starships/:id" render={
                                    ({match}) => {
                                        const {id} = match.params;
                                        return <StarshipDetails itemId={id} />
                                    }
                                } />

                                <Route path="/login" render={() => (
                                    <LoginPage 
                                        isLoggedIn={isLoggedIn} 
                                        onLogin={this.onLogin}/>
                                )} />

                                <Route path="/secret" render={() => (
                                    <SecretPage 
                                        isLoggedIn={isLoggedIn} />
                                )} />

                                <Redirect to="/" />
                            </Switch>

                        </div>  
                    </Router>
                </ProviderSwapiService>
            </ErrorBoundry>
        );
    }
};

export default App;