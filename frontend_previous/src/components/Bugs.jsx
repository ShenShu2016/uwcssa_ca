import React, { useState, useEffect, useContext } from 'react';
import {connect, useDispatch, useSelector} from 'react-redux';

import * as actions from '../store/api';
import {bugsReceived, bugsRequested, bugsRequestedFailed} from '../store/bugs';

const Bugs = (props) => {
    // const contextTypes = useContext(StoreContext);
    // const [bugs, setBugs] = useState([]);

    // useEffect(() => {
    //     // Update the document title using the browser API
    //     const store = contextTypes;

    //     const unsubscribe = store.subscribe(() => {
    //         setBugs(store.getState().entities.bugs.list);
    //     });

    //     store.dispatch(actions.apiCallBegin({
    //         url: "bugs",
    //         onStart: bugsRequested.type,
    //         onSuccess: bugsReceived.type,
    //         onError: bugsRequestedFailed.type
    //     }));

    //     return unsubscribe;
    // }, []);
    const dispatch = useDispatch();
    const bugs = useSelector(state => state.entities.bugs.list);

    useEffect(() =>{
        //props.loadBugs();
        dispatch(actions.apiCallBegin({
            url: "bugs",
            onStart: bugsRequested.type,
            onSuccess: bugsReceived.type,
            onError: bugsRequestedFailed.type
        }));
    }, []);


    return (
        <div>
            <ul>{bugs.map(bug => <li key={bug.id}>{bug.description}</li>)}</ul>
        </div>
    );
}

//class way to do this
const mapStateToProps = state => ({
    bugs: state.entities.bugs.list
});

//class way to do this
const mapDispatchToProps = dispatch => ({
    loadBugs: () => dispatch(actions.apiCallBegin({
        url: "bugs",
        onStart: bugsRequested.type,
        onSuccess: bugsReceived.type,
        onError: bugsRequestedFailed.type
    })),
});

//Container
//Presentation (Bugs)

export default connect(mapStateToProps, mapDispatchToProps)(Bugs);
