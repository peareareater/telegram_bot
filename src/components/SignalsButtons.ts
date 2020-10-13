import { ButtonContent, ButtonKeys, ButtonMapItem } from './NavButtons';

export const searchSignalsTitle = `🔎 Searching Signal Robots

Select available exchange`;

export const bitfinexTitle = `🔎 Searching Signal Robots

Select available  Bitfinex cryptocurrency pair`;

export const btcusdTitle = `🔎 Searching Signal Robots

Select available Bitfinex BTC/USD robot`;

export const b1bitfinexbtcusdTitle = `🔎🤖
Robot: #BR_1_Bitfinex_BTC_USD_8h 
Description: There are two signals for entry position. One signal is for long, the other signal is for short. These signals are connected, so when one signal is executed, the other is need to be cancelled.
For exit you have one signal at a certain price, so just place the stop order at the signal price.
Maximum signals: 3 per day

Performance: 2612.62$ / +16.27$

Amount: 0.1 BTC

Info updated: 2020-10-13 17:54:25 UTC`;

export const MESSAGE_TAIL = ' Trading Mode';

export const generateButtons = (typeName: string) => {
    return [
        [{ label: `🚥 My ${typeName}`, key: `my${typeName}` }],
        [{ label: `🔍 Search ${typeName}`, key: `search${typeName}` }],
        [{ label: `🏆 Top performing ${typeName}`, key: `topPerforming${typeName}` }],
        [{ label: '📈 My Total Performance', key: 'myTotalPerfomance' }],
        [ButtonContent.back],
    ];
};

export const searchSignalsButtons = [
    [
        { label: 'Binance Futures', key: 'binanceFutures' },
        { label: 'Bitfinex', key: 'bitfinex' },
        { label: 'Kraken', key: 'kraken' },
    ],
    [ButtonContent.back],
];
export const bitfinexButtons = [
    [
        { label: 'BCH/USD', key: 'bchusd' },
        { label: 'BTC/USD', key: 'btcusd' },
        { label: 'DASH/USD', key: 'dashusd' },
    ],
    [ButtonContent.back],
];

export const btcusdButtons = [
    [
        { label: 'BR-1 Bitfinex BTC/USD 8h', key: 'b1bitfinexbtcusd' },
        { label: 'BR-2 Bitfinex BTC/USD 8h', key: 'b2bitfinexbtcusd' },
    ],
    [ButtonContent.back],
];

export const b1bitfinexbtcusdButtons = [
    [{ label: 'ℹ Robot Info', key: 'robotInfo' }],
    [{ label: '📉 Public Statistics', key: 'publicStatistics' }],
    [{ label: '🗃 Latest positions', key: 'latestPositions' }],
    [{ label: '🚥 Subscribe to Signals', key: 'subscribeToSignals' }],
    [ButtonContent.back],
];

export const messageProp: { [key: string]: string } = {
    [ButtonKeys.signals]: 'Manual',
    [ButtonKeys.robots]: 'Manual',
};

export const buttonsMap: { [key: string]: ButtonMapItem[][] } = {
    searchSignals: searchSignalsButtons,
    bitfinex: bitfinexButtons,
    btcusd: btcusdButtons,
    b1bitfinexbtcusd: b1bitfinexbtcusdButtons,
};
export const titleMap: { [key: string]: string } = {
    searchSignals: searchSignalsTitle,
    bitfinex: bitfinexTitle,
    btcusd: btcusdTitle,
    b1bitfinexbtcusd: b1bitfinexbtcusdTitle,
};
