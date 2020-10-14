import React, { FC, ReactNode, useState } from 'react';
import { Dialog, DialogStep, Text } from '@urban-bot/core';
import { DialogValidation } from '@urban-bot/core/dist/components/Dialog/DialogStep';
import { AddingApiKey, ChooseExchangeStepButtonSet } from './AddExchangeKeyDialog';

const errorText =
    '❌ Failed to add new bitfinex API Key.\n' +
    '\n' +
    'Failed to check balance. Could not find a key matching the given X-BFX-APIKEY.\n' +
    '\n' +
    'Please try again!\n' +
    '\n' +
    'You can learn how to configure keys in our docs (https://support.cryptuoso.com/exchange-accounts).\n' +
    '\n' +
    'Cryptuoso (https://support.cryptuoso.com/exchange-accounts/)\n' +
    'API Keys\n' +
    'How to create API keys';

const loadingMessage = `🔑 Adding New Exchange API Key

🌀 Checking your bitfinex API Key...

⏳ Please wait...`;
export interface DialogItem {
    content: ReactNode;
    id: string;
    match?: string | RegExp;
    validation?: DialogValidation | undefined;
    nextStep?: DialogItem[];
}

export const ExchangeKeysResponse: FC<{}> = () => {
    const [loading, setLoading] = useState(false);
    async function isValid(message: string): Promise<boolean> {
        setLoading(true);
        const result = new Promise((res) => setTimeout(() => res(message.length > 5), 2000));
        setLoading(false);
        // @ts-ignore
        return result;
    }

    return (
        <>
            {loading && <Text>{loadingMessage}</Text>}
            <Dialog onFinish={(answers) => console.log(answers)}>
                <DialogStep content={<ChooseExchangeStepButtonSet />}>
                    {(name) => (
                        <DialogStep content={<AddingApiKey name={name} />} validation={{ isValid, errorText }}>
                            <DialogStep content={<Text>{`✅ Success`}</Text>} />
                        </DialogStep>
                    )}
                </DialogStep>
            </Dialog>
        </>
    );
};
