import { Dispatch } from 'react';
import { connect, ConnectedProps } from 'react-redux';
import { MainNavigationMenuComponent } from '../components/MainNavigationMenu';
import { ActionType, AppStore } from '../constants/types/store';
import { setNavigationState } from '../store/actions/navigation';

export type MainNavigationMenuProps = ConnectedProps<typeof connector> & {};

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

export const MainNavigationMenu = connector(MainNavigationMenuComponent);
