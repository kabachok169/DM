import * as React from 'react';
import {Router, Route, Switch} from 'react-router';
import {createBrowserHistory} from 'history';
import * as PathConstants from '../../constants/PathsConstants';

import Authorized from '../Authorized/Authorized';

import '../../../static/main.scss';
import MainPage from '../MainPage/MainPage';
import Login from '../Login/Login';
import Signup from '../Signup/Signup';

const history = createBrowserHistory();

export default class App extends React.Component<any, any> {
    public render(): JSX.Element {
        return (
            <Router history={ history }>
                <Switch>
                    <Route exact path={ PathConstants.MAIN } component={ MainPage } />
                    <Route exact path={ PathConstants.LOGIN } component={ Login } />
                    <Route exact path={ PathConstants.SIGNUP } component={ Signup } />
                    <Route exact path={ PathConstants.AUTHORIZED } component={ Authorized } />
                </Switch>
            </Router>
        );
    }
}