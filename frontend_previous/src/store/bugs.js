import {createAction, createReducer, createSlice} from '@reduxjs/toolkit';
import * as actions from './api';

let lastId = 0;

//111111111111111111111111111111111111111111
//most effective ways 
const slice = createSlice({
    name: 'bugs',
    initialState: {
        list: [],
        loading: false,
        lastFetch: null
    },

    reducers: {
        //actions => action handlers
        bugAdded: (bugs, action) => {
            bugs.list.push({
                id: ++lastId,
                description: action.payload.description,
                resolved: false
            });
        },

        bugResolved: (bugs, action) =>{
            const index = bugs.list.findIndex(bug => bug.id === action.payload.id);
            bugs.list[index].resolved = true;
        },

        bugsRequested: (bugs, action) =>{
            bugs.loading = true;
        },

        bugsRequestedFailed: (bugs, action) =>{
            bugs.loading = false;
        },

        bugsReceived: (bugs, action) =>{
            bugs.list = action.payload;
            bugs.loading = false;
        }
    }
});

export const {
    bugAdded, 
    bugResolved, 
    bugsReceived,
    bugsRequested,
    bugsRequestedFailed,
} = slice.actions;

export default slice.reducer;

//Selector
export const selectUnresolvedBugs = state => 
    state.entities.bugs.list.filter(bug => !bug.resolved);

export const addBug = bug => 
    actions.apiCallBegin({
    url: "addBug",
    method: "post",
    data: bug,
    onSuccess: bugAdded.type,
});
//22222222222222222222222222222222222222
//new and cleaner codes
//const bugUpdated = createAction("bugUpdated");
//bugUpdated({id: 1});

// export const bugAdded = createAction("bugAdded");
// export const bugRemoved = createAction("bugRemoved");
// export const bugResolved = createAction("bugResolved");

// //new and cleaner codes
// export default createReducer([], {
//     //key: value
//     //actions: fucntions(event => event handler)
//     [bugAdded.type]: (bugs, action) =>{
//         bugs.push({
//             id: ++lastId,
//             description: action.payload.description,
//             resolved: false
//         });
//     },

//     [bugResolved.type]: (bugs, action) =>{
//         const index = bugs.findIndex(bug => bug.id === action.payload.id);
//         bugs[index].resolved = true;
//     }
// })

//3333333333333333333333333333333333333333333
// //Action types
// const BUG_ADDED = "bugAdded";
// const BUG_REMOVED = "bugRemoved";
// const BUG_RESOLVED = "bugResolved";

// //Action creators
// module.exports.bugAdded = description => ({
//     type: BUG_ADDED,
//     payload: {
//         description
//     }
// });

// module.exports.bugResolved = id => ({
//     type: BUG_RESOLVED,
//     payload: {
//         id //id : id
//     }
// });

//reducer
// export default function reducer(state = [], action){
//     switch(action.type){
//         case bugAdded.type:
//             return [
//                 ...state,
//                 {
//                     id: ++lastId,
//                     description: action.payload.description,
//                     resolved: false
//                 }
//             ];
//         case bugRemoved.type:
//             return state.filter(bug => bug.id !== action.payload.id);
//         case bugResolved.type:
//             return state.map(bug => 
//                 bug.id !== action.payload.id ? bug : {...bug, resolved : true}
//             );
//         default:
//             return state;
//     }
// }