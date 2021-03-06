import { ButtonKeys } from './NavButtons';
import { SignalsResponse } from './SignalsResponse';
import { SettingsResponse } from './SettingsResponse';
import { ReactType } from 'react';
import { SupportResponse } from './SupportResponse';
import { ExchangeKeysResponse } from './ExchangeKeysResponse';
import { SubscribeToSignalDialog } from './SubscribeToSignalDialog';

export const ResponseMessage: { [key: string]: ReactType } = {
    [ButtonKeys.signals]: SignalsResponse,
    [ButtonKeys.robots]: SignalsResponse,
    [ButtonKeys.settings]: SettingsResponse,
    [ButtonKeys.support]: SupportResponse,
    [ButtonKeys.searchSignals]: SignalsResponse,
    [ButtonKeys.bitfinex]: SignalsResponse,
    [ButtonKeys.btcusd]: SignalsResponse,
    [ButtonKeys.b1bitfinexbtcusd]: SignalsResponse,
    [ButtonKeys.exchangeAPIKeys]: ExchangeKeysResponse,
    [ButtonKeys.subscribeToSignals]: SubscribeToSignalDialog,
};
