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
    main_menu = 'main_menu',
}

export const ButtonContent: { [key: string]: ButtonMapItem } = {
    signals: { label: '🚥 Signals', key: 'signals' },
    robots: { label: '🤖 Robots', key: 'robots' },
    settings: { label: '⚙ Settings', key: 'settings' },
    support: { label: '❓ Support', key: 'support' },
    donation: { label: '💰 Donation', key: 'donation' },
    back: { label: '⬅ Back', key: 'back' },
    main_menu: { label: '🏠 Main Menu', key: 'main_menu' },
};

export const Buttons = {
    signals: makeButton(ButtonContent.signals),
    robots: makeButton(ButtonContent.robots),
    settings: makeButton(ButtonContent.settings),
    support: makeButton(ButtonContent.support),
    donation: makeButton(ButtonContent.donation),
    back: makeButton(ButtonContent.back),
    main_menu: makeButton(ButtonContent.main_menu),
};

const mainMenuButtons: ButtonRow[] = [
    [Buttons.signals, Buttons.robots],
    [Buttons.settings, Buttons.support],
    [Buttons.donation],
];

const navigationButtons: ButtonRow[] = [[Buttons.back, Buttons.main_menu]];

export const ButtonsSets: { [key: string]: ButtonRow[] } = {
    signals: navigationButtons,
    robots: navigationButtons,
    settings: navigationButtons,
    support: navigationButtons,
    donation: mainMenuButtons,
    back: mainMenuButtons,
    main_menu: mainMenuButtons,
};
