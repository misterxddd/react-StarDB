import React from 'react';
import {ConsumerSwapiService} from '../SwapiServiceContext';

const withSwapiService = (mapFunction) => (Wrapper) => {
    return (props) => { 
        return (
            <ConsumerSwapiService>
                {
                    (swapiService) => {
                        const mapped = mapFunction(swapiService);
                        return (
                            <Wrapper {...props} {...mapped}/>
                        );
                    }
                }
            </ConsumerSwapiService>
        )
    }
}

export default withSwapiService;