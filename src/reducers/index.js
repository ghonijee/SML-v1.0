import {combineReducers} from 'redux'
import todos from './todos'
import vFilter from './vFilter'

export default combineReducers({
  todos,
  vFilter
});