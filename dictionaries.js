let items = {};
let weapons = {};
let armor = {};
let structures = {};
let tools = {};
let manufactures = {};
let defend = {};
let potions = {};
let mounts = {};
// ------------------------------------------------
// ---------------------ITEMS----------------------
// ------------------------------------------------
items.leaf = { id: "leaf", name: "leaf", img: "misty_island_assets/materials/leaf.png", notes: "" };
items.log = { id: "log", name: "log", img: "misty_island_assets/materials/log.png", notes: "" };
items.stone = { id: "stone", name: "stone", img: "misty_island_assets/materials/stone.png", notes: "" };
items.iron = { id: "iron", name: "iron", img: "misty_island_assets/materials/iron.png", notes: "" };
items.leather = { id: "leather", name: "leather", img: "misty_island_assets/materials/leather.png", notes: "" };
items.gold = { id: "gold", name: "gold", img: "misty_island_assets/materials/gold.png", notes: "" };
items.feather = { id: "feather", name: "feather", img: "misty_island_assets/materials/feather.png", notes: "" };
items.molar = { id: "molar", name: "molar", img: "misty_island_assets/materials/jungle-pig-molar.png", notes: "Obtained from jungle pigs." };
items.poison = { id: "poison", name: "piranha deadly poison", img: "misty_island_assets/materials/piranha-deadly-poison.png", notes: "Obtained from piranhas under the waterfall." };
items.lizardman_skin = { id: "lizardman_skin", name: "lizardman skin", img: "misty_island_assets/materials/lizardman-skin.png", notes: "" };
items.seaweed = { id: "seaweed", name: "seaweed", img: "misty_island_assets/materials/leaf.png", notes: "" };
items.smilodon_leather = { id: "smilodon_leather", name: "smilodon leather", img: "misty_island_assets/materials/smilodon-leather.png", notes: "" };
items.smilodon_canine = { id: "smilodon_canine", name: "smilodon canine", img: "misty_island_assets/materials/smilodon-canine.png", notes: "" };
items.neophron_feather = { id: "neophron_feather", name: "neophron feather", img: "misty_island_assets/materials/neophron-feather.png", notes: "" };
items.golem_rubble = { id: "golem_rubble", name: "golem rubble", img: "misty_island_assets/materials/golem-rubble.png", notes: "" };
items.fainted_jungle_pig = { id: "fainted_jungle_pig", name: "fainted jungle pig", img: "misty_island_assets/materials/fainted-jungle-pig.png", notes: "Obtained from jungle pigs (uncommon)." };
items.fainted_smilodon = { id: "fainted_smilodon", name: "fainted smilodon", img: "misty_island_assets/materials/fainted-smilodon.png", notes: "" };
items.deep_sea_stone = { id: "deep_sea_stone", name: "deep sea stone", img: "misty_island_assets/materials/deep-sea-stone.png", notes: "" };
items.thunder_stone = { id: "thunder_stone", name: "thunder stone", img: "misty_island_assets/materials/thunder-stone.png", notes: "" };
items.lava_stone_powder = { id: "lava_stone_powder", name: "lava stone powder", img: "misty_island_assets/materials/lava-stone-powder.png", notes: "" };
items.lava_stone = { id: "lava_stone", name: "lava stone", img: "misty_island_assets/materials/lava-stone.png", notes: "" };
items.water = { id: "water", name: "water", img: "misty_island_assets/materials/water.png", notes: "" };
// ------------------------------------------------
// -------------------EDIBLES----------------------
// ------------------------------------------------
items.bird_egg = { id: "bird_egg", name: "bird egg", img: "misty_island_assets/edibles/bird-egg.png", notes: "" };
items.caterpillar = { id: "caterpillar", name: "caterpillar", img: "misty_island_assets/edibles/caterpillar", notes: "" };
items.banana = { id: "banana", name: "banana", img: "misty_island_assets/edibles/banana.png", notes: "" };
items.herb = { id: "herb", name: "herb", img: "misty_island_assets/edibles/herb.png", notes: "" };
items.petal = { id: "petal", name: "petal", img: "misty_island_assets/edibles/petal.png", notes: "" };
items.raw_meat = { id: "raw_meat", name: "raw meat", img: "misty_island_assets/edibles/raw-meat.png", notes: "" };
items.wild_mushroom = { id: "wild_mushroom", name: "wild mushroom", img: "misty_island_assets/edibles/wild-mushroom.png", notes: "" };
items.raw_fish = { id: "raw_fish", name: "raw fish", img: "misty_island_assets/edibles/raw-fish.png", notes: "" };
items.seaweed = { id: "seaweed", name: "seaweed", img: "misty_island_assets/edibles/seaweed.png", notes: "" };
// ------------------------------------------------
// -------------------MANUFACTURE------------------
// ------------------------------------------------
manufactures.rope = {
    id: "rope",
    name: "rope",
    img: "misty_island_assets/manufacture/rope.png",
    ingredients: [[items.leaf, 3]],
    unlock: "-",
    notes: ""
};
manufactures.board = {
    id: "board",
    name: "board",
    img: "misty_island_assets/manufacture/board.png",
    ingredients: [[items.log, 3]],
    unlock: "-",
    notes: ""
};
manufactures.charcoal = {
    id: "charcoal",
    name: "charcoal",
    img: "misty_island_assets/manufacture/charcoal.png",
    ingredients: [[items.log, 1]],
    unlock: "-",
    notes: ""
};
manufactures.brick = {
    id: "brick",
    name: "brick",
    img: "misty_island_assets/manufacture/brick.png",
    ingredients: [[items.stone, 3]],
    unlock: "Survival Worktable",
    notes: ""
};
manufactures.iron_plate = {
    id: "iron_plate",
    name: "iron plate",
    img: "misty_island_assets/manufacture/iron-plate.png",
    ingredients: [[items.iron, 3]],
    unlock: "Survival Worktable",
    notes: ""
};
manufactures.iron_rod = {
    id: "iron_rod",
    name: "iron rod",
    img: "misty_island_assets/manufacture/iron-rod.png",
    ingredients: [[items.iron, 2]],
    unlock: "Survival Worktable",
    notes: ""
};
manufactures.cement_powder = {
    id: "cement_powder",
    name: "cement powder",
    img: "misty_island_assets/manufacture/cement-powder.png",
    ingredients: [[items.stone, 3], [items.water, 1]],
    unlock: "Survival Worktable",
    notes: ""
};
manufactures.gunpowder = {
    id: "gunpowder",
    name: "gunpowder",
    img: "misty_island_assets/manufacture/gunpowder.png",
    ingredients: [[manufactures.charcoal, 1], [items.lava_stone_powder, 1]],
    unlock: "Alchemy Pot",
    notes: ""
};
manufactures.processed_wood = {
    id: "processed_wood",
    name: "processed glued laminated wood",
    img: "misty_island_assets/manufacture/processed-wood.png",
    ingredients: [[manufactures.board, 2], [items.log, 2]],
    unlock: "Industrial Worktable",
    notes: ""
};
manufactures.screw = {
    id: "screw",
    name: "screw",
    img: "misty_island_assets/manufacture/screw.png",
    ingredients: [[items.iron, 2]],
    unlock: "Industrial Worktable",
    notes: ""
};
manufactures.cog = {
    id: "cog",
    name: "cog",
    img: "misty_island_assets/manufacture/cog.png",
    ingredients: [[items.iron, 2]],
    unlock: "Industrial Worktable",
    notes: ""
};
manufactures.lever = {
    id: "lever",
    name: "lever",
    img: "misty_island_assets/manufacture/lever.png",
    ingredients: [[manufactures.iron_plate, 1], [manufactures.iron_rod, 1]],
    unlock: "Industrial Worktable",
    notes: ""
};
manufactures.gold_bar = {
    id: "gold_bar",
    name: "gold bar",
    img: "misty_island_assets/manufacture/gold-bar.png",
    ingredients: [[items.gold, 3]],
    unlock: "Industrial Worktable",
    notes: ""
};
manufactures.red_flower_powder = {
    id: "red_flower_powder",
    name: "red flower powder",
    img: "misty_island_assets/manufacture/red-flower-powder.png",
    ingredients: [[items.petal, 1]],
    unlock: "Alchemy Pot",
    notes: ""
};
manufactures.banana_powder = {
    id: "banana_powder",
    name: "banana powder",
    img: "misty_island_assets/manufacture/banana-powder.png",
    ingredients: [[items.banana, 1]],
    unlock: "Alchemy Pot",
    notes: ""
};
manufactures.herbal_powder = {
    id: "herbal_powder",
    name: "herbal powder",
    img: "misty_island_assets/manufacture/herbal-powder.png",
    ingredients: [[items.herb, 1]],
    unlock: "Alchemy Pot",
    notes: ""
};
manufactures.water_jewel = {
    id: "water_jewel",
    name: "jewel of water",
    img: "misty_island_assets/manufacture/water-jewel.png",
    ingredients: [[items.deep_sea_stone, 1]],
    unlock: "Alchemy Pot",
    notes: ""
};
manufactures.lightning_jewel = {
    id: "lightning_jewel",
    name: "jewel of lightning",
    img: "misty_island_assets/manufacture/lightning-jewel.png",
    ingredients: [[items.thunder_stone, 1]],
    unlock: "Alchemy Pot",
    notes: ""
};
manufactures.lava_solution = {
    id: "lava_solution",
    name: "lava solution",
    img: "misty_island_assets/manufacture/lava-solution.png",
    ingredients: [[items.lava_stone_powder, 2]],
    unlock: "Alchemy Pot",
    notes: ""
};
manufactures.regeneration_solution = {
    id: "regeneration_solution",
    name: "regeneration solution",
    img: "misty_island_assets/manufacture/regeneration-solution.png",
    ingredients: [[manufactures.red_flower_powder, 2]],
    unlock: "Alchemy Pot",
    notes: ""
};
manufactures.propeller = {
    id: "propeller",
    name: "propeller",
    img: "misty_island_assets/manufacture/propeller.png",
    ingredients: [[manufactures.iron_plate, 2], [manufactures.cog, 1]],
    unlock: "Engineering Worktable",
    notes: ""
};
manufactures.engine = {
    id: "engine",
    name: "engine",
    img: "misty_island_assets/manufacture/engine.png",
    ingredients: [[manufactures.iron_plate, 3], [items.lava_stone, 2], [manufactures.screw, 1], [manufactures.cog, 1]],
    unlock: "Engineering Worktable",
    notes: ""
};
manufactures.lava_stone_powder = {
    id: "lava_stone_powder",
    name: "lava stone powder",
    img: "misty_island_assets/materials/lava-stone-powder.png",
    ingredients: [[items.lava_stone, 1]],
    unlock: "Engineering Worktable",
    notes: ""
};
manufactures.lava_stone = {
    id: "lava_stone",
    name: "lava stone",
    img: "misty_island_assets/materials/lava-stone.png",
    ingredients: [[items.lava_stone_powder, 5]],
    unlock: "Engineering Worktable",
    notes: ""
};
manufactures.refined_lava_stone_crystal = {
    id: "refined_lava_stone_crystal",
    name: "refined lava stone crystal",
    img: "",
    ingredients: [[items.lava_stone, 3]],
    unlock: "Engineering Worktable",
    notes: ""
};
// ------------------------------------------------
// ---------------------TOOLS----------------------
// ------------------------------------------------
tools.stone_axe = {
    id: "stone_axe",
    name: "stone axe",
    img: "misty_island_assets/toolbox/stone-axe.png",
    ingredients: [[items.stone, 2], [items.log, 1]],
    unlock: "-",
    notes: ""
};
tools.stone_pickax = {
    id: "stone_pickax",
    name: "stone pickax",
    img: "misty_island_assets/toolbox/stone-pickax.png",
    ingredients: [[items.stone, 2], [items.log, 1]],
    unlock: "-",
    notes: ""
};
tools.steel_axe = {
    id: "steel_axe",
    name: "steel axe",
    img: "misty_island_assets/toolbox/steel-axe.png",
    ingredients: [[manufactures.iron_plate, 1], [manufactures.iron_rod, 1], [manufactures.charcoal, 1]],
    unlock: "Survival Worktable",
    notes: ""
};
tools.steel_pickax = {
    id: "steel_pickax",
    name: "steel pickax",
    img: "misty_island_assets/toolbox/steel-pickax.png",
    ingredients: [[manufactures.iron_plate, 1], [manufactures.iron_rod, 1], [manufactures.charcoal, 1]],
    unlock: "Survival Worktable",
    notes: ""
};
tools.gold_axe = {
    id: "gold_axe",
    name: "gold axe",
    img: "misty_island_assets/toolbox/gold-axe.png",
    ingredients: [[items.gold, 2], [manufactures.iron_rod, 1]],
    unlock: "Industrial Worktable",
    notes: ""
};
tools.gold_pickax = {
    id: "gold_pickax",
    name: "gold pickax",
    img: "misty_island_assets/toolbox/gold-pickax.png",
    ingredients: [[items.gold, 2], [manufactures.iron_rod, 1]],
    unlock: "Industrial Worktable",
    notes: ""
};
tools.matches = {
    id: "matches",
    name: "matches",
    img: "misty_island_assets/toolbox/matches.png",
    ingredients: [[items.log, 1]],
    unlock: "-",
    notes: ""
};
tools.torch = {
    id: "torch",
    name: "torch",
    img: "misty_island_assets/toolbox/torch.png",
    ingredients: [[items.log, 1]],
    unlock: "Survival Worktable",
    notes: ""
};
tools.leaves_bag = {
    id: "leaves_bag",
    name: "leaves bag",
    img: "misty_island_assets/toolbox/leaves-bag.png",
    ingredients: [[items.leaf, 6]],
    unlock: "Survival Worktable",
    notes: "+4 inventory slots"
};
tools.leather_bag = {
    id: "leather_bag",
    name: "leather bag",
    img: "misty_island_assets/toolbox/leather-bag.png",
    ingredients: [[items.leather, 6]],
    unlock: "Industrial Worktable",
    notes: "+8 inventory slots"
};
tools.empty_bucket = {
    id: "empty_bucket",
    name: "empty bucket",
    img: "misty_island_assets/toolbox/empty-bucket.png",
    ingredients: [[manufactures.iron_plate, 1]],
    unlock: "Survival Worktable",
    notes: ""
};
manufactures.water_bucket = {
    id: "water_bucket",
    name: "water bucket",
    img: "misty_island_assets/manufacture/water-bucket.png",
    ingredients: [[tools.empty_bucket, 1]],
    unlock: "Industrial Worktable",
    notes: "Use empty bucket at waterfall"
};
manufactures.water = {
    id: "water",
    name: "water",
    img: "misty_island_assets/materials/water.png",
    ingredients: [[manufactures.water_bucket, 1]],
    unlock: "Industrial Worktable",
    notes: ""
};
tools.whetstone = {
    id: "whetstone",
    name: "whetstone",
    img: "misty_island_assets/toolbox/whetstone.png",
    ingredients: [[items.stone, 3]],
    unlock: "Alchemy Pot",
    notes: ""
};
tools.fireworks = {
    id: "fireworks",
    name: "fireworks",
    img: "misty_island_assets/toolbox/fireworks.png",
    ingredients: [[manufactures.gunpowder, 1], [manufactures.red_flower_powder, 1]],
    unlock: "Alchemy Pot",
    notes: "Attack +30. Defense +10%. Stun duration 540s."
};
tools.demolition_hammer = {
    id: "demolition_hammer",
    name: "demolition hammer",
    img: "misty_island_assets/toolbox/demolition-hammer.png",
    ingredients: [[items.iron, 1], [items.log, 1], [manufactures.rope, 1]],
    unlock: "Survival Worktable",
    notes: ""
};
tools.diary = {
    id: "expedition_diary",
    name: "expedition diary",
    img: "misty_island_assets/toolbox/diary.png",
    ingredients: [[items.leather, 1], [items.log, 2], [manufactures.charcoal, 1]],
    unlock: "Survival Worktable",
    notes: ""
};
tools.cookbook = {
    id: "expedition_cookbook",
    name: "expedition cookbook",
    img: "misty_island_assets/toolbox/cookbook.png",
    ingredients: [[items.leather, 1], [items.log, 2], [manufactures.charcoal, 1]],
    unlock: "Survival Worktable",
    notes: ""
};
tools.hand_drill = {
    id: "hand_drill",
    name: "hand drill",
    img: "",
    ingredients: [[items.iron, 3], [manufactures.cog, 1], [items.lava_stone, 1]],
    unlock: "Engineering Worktable",
    notes: ""
};
tools.chainsaw = {
    id: "chainsaw",
    name: "chainsaw",
    img: "",
    ingredients: [[manufactures.iron_plate, 2], [manufactures.screw, 1], [items.lava_stone, 1]],
    unlock: "Engineering Worktable",
    notes: ""
};
tools.leather_saddle = {
    id: "leather_saddle",
    name: "leather saddle",
    img: "misty_island_assets/toolbox/leather-saddle.png",
    ingredients: [[items.fainted_jungle_pig, 1], [manufactures.rope, 1], [items.leather, 2]],
    unlock: "Survival Worktable, need fainted jungle pig in inventory",
    notes: "Gives jungle pig mount on use"
};
tools.magic_bag = {
    id: "magic_bag",
    name: "magic bag",
    img: "",
    ingredients: [[items.leather, 4], [items.lizardman_skin, 2], [items.gold, 1]],
    unlock: "Engineering Worktable",
    notes: ""
};
// ------------------------------------------------
// ------------------STRUCTURES--------------------
// ------------------------------------------------
structures.survival_worktable = {
    id: "survival_worktable",
    name: "survival worktablle",
    img: "misty_island_assets/structures/survival-worktable.png",
    ingredients: [[manufactures.board, 2], [items.log, 3], [manufactures.rope, 1]],
    unlock: "-",
    notes: ""
};
structures.industrial_worktable = {
    id: "industrial_worktable",
    name: "industrial worktable",
    img: "misty_island_assets/structures/industrial-worktable.png",
    ingredients: [[manufactures.brick, 3], [manufactures.iron_rod, 5], [items.gold, 5]],
    unlock: "Survival Worktable",
    notes: ""
};
structures.engineering_worktable = {
    id: "engineering_worktable",
    name: "engineering worktable",
    img: "misty_island_assets/structures/engineering-worktable.png",
    ingredients: [[manufactures.iron_plate, 5], [manufactures.lever, 2], [manufactures.screw, 2], [items.lava_stone, 5]],
    unlock: "Industrial Worktable",
    notes: ""
};
structures.bonfire = {
    id: "bonfire",
    name: "bonfire",
    img: "misty_island_assets/structures/bonfire.png",
    ingredients: [[items.log, 3]],
    unlock: "-",
    notes: ""
};
structures.campfire = {
    id: "campfire",
    name: "campfire for cooking",
    img: "misty_island_assets/structures/campfire.png",
    ingredients: [[items.log, 3], [items.stone, 3], [manufactures.iron_plate, 1]],
    unlock: "Survival Worktable",
    notes: ""
};
structures.wooden_box = {
    id: "wooden_box",
    name: "wooden box",
    img: "misty_island_assets/structures/wooden-box.png",
    ingredients: [[manufactures.board, 2]],
    unlock: "Survival Worktable",
    notes: ""
};
structures.rainwater_filter = {
    id: "rainwater_filter",
    name: "rainwater filter",
    img: "misty_island_assets/structures/rainwater-filter.png",
    ingredients: [[items.leaf, 10], [manufactures.board, 2]],
    unlock: "Survival Worktable",
    notes: "Gives 30 water after rainy days"
};
structures.palm_tent = {
    id: "palm_tent",
    name: "palm tent",
    img: "misty_island_assets/structures/palm-tent.png",
    ingredients: [[items.leaf, 6], [manufactures.board, 1]],
    unlock: "Survival Worktable",
    notes: ""
};
structures.alchemy_pot = {
    id: "alchemy_pot",
    name: "alchemy pot",
    img: "misty_island_assets/structures/alchemy-pot.png",
    ingredients: [[manufactures.brick, 2], [items.iron, 2], [manufactures.water_bucket, 1]],
    unlock: "Industrial Worktable",
    notes: ""
};
structures.countertop = {
    id: "countertop",
    name: "countertop",
    img: "misty_island_assets/structures/countertop.png",
    ingredients: [[manufactures.board, 1], [manufactures.brick, 2], [manufactures.iron_plate, 2], [manufactures.charcoal, 1]],
    unlock: "Industrial Worktable",
    notes: "3 cooking slots"
};
structures.streetlight = {
    id: "streetlight",
    name: "streetlight",
    img: "misty_island_assets/structures/streetlight.png",
    ingredients: [[manufactures.iron_rod, 1], [manufactures.charcoal, 1]],
    unlock: "Industrial Worktable",
    notes: ""
};
structures.sturdy_box = {
    id: "sturdy_box",
    name: "sturdy box",
    img: "misty_island_assets/structures/sturdy-box.png",
    ingredients: [[manufactures.iron_plate, 2]],
    unlock: "Industrial Worktable",
    notes: ""
};
structures.feather_tent = {
    id: "feather_tent",
    name: "feather tent",
    img: "misty_island_assets/structures/feather-tent.png",
    ingredients: [[items.feather, 4], [items.leather, 2], [manufactures.board, 1]],
    unlock: "Industrial Worktable",
    notes: ""
};
structures.well = {
    id: "well",
    name: "well",
    img: "misty_island_assets/structures/well.png",
    ingredients: [[manufactures.brick, 3], [manufactures.processed_wood, 1]],
    unlock: "Industrial Worktable",
    notes: ""
};
structures.monster_sound_speaker = {
    id: "monster_sound_speaker",
    name: "monster sound speaker",
    img: "misty_island_assets/structures/monster-sound-speaker.png",
    ingredients: [[manufactures.board, 2], [manufactures.iron_rod, 1], [items.fainted_smilodon, 1]],
    unlock: "Industrial Worktable",
    notes: ""
};
structures.molar_trap = {
    id: "molar_trap",
    name: "molar trap",
    img: "misty_island_assets/structures/molar-trap.png",
    ingredients: [[items.molar, 2], [manufactures.iron_plate, 1]],
    unlock: "Industrial Worktable",
    notes: ""
};
structures.sticky_platform = {
    id: "sticky_platform",
    name: "sticky platform",
    img: "misty_island_assets/structures/sticky-platform.png",
    ingredients: [[items.poison, 5], [manufactures.cement_powder, 1]],
    unlock: "Alchemy Pot",
    notes: ""
};
// ------------------------------------------------
// --------------------ARMOR-----------------------
// ------------------------------------------------
armor.leaf_dress = {
    id: "leaf_dress",
    name: "leaf dress",
    img: "misty_island_assets/armor/leaf-dress.png",
    ingredients: [[items.leaf, 8]],
    unlock: "-",
    notes: "Defense +3%."
};
armor.leather_outfit = {
    id: "leather_outfit",
    name: "leather outfit",
    img: "misty_island_assets/armor/leather-outfit.png",
    ingredients: [[items.leather, 5], [manufactures.rope, 2]],
    unlock: "Survival Worktable",
    notes: "Defense +5%."
};
armor.raincoat = {
    id: "raincoat",
    name: "raincoat",
    img: "misty_island_assets/armor/raincoat.png",
    ingredients: [[items.leather, 4], [items.seaweed, 4]],
    unlock: "Survival Worktable",
    notes: "Defense +5%. Ignores Blade Torrent atmospheric effect."
};
armor.sloppy_exploration_clothes = {
    id: "sloppy_exploration_clothes",
    name: "sloppy exploration clothes",
    img: "misty_island_assets/armor/sloppy-exploration-clothes.png",
    ingredients: [[items.leather, 6], [items.feather, 2], [manufactures.rope, 1]],
    unlock: "Survival Worktable",
    notes: "Defense +5%."
};
armor.gladiator_armor = {
    id: "gladiator_armor",
    name: "gladiator armor",
    img: "misty_island_assets/armor/gladiator-armor.png",
    ingredients: [[items.leather, 4], [manufactures.iron_plate, 1]],
    unlock: "Survival Worktable",
    notes: "Defense +6%."
};
armor.plate_armor = {
    id: "plate_armor",
    name: "plate armor",
    img: "misty_island_assets/armor/plate-armor.png",
    ingredients: [[manufactures.iron_plate, 2], [items.leather, 2]],
    unlock: "Industrial Worktable",
    notes: "Defense +9%."
};
armor.golden_armor = {
    id: "golden_armor",
    name: "golden armor",
    img: "misty_island_assets/armor/golden-armor.png",
    ingredients: [[manufactures.gold_bar, 2], [manufactures.iron_plate, 1]],
    unlock: "Industrial Worktable",
    notes: "Defense +10%."
};
armor.leopard_coat = {
    id: "leopard_coat",
    name: "leopard coat",
    img: "misty_island_assets/armor/leopard-coat.png",
    ingredients: [[items.smilodon_leather, 6], [items.neophron_feather, 2]],
    unlock: "Industrial Worktable",
    notes: "Defense +8%. +30 Life Force when equipped."
};
armor.jungle_floral_crown = {
    id: "jungle_floral_crown",
    name: "jungle floral crown",
    img: "misty_island_assets/armor/jungle-floral-crown.png",
    ingredients: [[items.leaf, 4]],
    unlock: "-",
    notes: "Defense +3%."
};
armor.leather_hat = {
    id: "leather_hat",
    name: "leather hat",
    img: "misty_island_assets/armor/leather-hat.png",
    ingredients: [[items.leather, 4]],
    unlock: "-",
    notes: "Defense +3%."
};
armor.sloppy_exploration_hat = {
    id: "sloppy_exploration_hat",
    name: "sloppy exploration hat",
    img: "misty_island_assets/armor/sloppy-exploration-hat.png",
    ingredients: [[items.leather, 4], [manufactures.rope, 1]],
    unlock: "Survival Worktable",
    notes: "Defense +4%."
};
armor.iron_helmet = {
    id: "iron_helmet",
    name: "iron helmet",
    img: "misty_island_assets/armor/iron-helmet.png",
    ingredients: [[manufactures.iron_plate, 1]],
    unlock: "Survival Worktable",
    notes: "Defense +4%."
};
armor.horned_iron_hat = {
    id: "horned_iron_hat",
    name: "horned iron hat",
    img: "misty_island_assets/armor/horned-iron-hat.png",
    ingredients: [[items.iron, 4],],
    unlock: "Survival Worktable",
    notes: "Defense +5%."
};
armor.birds_nest_hat = {
    id: "birds_nest_hat",
    name: "bird's nest hat",
    img: "misty_island_assets/armor/birds-nest-hat.png",
    ingredients: [[items.bird_egg, 1], [items.leaf, 3]],
    unlock: "Survival Worktable",
    notes: "Defense +3%."
};
armor.golden_helmet = {
    id: "golden_helmet",
    name: "golden helmet",
    img: "misty_island_assets/armor/golden-helmet.png",
    ingredients: [[manufactures.gold_bar, 1], [manufactures.iron_plate, 1]],
    unlock: "Industrial Worktable",
    notes: "Defense +7%."
};
armor.steel_helmet = {
    id: "steel_helmet",
    name: "steel helmet",
    img: "misty_island_assets/armor/steel-helmet.png",
    ingredients: [[manufactures.iron_plate, 2], [items.leather, 1]],
    unlock: "Industrial Worktable",
    notes: "Defense +8%."
};
armor.sun_cap = {
    id: "sun cap",
    name: "sun cap",
    img: "misty_island_assets/armor/sun-cap.png",
    ingredients: [[items.leather, 4], [items.leaf, 2], [manufactures.rope, 1]],
    unlock: "Industrial Worktable",
    notes: "Defense +8%."
};
armor.lightning_rod_hat = {
    id: "lightning_rod_hat",
    name: "lightning rod hat",
    img: "misty_island_assets/armor/lightning-rod-hat.png",
    ingredients: [[items.iron, 4], [manufactures.iron_rod, 1], [items.golem_rubble, 1]],
    unlock: "Industrial Worktable",
    notes: "Defense +7%."
};
armor.lizardman_chief_hat = {
    id: "lizardman_chief_hat",
    name: "chief of lizardman hat",
    img: "misty_island_assets/armor/lizardman-chief-hat.png",
    ingredients: [[items.lizardman_skin, 4], [items.neophron_feather, 2]],
    unlock: "Alchemy Pot",
    notes: "Defense +6%."
};
armor.rope_sandals = {
    id: "rope_sandals",
    name: "rope sandals",
    img: "misty_island_assets/armor/rope-sandals.png",
    ingredients: [[items.leather, 2]],
    unlock: "-",
    notes: "Defense +2%. Speed +30. Jump +10."
};
armor.sturdy_straw_shoes = {
    id: "sturdy_straw_shoes",
    name: "sturdy straw shoes",
    img: "misty_island_assets/armor/sturdy-straw-shoes.png",
    ingredients: [[manufactures.rope, 2]],
    unlock: "-",
    notes: "Defense +3%. Speed +20. Jump +5."
};
armor.sloppy_leather_shoes = {
    id: "sloppy_leather_shoes",
    name: "sloppy leather shoes",
    img: "misty_island_assets/armor/sloppy-leather-shoes.png",
    ingredients: [[items.leather, 6], [manufactures.rope, 2]],
    unlock: "Survival Worktable",
    notes: "Defense +4%. Speed +35. Jump +10."
};
armor.iron_plated_shoes = {
    id: "iron_plated_shoes",
    name: "iron plated shoes",
    img: "misty_island_assets/armor/iron-plated-shoes.png",
    ingredients: [[manufactures.iron_plate, 1], [items.leather, 2], [manufactures.rope, 2]],
    unlock: "Survival Worktable",
    notes: "Defense +5%. Speed +30. Jump +10."
};
armor.studded_shoes = {
    id: "studded_shoes",
    name: "studded shoes",
    img: "misty_island_assets/armor/studded-shoes.png",
    ingredients: [[items.iron, 2], [items.leather, 6], [manufactures.rope, 2]],
    unlock: "Survival Worktable",
    notes: "Defense +6%. Speed +20. Jump +10."
};
armor.golden_shoes = {
    id: "golden_shoes",
    name: "golden shoes",
    img: "misty_island_assets/armor/golden-shoes.png",
    ingredients: [[items.lizardman_skin, 2], [manufactures.gold_bar, 2]],
    unlock: "Industrial Worktable",
    notes: "Defense +7%. Speed +40. Jump +15."
};
armor.feather_boots = {
    id: "feather_boots",
    name: "feather boots",
    img: "misty_island_assets/armor/feather-boots.png",
    ingredients: [[items.smilodon_leather, 4], [items.smilodon_canine, 4]],
    unlock: "Industrial Worktable",
    notes: "Defense +5%. Speed +50. Jump +20."
};
// ------------------------------------------------
// -------------------WEAPON-----------------------
// ------------------------------------------------
weapons.wooden_sword = {
    id: "wooden_sword",
    name: "wooden sword",
    img: "misty_island_assets/weapons/wooden-sword.png",
    ingredients: [[items.log, 3]],
    unlock: "-",
    notes: "Attack +35. Damage +100%. Attack Speed 0. Attack Count 1. Mob Count 3."
};
weapons.slingshot = {
    id: "slingshot",
    name: "slingshot",
    img: "misty_island_assets/weapons/slingshot.png",
    ingredients: [[items.log, 3], [manufactures.rope, 1]],
    unlock: "-",
    notes: "Attack +30. Damage +250%. Attack Speed 1. Attack Count 1. Mob Count 1."
};
weapons.stone_hammer = {
    id: "stone_hammer",
    name: "stone hammer",
    img: "misty_island_assets/weapons/stone-hammer.png",
    ingredients: [[items.stone, 2], [items.log, 3]],
    unlock: "-",
    notes: "Attack +50. Damage +100%. Attack Speed 1. Attack Count 2. Mob Count 1."
};
weapons.iron_sword = {
    id: "iron_sword",
    name: "iron sword",
    img: "misty_island_assets/weapons/iron-sword.png",
    ingredients: [[items.iron, 3], [items.log, 1]],
    unlock: "Survival Worktable",
    notes: "Attack +65. Damage +100%. Attack Speed 2. Attack Count 2. Mob Count 3."
};
weapons.forked_spear = {
    id: "forked_spear",
    name: "forked spear",
    img: "misty_island_assets/weapons/forked-spear.png",
    ingredients: [[items.log, 2], [items.iron, 2], [manufactures.rope, 1]],
    unlock: "Survival Worktable",
    notes: "Attack +80. Damage +100%. Attack Speed 2. Attack Count 1. Mob Count 3."
};
weapons.battle_hammer = {
    id: "battle_hammer",
    name: "battle hammer",
    img: "misty_island_assets/weapons/battle-hammer.png",
    ingredients: [[items.iron, 2], [items.log, 2]],
    unlock: "Survival Worktable",
    notes: "Attack +85. Damage +100%. Attack Speed 2. Attack Count 2. Mob Count 1."
};
weapons.overlord_sword = {
    id: "overlord_sword_mark-l1",
    name: "overlord sword mark-l1",
    img: "misty_island_assets/weapons/overlord-sword.png",
    ingredients: [[manufactures.iron_plate, 1], [manufactures.iron_rod, 1], [items.gold, 1]],
    unlock: "Survival Worktable",
    notes: "Attack +55. Damage +100%. Attack Speed -1. Attack Count 2. Mob Count 5."
};
weapons.golden_sword = {
    id: "golden_sword",
    name: "golden sword",
    img: "misty_island_assets/weapons/golden-sword.png",
    ingredients: [[items.gold, 4], [items.iron, 1]],
    unlock: "Industrial Worktable",
    notes: "Attack +45. Damage +100%. Attack Speed -1. Attack Count 2. Mob Count 5."
};
weapons.bow = {
    id: "bow",
    name: "bow",
    img: "misty_island_assets/weapons/bow.png",
    ingredients: [[items.iron, 1], [items.log, 2], [manufactures.rope, 1]],
    unlock: "Survival Worktable",
    notes: "Attack +25. Damage +100%. Attack Speed 0. Attack Count 2. Mob Count 6."
};
weapons.crossbow = {
    id: "crossbow",
    name: "crossbow",
    img: "misty_island_assets/weapons/crossbow.png",
    ingredients: [[manufactures.iron_plate, 1], [manufactures.iron_rod, 1], [items.log, 3], [manufactures.rope, 1]],
    unlock: "Industrial Worktable",
    notes: "Attack +40. Damage +100%. Attack Speed 1. Attack Count 2. Mob Count 7."
};
weapons.deadly_poison_gourd = {
    id: "deadly_poison_gourd",
    name: "deadly poison gourd",
    img: "misty_island_assets/weapons/deadly-poison-gourd.png",
    ingredients: [[items.poison, 5]],
    unlock: "Survival Worktable",
    notes: "Attack +75. Damage +100%. Attack Speed -1. Attack Count 2. Mob Count 5."
};
weapons.fish_spear = {
    id: "fish_spear",
    name: "fish spear",
    img: "misty_island_assets/weapons/fish-spear.png",
    ingredients: [[items.log, 3], [manufactures.iron_rod, 1], [items.raw_fish, 1]],
    unlock: "Industrial Worktable",
    notes: "Attack +180. Damage +100%. Attack Speed 2. Attack Count 1. Mob Count 1."
};
weapons.golden_decorative_hammer = {
    id: "golden_decorative_hammer",
    name: "golden decorative hammer",
    img: "misty_island_assets/weapons/golden-decorative-hammer.png",
    ingredients: [[items.iron, 4], [items.gold, 2], [items.log, 1]],
    unlock: "Industrial Worktable",
    notes: "Attack +80. Damage +100%. Attack Speed 0. Attack Count 2. Mob Count 5."
};
weapons.bastard_sword = {
    id: "bastard_sword",
    name: "bastard sword",
    img: "misty_island_assets/weapons/bastard-sword.png",
    ingredients: [[manufactures.iron_plate, 1], [manufactures.iron_rod, 1]],
    unlock: "Industrial Worktable",
    notes: "Attack +45. Damage +100%. Attack Speed -1. Attack Count 2. Mob Count 3."
};
weapons.crude_cannon = {
    id: "crude_cannon",
    name: "crude cannon",
    img: "misty_island_assets/weapons/crude-cannon.png",
    ingredients: [[manufactures.iron_plate, 1], [items.iron, 3], [manufactures.gunpowder, 1], [items.log, 3]],
    unlock: "Industrial Worktable",
    notes: "Attack +110. Damage +100%. Attack Speed 2. Attack Count 1. Mob Count 4."
};
// ------------------------------------------------
// -------------------DEFEND-----------------------
// ------------------------------------------------
defend.wooden_fence = {
    id: "wooden_fence",
    name: "wooden fence",
    img: "misty_island_assets/defend/wooden-fence.png",
    ingredients: [[items.log, 3], [manufactures.rope, 2]],
    unlock: "Survival Worktable",
    notes: ""
};
defend.wooden_barricade = {
    id: "wooden_barricade",
    name: "wooden barricade",
    img: "misty_island_assets/defend/wooden-barricade.png",
    ingredients: [[manufactures.board, 2], [manufactures.rope, 2], [items.stone, 2]],
    unlock: "Survival Worktable",
    notes: ""
};
defend.crossbow_tower = {
    id: "crossbow_tower",
    name: "crossbow tower",
    img: "misty_island_assets/defend/crossbow-tower.png",
    ingredients: [[manufactures.board, 2], [manufactures.rope, 1], [manufactures.iron_plate, 1]],
    unlock: "Survival Worktable",
    notes: ""
};
defend.stone_wall = {
    id: "stone_wall",
    name: "stone wall",
    img: "misty_island_assets/defend/stone-wall.png",
    ingredients: [[items.stone, 5], [manufactures.iron_rod, 1]],
    unlock: "Industrial Worktable",
    notes: ""
};
defend.advanced_stone_wall = {
    id: "advanced_stone_wall",
    name: "advanced stone wall",
    img: "misty_island_assets/defend/advanced-stone-wall.png",
    ingredients: [[manufactures.brick, 2], [manufactures.cement_powder, 2]],
    unlock: "Industrial Worktable",
    notes: ""
};
defend.enhanced_crossbow_tower = {
    id: "enhanced_crossbow_tower",
    name: "enhanced crossbow tower",
    img: "misty_island_assets/defend/enhanced-crossbow-tower.png",
    ingredients: [[manufactures.brick, 5], [manufactures.board, 5], [manufactures.rope, 2]],
    unlock: "Industrial Worktable",
    notes: ""
};
defend.mortar_tower = {
    id: "mortar_tower",
    name: "mortar tower",
    img: "misty_island_assets/defend/mortar-tower.png",
    ingredients: [[manufactures.iron_plate, 3], [manufactures.brick, 3], [manufactures.gunpowder, 1]],
    unlock: "Industrial Worktable",
    notes: ""
};
defend.cannon_tower = {
    id: "cannon_tower",
    name: "cannon tower",
    img: "misty_island_assets/defend/cannon-tower.png",
    ingredients: [[manufactures.iron_plate, 3], [manufactures.brick, 2], [manufactures.gunpowder, 1], [manufactures.gold_bar, 1]],
    unlock: "Industrial Worktable",
    notes: ""
};
// ------------------------------------------------
// -------------------POTIONS----------------------
// ------------------------------------------------
potions.life_force_recovery_potion_s = {
    id: "life_force_recovery_potion_s",
    name: "life force recovery potion (S)",
    img: "misty_island_assets/potions/life-force-recovery-potion-s.png",
    ingredients: [[manufactures.lava_solution, 1], [manufactures.banana_powder, 2], [manufactures.herbal_powder, 1]],
    unlock: "Alchemy Pot",
    notes: "Life Force +150."
};
potions.life_force_recovery_potion_l = {
    id: "life_force_recovery_potion_l",
    name: "life force recovery potion (L)",
    img: "misty_island_assets/potions/life-force-recovery-potion-l.png",
    ingredients: [[manufactures.lava_solution, 2], [manufactures.banana_powder, 2], [manufactures.herbal_powder, 1], [items.gold, 1]],
    unlock: "Alchemy Pot",
    notes: "Life Force +300."
};
potions.acting_power_recovery_potion_s = {
    id: "acting_power_recovery_potion_s",
    name: "acting power recovery potion (s)",
    img: "misty_island_assets/potions/acting-power-recovery-potion-s.png",
    ingredients: [[manufactures.lava_solution, 1], [manufactures.banana_powder, 1], [manufactures.herbal_powder, 2]],
    unlock: "Alchemy Pot",
    notes: "Acting Power +80."
};
potions.glowing_potion = {
    id: "glowing potion",
    name: "glowing_potion",
    img: "misty_island_assets/potions/glowing-potion.png",
    ingredients: [[manufactures.regeneration_solution, 1], [items.lava_stone_powder, 2], [items.gold, 1]],
    unlock: "Alchemy Pot",
    notes: "See surroundings for 540s."
};
potions.attack_power_increase_potion = {
    id: "attack_power_increase_potion",
    name: "attack power increase potion",
    img: "misty_island_assets/potions/attack-power-increase-potion.png",
    ingredients: [[manufactures.regeneration_solution, 1], [manufactures.herbal_powder, 1], [items.wild_mushroom, 1]],
    unlock: "Alchemy Pot",
    notes: "Attack +40 for 540s."
};
potions.defense_increase_potion = {
    id: "defense_increase_potion",
    name: "defense increase potion",
    img: "misty_island_assets/potions/defense-increase-potion.png",
    ingredients: [[manufactures.regeneration_solution, 1], [items.golem_rubble, 2]],
    unlock: "Alchemy Pot",
    notes: "Defense +10% for 540s."
};
potions.speed_increase_potion = {
    id: "speed_increase_potion",
    name: "speed increase potion",
    img: "misty_island_assets/potions/speed-increase-potion.png",
    ingredients: [[manufactures.regeneration_solution, 1], [items.smilodon_canine, 1], [items.molar, 2]],
    unlock: "Alchemy Pot",
    notes: "Speed +30 for 540s."
};
potions.jump_increase_potion = {
    id: "jump_increase_potion",
    name: "jump increase potion",
    img: "misty_island_assets/potions/jump-increase-potion.png",
    ingredients: [[manufactures.regeneration_solution, 1], [items.neophron_feather, 1], [items.feather, 2]],
    unlock: "Alchemy Pot",
    notes: "Jump +15 for 540s."
};
potions.poison_potion = {
    id: "poison_potion",
    name: "poison potion",
    img: "misty_island_assets/potions/poison-potion.png",
    ingredients: [[manufactures.regeneration_solution, 1], [items.poison, 1]],
    unlock: "Alchemy Pot",
    notes: "Attack +60 for 540s, Life Force -50%."
};
// ------------------------------------------------
// ---------------------MOUNT----------------------
// ------------------------------------------------
mounts.magic_wings = {
    id: "magic_wings",
    name: "magic wings one-time coupon",
    img: "misty_island_assets/mounts/magic-wings.png",
    ingredients: [[items.neophron_feather, 2], [manufactures.cog, 2], [items.lava_stone_powder, 1]],
    unlock: "Industrial Worktable",
    notes: ""
};
export { items, manufactures, tools, structures, armor, defend, weapons, potions, mounts };
//# sourceMappingURL=dictionaries.js.map