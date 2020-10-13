import React, { FC } from 'react';
import { MessageManagerProps } from '../containers/MessageManager';
import { ResponseMessage } from './ResponseButtons';

export const MessageManagerComponent: FC<MessageManagerProps> = ({ navigationState, setNavigationState }) => {
    const Component = ResponseMessage[navigationState];
    return Component ? (
        <>
            <Component type={navigationState} setNavigationState={setNavigationState} />
        </>
    ) : null;
};
