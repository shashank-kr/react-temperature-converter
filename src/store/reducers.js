import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import profile from 'containers/Profile/reducer'
import temperature from 'containers/Temperature/reducer'

const reducers = combineReducers({
  profile,
  router: routerReducer,
  temperature: temperature
})

export default reducers
