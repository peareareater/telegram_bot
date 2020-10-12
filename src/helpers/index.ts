import { ButtonMapItem } from '../components/NavButtons';

export const makeButton = (button: ButtonMapItem, action?: (args?: any) => void) => {
    return { text: button.label, key: button.key, action };
};
