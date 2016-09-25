const createAction = (type) => (payload, meta) => ({
    type, payload, meta
});

export const REGISTER = 'redux-features/REGISTER';
export const UNREGISTER = 'redux-features/UNREGISTER';

export const register = createAction(REGISTER);
export const unregister = createAction(UNREGISTER);
