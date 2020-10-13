import React, { FC } from 'react';
import { Button, ButtonGroup } from '@urban-bot/core';
import { ButtonContent, ButtonKeys, ButtonMapItem } from './NavButtons';
import { capitalize, isSignalOrRobot } from '../helpers';
import { buttonsMap, generateButtons, MESSAGE_TAIL, messageProp, titleMap } from './SignalsButtons';

interface SignalsResponseProps {
    type: ButtonKeys;
    setNavigationState: (state: string) => void;
}

const getButtons = (type: ButtonKeys) => {
    if (isSignalOrRobot(type)) {
        const typeName = capitalize(type);
        return generateButtons(typeName);
    }
    return buttonsMap[type];
};
const getTitle = (type: ButtonKeys) => {
    if (isSignalOrRobot(type)) {
        return `${ButtonContent[type].label} - ${messageProp[type]} ${MESSAGE_TAIL}`;
    }
    return titleMap[type];
};
export const SignalsResponse: FC<SignalsResponseProps> = ({ type, setNavigationState }) => {
    const title = getTitle(type);
    return (
        <>
            <ButtonGroup title={title} isNewMessageEveryRender={false}>
                {getButtons(type).map((buttons: ButtonMapItem[], i) =>
                    buttons.map((button) => (
                        <Button onClick={() => setNavigationState(button.key)} key={`response-button-${i}`}>
                            {button.label}
                        </Button>
                    )),
                )}
            </ButtonGroup>
        </>
    );
};
