import React from 'react';
import { Route } from 'react-router-dom';
import Header from '../Headings/Header';
import Aside from '../Aside';
import Content from './Content';
import AutocompleteDemo from './AutocompleteDemo';
import './Autocomplete.css';

const Autocomplete = ({ match }) => {
    return (
        <div className="spacingLeft">
            <header>
                <Header headerText="Autocomplete" />
            </header>
            <main className="col s12 m9">
                <div className="row">
                    <div className="col s12 m9">
                        <Route exact path={`${match.url}`} component={AutocompleteDemo} />
                        <Route path={`${match.url}/:id`} component={Content} />
                    </div>
                    <div className="col s12 m3 hide-on-med-and-down">
                        <Aside data={['Ref and the DOM', 'Setting up Redux Store',
                            'Action and Reducer']} />
                    </div>
                </div>
            </main>
        </div>
    );
}

export default Autocomplete;