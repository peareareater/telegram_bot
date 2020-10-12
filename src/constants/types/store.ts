type ActionPayloadType = any;

export type ActionType = {
    type: string;
    payload: ActionPayloadType;
};

export interface NavigationActionType extends ActionType {
    payload: string;
}

export type NavigationState = {
    navigationState: string;
};

export type AppStore = {
    navigation: NavigationState;
};
