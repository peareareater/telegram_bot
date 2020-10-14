import React, { FC } from 'react';
import { Dialog, DialogStep, Text } from '@urban-bot/core';
import { SignalsResponse } from './SignalsResponse';
import { ButtonKeys } from './NavButtons';

const enterAmountText = `🚥 Subscribing to #PAR_1_Binance_Fut_ATOM_USDT_8h robot.

Please enter desired trading amount in ATOM.

Minimum value is 0.01 ATOM`;

const errorText = `🚥 Subscribing to #PAR_1_Binance_Fut_ATOM_USDT_8h robot.

Wrong amount format.
Minimum value is 0.01 ATOM`;

export const SubscribeToSignalDialog: FC<{}> = () => {
    const isValid = (value: string | number) => !isNaN(Number(value));
    return (
        <Dialog>
            <DialogStep content={<Text>{enterAmountText}</Text>} validation={{ isValid, errorText }}>
                <DialogStep
                    content={
                        <>
                            <Text>{`🚥 Succesfully subsribed to #PAR_1_Binance_Fut_ATOM_USDT_8h signals with amount 2 ATOM!

⚠️ Use all signals at your own risk!`}</Text>
                            <SignalsResponse type={ButtonKeys.b1bitfinexbtcusd} setNavigationState={() => {}} />
                        </>
                    }
                ></DialogStep>
            </DialogStep>
        </Dialog>
    );
};
