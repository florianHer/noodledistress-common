import {
    updatingAction,
    updatedAction,
    errorUpdateAction
} from '../../actions/Alerts/index';

import axios from 'axios';

// UPDATE CALL WITH ANSWER
export function getAlertsAction(dispatch, user) {
    dispatch( updatingAction() );

    let url = 'https://noodledistress.herokuapp.com/';
    let endPoint = 'call/filter/'+user.id;
    axios.get(url+endPoint).then(res => {
        if (null !== res.data) {
            dispatch( updatedAction(res.data) );
        } else {
            dispatch( errorUpdateAction('Get alerts list error') );
        }
    })
}