import {configureStore, getDefaultMiddleware} from '@reduxjs/toolkit';
// import {createStore} from 'redux';
// import {devToolsEnhancer} from 'redux-devtools-extension';
import reducer from './reducer.js';
import logger from './middleware/logger'
import api from './middleware/api'
//import func from './middleware/func'

export default function() {
    return configureStore({
        reducer,
        //reducer: reducer
        middleware: [
            //func,
            ...getDefaultMiddleware(),
            logger("console"),
            api,    
        ]
    });
}
