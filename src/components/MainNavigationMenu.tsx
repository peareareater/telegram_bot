import React, { FC, useState } from 'react';
import { ButtonGroup, Button, useText } from '@urban-bot/core';
import { ButtonContent, ButtonKeys, ButtonMapItem, getButtonsSets } from './NavButtons';
import { MainNavigationMenuProps } from '../containers/MainNavigationMenu';

export const MainNavigationMenuComponent: FC<MainNavigationMenuProps> = ({ navigationState, setNavigationState }) => {
    const [buttonContent, setContent] = useState<ButtonMapItem>(ButtonContent.mainMenu);

    useText(({ text }) => {
        const chosenMenu = Object.values(ButtonContent).find((button) => button.label === text);
        if (chosenMenu) {
            setNavigationState(chosenMenu.key);
            setContent(chosenMenu);
        }
    });

    return (
        <>
            <ButtonGroup isReplyButtons={true} isResizedKeyboard title={buttonContent.label}>
                {getButtonsSets(navigationState || ButtonKeys.mainMenu).map((row) =>
                    row.map((button) => <Button key={button.text}>{button.text}</Button>),
                )}
            </ButtonGroup>
        </>
    );
};
