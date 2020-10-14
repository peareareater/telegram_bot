import React, { useState } from 'react';
import { MainNavigationMenu } from './containers/MainNavigationMenu';
import { MessageManager } from './containers/MessageManager';
// import { Provider } from 'react-redux';
// import { store } from './store';

interface State {
    navigationState: string;
}
export function App() {
    const [state, setState] = useState<State>({ navigationState: 'mainMenu' });

    const setNavigationState = (navigationState: string) => setState((state) => ({ ...state, navigationState }));
    return (
        <>
            <MessageManager setNavigationState={setNavigationState} navigationState={state.navigationState} />
            <MainNavigationMenu setNavigationState={setNavigationState} navigationState={state.navigationState} />
        </>
    );
}
