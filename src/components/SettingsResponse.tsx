import React, { FC } from 'react';
import { Button, ButtonGroup } from '@urban-bot/core';
import { ButtonContent, ButtonMapItem } from './NavButtons';
import { SignalsResponseProps } from './SignalsResponse';

export const messageButtonsConfig = [
    [{ label: `🔐 My exchange API Keys`, key: 'exchangeAPIKeys' }],
    [{ label: `🚦 Turn Telegram signals notifications OFF 🔕`, key: 'turnOff' }],
    [{ label: '🤖 Turn Telegram trading notifications OFF ', key: 'turnOff' }],
    [ButtonContent.back],
];

const title = `👤 Account info

📨 Email: Not set

🚦 Telegram signals notifications is ON 🔔
🤖 Telegram trading notifications is ON 🔔`;

export const SettingsResponse: FC<SignalsResponseProps> = ({ setNavigationState }) => {
    return (
        <>
            <ButtonGroup isNewMessageEveryRender={false} title={title}>
                {messageButtonsConfig.map((buttons: ButtonMapItem[], i) =>
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
