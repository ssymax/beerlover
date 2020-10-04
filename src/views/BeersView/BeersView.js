import React from 'react';
import AppContext from '../../context';
import List from '../../components/List/List';

const BeersView = () => (
    <AppContext.Consumer>
        {(context) => (
            <List items={context.beers}/>
        )}
    </AppContext.Consumer>
);

export default BeersView;