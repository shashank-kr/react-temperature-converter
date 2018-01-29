import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { ConnectedRouter } from 'react-router-redux'
import { Route } from 'react-router'
import config from 'store'
import 'index.css'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import registerServiceWorker from 'registerServiceWorker'
import App from 'containers/App'
import Profile from 'containers/Profile'
import TemperatureConverterContainer from 'containers/Temperature'
import {ROUTE_URL} from './containers/constants'


const { store, history } = config

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <App>
        <Route exact path= {ROUTE_URL.home} component={TemperatureConverterContainer} />
        <Route exact path= {ROUTE_URL.profile} component={Profile} />
      </App>
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root')
)

registerServiceWorker()
