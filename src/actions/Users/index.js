import USERS from '../../constants/User'

// LOGIN
export function startLoginAction() {
    return {
        type: USERS.FETCH_LOGIN,
    }
}
export function successLoginAction(user) {
    return {
        type: USERS.LOGIN,
        user
    }
}
export function errorLoginAction(err) {
    return {
        type: USERS.EXIT_LOGIN,
        err
    }
}
export function logout() {
    return {
        type: USERS.LOGOUT
    }
}

// UPDATE USER
export function updatingAction() {
    return {
        type: USERS.UPDATING
    }
}
export function updatedAction(user) {
    return {
        type: USERS.UPDATED,
        user
    }
}
export function errorUpdateAction(err) {
    return {
        type: USERS.UPDATE_ERROR,
        err
    }
}

// CREATE USER
export function creatingAction() {
    return {
        type: USERS.CREATING
    }
}
export function createdAction(user) {
    return {
        type: USERS.CREATED,
        user
    }
}
export function errorCreateAction(err) {
    return {
        type: USERS.CREATE_ERROR,
        err
    }
}