import {
    creatingAction,
    createdAction,
    errorCreateAction,
    updatingAction,
    updatedAction,
    errorUpdateAction
} from '../../actions/Calls/index';

import axios from 'axios';

// CREATE NEW CALL
export function sendCallAction(dispatch, user) {
    dispatch( creatingAction() );

    let url = 'https://noodledistress.herokuapp.com/';
    let endPoint = 'call/'+user.id;
    axios.post(url+endPoint).then(res => {
        if (null !== res.data) {
            dispatch( createdAction(res.data) );
        } else {
            dispatch( errorCreateAction('Call creation error !') );
        }
    })
}

// UPDATE CALL WITH ANSWER
export function answerCallAction(dispatch, call, user) {
    dispatch( updatingAction() );

    let url = 'https://noodledistress.herokuapp.com/';
    let endPoint = 'answer/'+user.id+'/'+call.id;
    axios.post(url+endPoint).then(res => {
        if (null !== res.data) {
            dispatch( updatedAction(res.data) ); /* res.data est la réponse à l'appel */
        } else {
            dispatch( errorUpdateAction('Call creation error !') );
        }
    })
}