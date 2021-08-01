const logger = param => store => next => action => {
    //console.log("Logging", param);
    return next(action);
}

export default logger;