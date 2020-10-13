import { ButtonKeys, ButtonMapItem } from '../components/NavButtons';

export const makeButton = (button: ButtonMapItem, action?: (args?: any) => void) => {
    return { text: button.label, key: button.key, action };
};

export function capitalize(string: string) {
    return string.charAt(0).toUpperCase() + string.slice(1, string.length);
}

export const isSignalOrRobot = (type: ButtonKeys) => [ButtonKeys.signals, ButtonKeys.robots].includes(type);
