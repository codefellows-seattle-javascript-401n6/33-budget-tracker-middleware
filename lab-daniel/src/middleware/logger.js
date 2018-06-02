const logger = store => next => action => {
    let result = next(action)
    return result;
    console.log('Result: ', result)
}

export default logger;