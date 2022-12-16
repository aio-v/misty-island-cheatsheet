import {Item, Craftable } from './types'

// ------------------------------------------------
// ---------------------ITEMS----------------------
// ------------------------------------------------
let items: { [key: string]: Item } = {};
items.leaf = {name: "leaf", img: "misty_island_assets/materials/leaf.png"};
items.log = {name: "log", img: "misty_island_assets/materials/log.png"};
items.stone = {name: "stone", img: "misty_island_assets/materials/stone.png"};
items.iron = {name: "iron", img: "misty_island_assets/materials/iron.png"};
items.leather = {name: "leather", img: "misty_island_assets/materials/leather.png"};
items.gold = {name: "gold", img: ""};
items.water = {name: "water", img: ""};


// ------------------------------------------------
// -------------------MANUFACTURE------------------
// ------------------------------------------------
let manufactures: { [key: string]: Craftable } = {};
manufactures.rope = {
        name: "rope", 
        img: "misty_island_assets/manufacture/rope.png", 
        ingredients: [[items.leaf, 3]],
        unlock: "-"
};
manufactures.board = {
    name: "board", 
    img: "misty_island_assets/manufacture/board.png", 
    ingredients: [[items.log, 3]],
    unlock: "-"
};
manufactures.charcoal = {
    name: "charcoal",
    img: "misty_island_assets/manufacture/charcoal.png", 
    ingredients: [[items.log, 1]],
    unlock: "-"
}
manufactures.brick = {
    name: "brick",
    img: "misty_island_assets/manufacture/brick.png", 
    ingredients: [[items.stone, 3]],
    unlock: "Survival Worktable"
}
manufactures.iron_plate = {
    name: "iron plate",
    img: "misty_island_assets/manufacture/iron-plate.png", 
    ingredients: [[items.iron, 3]],
    unlock: "Survival Worktable"
}
manufactures.iron_rod = {
    name: "iron rod",
    img: "misty_island_assets/manufacture/iron-rod.png", 
    ingredients: [[items.iron, 2]],
    unlock: "Survival Worktable"
}
manufactures.cement_powder = {
    name: "cement powder",
    img: "misty_island_assets/manufacture/cement-powder.png", 
    ingredients: [[items.stone, 3], [items.water, 1]],
    unlock: "Survival Worktable"
}


// ------------------------------------------------
// ---------------------TOOLS----------------------
// ------------------------------------------------
let tools: { [key: string]: Craftable } = {};
tools.stone_axe = {
    name: "stone axe",
    img: "misty_island_assets/toolbox/stone-axe.png", 
    ingredients: [[items.stone, 2], [items.log, 1]],
    unlock: "-"
}
tools.stone_pickax = {
    name: "stone pickax",
    img: "misty_island_assets/toolbox/stone-pickax.png", 
    ingredients: [[items.stone, 2], [items.log, 1]],
    unlock: "-"
}
tools.steel_axe = {
    name: "steel axe",
    img: "misty_island_assets/toolbox/steel-axe.png", 
    ingredients: [[manufactures.iron_plate, 1], [manufactures.iron_rod, 1], [manufactures.charcoal, 1]],
    unlock: "Survival Worktable"
}
tools.steel_pickax = {
    name: "steel pickax",
    img: "misty_island_assets/toolbox/steel-pickax.png", 
    ingredients: [[manufactures.iron_plate, 1], [manufactures.iron_rod, 1], [manufactures.charcoal, 1]],
    unlock: "Survival Worktable"
}
tools.leaves_bag = {
    name: "leaves bag",
    img: "misty_island_assets/toolbox/leaves-bag.png", 
    ingredients: [[items.leaf, 6]],
    unlock: "Survival Worktable"
}
tools.empty_bucket = {
    name: "leaves bag",
    img: "misty_island_assets/toolbox/empty-bucket.png", 
    ingredients: [[manufactures.iron_plate, 1]],
    unlock: "Survival Worktable"
}


// ------------------------------------------------
// ------------------STRUCTURES--------------------
// ------------------------------------------------
let structures: { [key: string]: Craftable } = {};
structures.survival_worktable = {
    name: "survival worktable",
    img: "misty_island_assets/structures/survival-worktable.png", 
    ingredients: [[manufactures.board, 2], [items.log, 3], [manufactures.rope, 1]],
    unlock: "-"
}
structures.industrial_worktable = {
    name: "industrial worktable",
    img: "misty_island_assets/structures/industrial-worktable.png", 
    ingredients: [[manufactures.board, 3], [manufactures.iron_rod, 5], [items.gold, 5]],
    unlock: "Survival Worktable"
}
structures.campfire = {
    name: "campfire for cooking",
    img: "misty_island_assets/structures/campfire.png", 
    ingredients: [[items.log, 3], [items.stone, 3], [manufactures.iron_plate, 1]],
    unlock: "Survival Worktable"
}
structures.wooden_box = {
    name: "wooden box",
    img: "misty_island_assets/structures/wooden-box.png", 
    ingredients: [[manufactures.board, 2]],
    unlock: "Survival Worktable"
}
structures.rainwater_filter = {
    name: "wooden box",
    img: "misty_island_assets/structures/rainwater-filter.png", 
    ingredients: [[items.leaf, 10], [manufactures.board, 2]],
    unlock: "Survival Worktable"
}


// ------------------------------------------------
// --------------------ARMOR-----------------------
// ------------------------------------------------
let armor: { [key: string]: Craftable } = {};
armor.rope_sandals = {
    name: "rope sandals",
    img: "misty_island_assets/armor/rope-sandals.png", 
    ingredients: [[items.leather, 2]],
    unlock: "-"
}
armor.sloppy_leather_shoes = {
    name: "sloppy leather shoes",
    img: "misty_island_assets/armor/sloppy-leather-shoes.png", 
    ingredients: [[items.leather, 6], [manufactures.rope, 2]],
    unlock: "Survival Worktable"
}

export { items, manufactures, tools, structures, armor };
