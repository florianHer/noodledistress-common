import CALLS from '../../constants/Call'

// CREATE CALL
export function creatingAction() {
    return {
        type: CALLS.CREATING
    }
}
export function createdAction(call) {
    return {
        type: CALLS.CREATED,
        call
    }
}
export function errorCreateAction(err) {
    return {
        type: CALLS.CREATE_ERROR,
        err
    }
}

// UPDATE CALL
export function updatingAction() {
    return {
        type: CALLS.UPDATING
    }
}
export function updatedAction(call) {
    return {
        type: CALLS.UPDATED,
        call
    }
}
export function errorUpdateAction(err) {
    return {
        type: CALLS.UPDATE_ERROR,
        err
    }
}