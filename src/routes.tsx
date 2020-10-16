import React from 'react';

import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Landing from './pages/Landing';
import OphanagesMap from './pages/OrphanagesMap';
import Ophanages from './pages/Orphanage';
import CreateOrphanege from './pages/CreateOrphanage';

function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Landing} />
                <Route path="/app" component={OphanagesMap} />
                <Route path="/orphanages/create" component={CreateOrphanege} />
                <Route path="/orphanages/:id" component={Ophanages} />
            </Switch>
        </BrowserRouter>
    )

}
export default Routes;