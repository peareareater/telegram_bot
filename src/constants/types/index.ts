export type MenuButton = {
    text: string;
    key: string;
    action?: (args?: any) => void;
};

export type ButtonRow = MenuButton[];
