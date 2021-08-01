import { combineReducers } from "redux";
import bugsReducer from './bugs';
import projectsReducer from './projects';

export default combineReducers({
    bugs: bugsReducer,
    projects: projectsReducer,
    
});