import React from 'react';
import { MainNavigationMenu } from './containers/MainNavigationMenu';
import { MessageManager } from './containers/MessageManager';
import { Provider } from 'react-redux';
import { store } from './store';

export function App() {
    return (
        <Provider store={store}>
            <MessageManager />
            <MainNavigationMenu />
        </Provider>
    );
}
