import { combineReducers } from 'redux';
import Enrollment from './reducers/enrollment';
import information from './reducers/information';
import final from './reducers/final';
import dis_Group from './reducers/distinct_group';
import dis_Profs from './reducers/distinct_master';
export default combineReducers({
    enrollment: Enrollment,
    information,
    final,
    dis_Group,
    dis_Profs
})