// Types
export type Item = {
    id: string;
    name: string;
    img: string;
    notes: string;
};

export type Craftable = Item & {
    ingredients: [Item, number][];
    unlock: string;
}
