import {
    errorLoginAction,
    startLoginAction,
    successLoginAction,
    logout,
    updatingAction,
    updatedAction,
    errorUpdateAction, creatingAction, createdAction, errorCreateAction
} from '../../actions/Users/index';

import axios from 'axios';

export function loginProcess(dispatch, login) {
    dispatch( startLoginAction() );

    let url = 'https://noodledistress.herokuapp.com/';
    let endPoint = 'user/login/'+login;
    axios.get(url+endPoint).then(res => {
        if (200 === res.status) {
            dispatch( successLoginAction(res.data) )
        } else {
            dispatch( errorLoginAction('Login error !') )
        }
    });
}

export function logoutProcess(dispatch) {
    dispatch( logout() );
}

export function updateUserProcess(dispatch, user) {
    dispatch( updatingAction() );

    let url = 'https://noodledistress.herokuapp.com/';
    let endPoint = 'user/';
    axios.put(url+endPoint, JSON.stringify(user)).then(res => {
        if (200 === res.status) {
            dispatch( updatedAction(res.data) )
        } else {
            dispatch( errorUpdateAction('Update user error') )
        }
    });
}

export function createUserProcess(dispatch, newUser) {
    dispatch( creatingAction() );

    let url = 'https://noodledistress.herokuapp.com/';
    let endPoint = 'user/';
    axios.post(url+endPoint, JSON.stringify(newUser)).then(res => {
        if (null !== res.data) {
            dispatch( createdAction() );
        } else {
            dispatch( errorCreateAction('User creation error !') );
        }
    })
}