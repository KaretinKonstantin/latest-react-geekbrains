export const TOGGLE_ACTION = 'PROFILE::TOGGLE_ACTION';

export const toggleAction = (payload: boolean) => {
    return {
        type: TOGGLE_ACTION,
        payload
    }
}
