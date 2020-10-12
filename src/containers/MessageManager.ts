import { Dispatch } from 'react';
import { connect, ConnectedProps } from 'react-redux';
import { MessageManagerComponent } from '../components/MessageManager';
import { ActionType, AppStore } from '../constants/types/store';
import { setNavigationState } from '../store/actions/navigation';

export type MessageManagerProps = ConnectedProps<typeof connector> & {};

function mapStateToProps(store: AppStore) {
    return {
        navigationState: store.navigation.navigationState,
    };
}

function mapDispatchToProps(dispatch: Dispatch<ActionType>) {
    return {
        setNavigationState: (menu: string) => dispatch(setNavigationState(menu)),
        dispatch,
    };
}

const connector = connect(mapStateToProps, mapDispatchToProps);

export const MessageManager = connector(MessageManagerComponent);
