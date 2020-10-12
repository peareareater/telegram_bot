import React, { FC, useEffect, useState } from 'react';
import { ButtonGroup, Button, useText, Text } from '@urban-bot/core';
import { ButtonRow } from '../constants/types';
import { ButtonContent, ButtonKeys, ButtonsSets } from './NavButtons';
import { MessageManagerProps } from '../containers/MessageManager';

export const MessageManagerComponent: FC<MessageManagerProps> = ({ navigationState }) => {
    return (
        <>
            <Text>{navigationState}</Text>
        </>
    );
};
