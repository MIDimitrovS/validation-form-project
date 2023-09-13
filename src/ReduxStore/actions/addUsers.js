export const PREFIX = 'ADD_USERS_MANAGER/';

export const ADD_USER = `${PREFIX}ADD_USER`;

export const addUser = (user) => ({
    type: ADD_USER,
    payload: user,
});