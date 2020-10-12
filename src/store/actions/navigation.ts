import { SET_NAVIGATION_STATE } from '../constants/navigation';

export const setNavigationState = (state: string) => ({
    type: SET_NAVIGATION_STATE,
    payload: state,
});
