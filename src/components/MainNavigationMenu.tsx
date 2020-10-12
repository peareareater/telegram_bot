import React, { FC, useEffect, useState } from 'react';
import { ButtonGroup, Button, useText, Text } from '@urban-bot/core';
import { ButtonRow } from '../constants/types';
import { ButtonContent, ButtonKeys, ButtonsSets } from './NavButtons';
import { MainNavigationMenuProps } from '../containers/MainNavigationMenu';

export const MainNavigationMenuComponent: FC<MainNavigationMenuProps> = ({ navigationState, setNavigationState }) => {
    const [buttons, setButtons] = useState<ButtonRow[]>([]);

    useText(({ text }) => {
        const chosenMenu = Object.values(ButtonContent).find((button) => button.label === text);
        if (chosenMenu) {
            setButtons(ButtonsSets[chosenMenu.key]);
            setNavigationState(chosenMenu.key);
        }
    });

    return (
        <>
            <ButtonGroup isReplyButtons={true} title={'text'}>
                {buttons.map((row) => row.map((button) => <Button>{button.text}</Button>))}
            </ButtonGroup>
        </>
    );
};
