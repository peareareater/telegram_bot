import { ButtonRow } from '../constants/types';
import { makeButton } from '../helpers';

export type ButtonMapItem = { label: string; key: string };

export enum ButtonKeys {
    signals = 'signals',
    robots = 'robots',
    settings = 'settings',
    support = 'support',
    donation = 'donation',
    back = 'back',
    mainMenu = 'mainMenu',
    searchSignals = 'searchSignals',
    bitfinex = 'bitfinex',
    btcusd = 'btcusd',
    b1bitfinexbtcusd = 'b1bitfinexbtcusd',
    exchangeAPIKeys = 'exchangeAPIKeys',
    subscribeToSignals = 'subscribeToSignals',
}

export const ButtonContent: { [key: string]: ButtonMapItem } = {
    signals: { label: '🚥 Signals', key: 'signals' },
    robots: { label: '🤖 Robots', key: 'robots' },
    settings: { label: '⚙ Settings', key: 'settings' },
    support: { label: '❓ Support', key: 'support' },
    donation: { label: '💰 Donation', key: 'donation' },
    back: { label: '⬅ Back', key: 'back' },
    mainMenu: { label: '🏠 Main Menu', key: 'mainMenu' },
};

export const Buttons = {
    signals: makeButton(ButtonContent.signals),
    robots: makeButton(ButtonContent.robots),
    settings: makeButton(ButtonContent.settings),
    support: makeButton(ButtonContent.support),
    donation: makeButton(ButtonContent.donation),
    back: makeButton(ButtonContent.back),
    mainMenu: makeButton(ButtonContent.mainMenu),
};

const mainMenuButtons: ButtonRow[] = [
    [Buttons.signals, Buttons.robots],
    [Buttons.settings, Buttons.support],
    [Buttons.donation],
];

const navigationButtons: ButtonRow[] = [[Buttons.back, Buttons.mainMenu]];

const mainMenuGroup = [ButtonKeys.donation, ButtonKeys.back, ButtonKeys.mainMenu];

export const getButtonsSets = (key: string) => {
    if (mainMenuGroup.includes(key as ButtonKeys)) {
        return mainMenuButtons;
    }
    return navigationButtons;
};
