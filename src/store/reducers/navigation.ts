import { Action } from 'ts-loader/dist/interfaces';
import { NavigationActionType } from '../../constants/types/store';
import { SET_NAVIGATION_STATE, RESET_NAVIGATION_STATE } from '../constants/navigation';

const initialState = {
    navigationState: null,
    chosenMenu: null,
};

export const navigation = (state = initialState, { type, payload }: NavigationActionType) => {
    switch (type) {
        case SET_NAVIGATION_STATE: {
            return { ...state, navigationState: payload };
        }

        case RESET_NAVIGATION_STATE: {
            return { ...state, navigationState: null };
        }

        default:
            return state;
    }
};
