import USERS from '../../constants/User'

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