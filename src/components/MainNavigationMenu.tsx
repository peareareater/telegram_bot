import React, { FC, useState } from 'react';
import { ButtonGroup, Button, useText } from '@urban-bot/core';
import { ButtonContent, ButtonKeys, ButtonMapItem, getButtonsSets } from './NavButtons';

interface MainNavigationMenuProps {
    navigationState: string;
    setNavigationState: (state: string) => void;
}
export const MainNavigationMenuComponent: FC<MainNavigationMenuProps> = ({ navigationState, setNavigationState }) => {
    const [buttonContent, setContent] = useState<ButtonMapItem>(ButtonContent.mainMenu);

    useText(({ text }) => {
        const chosenMenu = Object.values(ButtonContent).find((button) => button.label === text);
        if (chosenMenu){// && chosenMenu.key !== navigationState) {
            setNavigationState(chosenMenu.key);
            setContent(chosenMenu);
        }
    });

    const renderButtons = React.useMemo(() => {
        return (
            <ButtonGroup
                isReplyButtons
                isResizedKeyboard
                title={buttonContent.label}
                disableNotification={true}
            >
                {getButtonsSets(navigationState || ButtonKeys.mainMenu).map((row) =>
                    row.map((button) => <Button key={button.text}>{button.text}</Button>),
                )}
            </ButtonGroup>
        )
    }, [navigationState]);

    return (
        <>
            {renderButtons}
        </>
    );
};
