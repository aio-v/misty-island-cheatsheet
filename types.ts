// Types
export type Item = {
    name: string;
    img: string;
    notes: string;
};

export type Craftable = Item & {
    ingredients: [Item, number][];
    unlock: string;
}
