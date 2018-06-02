const validator = store => next => action => {
    let newVal = next(action);
    console.log('Validator: ', newVal);
    return next(action);
    
}

export default validator;