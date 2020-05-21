import React from 'react';
import { BrowserRouter, Route, Switch} from 'react-router-dom';

import Lista   from './pages/Lista';
import Detalhe from './pages/Detalhe';

export default function Routes(){

   

    return(
    <BrowserRouter>
        <Switch>
            <Route path="/" exact   component={Lista} />
            <Route path="/detalhe" component={Detalhe} />
        </Switch>
    </BrowserRouter>
    );
};