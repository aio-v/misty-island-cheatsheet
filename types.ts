// Types
export type Item = {
    name: string;
    img: string;
};

export type Craftable = Item & {
    ingredients: [Item, number][];
    unlock: string;
}