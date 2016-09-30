import * as actions from './actions'

const reducers = {};

export default createReducers => store => next => action => {
    if (action.type === actions.REGISTER) {
        reducers[action.payload.name] = action.payload.reducer;
        action.payload.store.replaceReducer(
            createReducers(reducers)
        );
    }

    return next(action);
};
