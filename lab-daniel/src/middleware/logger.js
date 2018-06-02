const logger = store => next => action => {
    let result = next(action)
    console.log('Result: ', result)
    return result;
}

export default logger;