import {errorLoginAction, startLoginAction, successLoginAction} from '../../actions/Users/Login';
import axios from 'axios';

export function loginProcess(dispatch, login) {
    dispatch( startLoginAction() );

    let url = 'https://noodledistress.herokuapp.com/';
    let endPoint = 'user/login/'+login;
    axios.get(url+endPoint).then(res => {
        if (200 === res.status) {
            dispatch( successLoginAction(res.data) )
        } else {
            dispatch( errorLoginAction('Login error') )
        }
    });
}