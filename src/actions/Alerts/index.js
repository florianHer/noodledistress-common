import ALERTS from '../../constants/Alerts'

// UPDATE ALERTS
export function updatingAction() {
    return {
        type: ALERTS.UPDATING
    }
}
export function updatedAction(alerts) {
    return {
        type: ALERTS.UPDATED,
        alerts
    }
}
export function errorUpdateAction(err) {
    return {
        type: ALERTS.UPDATE_ERROR,
        err
    }
}