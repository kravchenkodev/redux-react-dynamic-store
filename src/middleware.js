import * as actions from './actions'

export default store => next => action => {
    if (action.type === actions.REGISTER) {
        action.payload.store.async[action.payload.name] = action.payload.reducer;
        action.payload.store.replaceReducer(
            action.payload.createReducers(action.payload.store.async)
        );
    }

    if (action.type === actions.UNREGISTER) {
        delete action.payload.store.async[action.payload.name];
        action.payload.store.replaceReducer(
            action.payload.createReducers(action.payload.store.async)
        );
    }

    return next(action);
};
