const logger = store => next => action => {
  console.log('LOGGER-ACTION', action, store.getState());
  let result = next(action);
  console.log('LOGGER-RESULT', store.getState());
  return result;
};

export default logger;