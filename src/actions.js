const createAction = type => (payload, meta) => ({
    type, payload, meta
});

export const REGISTER = 'redux-features/REGISTER';

export const register = createAction(REGISTER);
