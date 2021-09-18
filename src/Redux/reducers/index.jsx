import counter from './counterReducer'
import {combineReducers} from 'redux'

const allreducers = combineReducers({
    counter,
   
})
export default allreducers