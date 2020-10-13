import React, { FC } from 'react';
import { Button, ButtonGroup, Text } from '@urban-bot/core';
import { ButtonKeys } from './NavButtons';

interface SignalsResponseProps {
    type: ButtonKeys;
}

const messageButtonsConfig = [
    `🔐 My exchange API Keys`,
    `🚦 Turn Telegram signals notifications OFF 🔕`,
    `🤖 Turn Telegram trading notifications OFF 🔕`,
    '⬅ Back',
];

export const SettingsResponse: FC<SignalsResponseProps> = () => {
    return (
        <>
            <Text>{'👤 Account Info'}</Text>
            <Text>{'\n'}</Text>
            <Text>{'✉ Email: not set'}</Text>
            <Text>{'\n'}</Text>
            <Text>{'🚦 Telegram signals notifications is ON 🔔'}</Text>
            <Text>{'🤖 Telegram trading notifications is ON 🔔'}</Text>
            <ButtonGroup isNewMessageEveryRender={false}>
                {messageButtonsConfig.map((buttonText, i) => (
                    <Button key={`response-button-${i}`}>{buttonText}</Button>
                ))}
            </ButtonGroup>
        </>
    );
};
