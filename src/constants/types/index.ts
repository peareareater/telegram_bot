export type MenuButton = {
    text: string;
    key: string;
    action?: (args?: any) => void;
};

export type ButtonDialogItem = {
    label: string;
    id: string;
};
export type ButtonRow = MenuButton[];
