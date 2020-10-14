import React, { FC } from 'react';
import { ButtonContent, ButtonMapItem } from './NavButtons';
import { Button, ButtonGroup, Text } from '@urban-bot/core';

const title = `🔑 Adding New Exchange API Key

You can learn how to configure keys in our docs (https://support.cryptuoso.com/exchange-accounts).

Enter your bitfinex API Key Secret (Private Key)

Cryptuoso (https://support.cryptuoso.com/exchange-accounts/)
API Keys
How to create API keys`;

const buttonSet = [
    [{ label: 'Bitfinex', key: 'bitfinex' }],
    [{ label: 'Kraken', key: 'kraken' }],
    [{ label: 'Binance Futures', key: 'binanceFutures' }],
    [ButtonContent.back],
];
export const ChooseExchangeStepButtonSet: FC<{}> = () => {
    return (
        <ButtonGroup title={title}>
            {buttonSet.map((buttons: ButtonMapItem[], i) =>
                buttons.map((button) => (
                    <Button id={button.key} key={`response-button-${i}`}>
                        {button.label}
                    </Button>
                )),
            )}
        </ButtonGroup>
    );
};
export const AddingApiKey: FC<{ name: string }> = ({ name }) => (
    <Text>{`🔑 Adding New Exchange API Key

You can learn how to configure keys in our docs (https://support.cryptuoso.com/exchange-accounts).

Enter your ${name} API KEY

Cryptuoso (https://support.cryptuoso.com/exchange-accounts/)
API Keys
How to create API keys`}</Text>
);
