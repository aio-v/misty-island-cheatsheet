let items = {};
let weapons = {};
let armor = {};
let structures = {};
let tools = {};
let manufactures = {};
let defend = {};
// ------------------------------------------------
// ---------------------ITEMS----------------------
// ------------------------------------------------
items.leaf = { name: "leaf", img: "misty_island_assets/materials/leaf.png", notes: "" };
items.log = { name: "log", img: "misty_island_assets/materials/log.png", notes: "" };
items.stone = { name: "stone", img: "misty_island_assets/materials/stone.png", notes: "" };
items.iron = { name: "iron", img: "misty_island_assets/materials/iron.png", notes: "" };
items.leather = { name: "leather", img: "misty_island_assets/materials/leather.png", notes: "" };
items.gold = { name: "gold", img: "misty_island_assets/materials/gold.png", notes: "" };
items.feather = { name: "feather", img: "misty_island_assets/materials/feather.png", notes: "" };
items.molar = { name: "molar", img: "misty_island_assets/materials/jungle-pig-molar.png", notes: "Obtained from jungle pigs." };
items.poison = { name: "poison", img: "misty_island_assets/materials/piranha-deadly-poison.png", notes: "Obtained from piranhas under the waterfall." };
items.lizardman_skin = { name: "lizardman_skin", img: "misty_island_assets/materials/lizardman-skin.png", notes: "" };
items.seaweed = { name: "seaweed", img: "misty_island_assets/materials/leaf.png", notes: "" };
items.smilodon_leather = { name: "smilodon_leather", img: "misty_island_assets/materials/smilodon-leather.png", notes: "" };
items.smilodon_canine = { name: "smilodon_canine", img: "misty_island_assets/materials/smilodon-canine.png", notes: "" };
items.neophron_feather = { name: "neophron_feather", img: "misty_island_assets/materials/neophron-feather.png", notes: "" };
items.golem_rubble = { name: "golem_rubble", img: "misty_island_assets/materials/golem-rubble.png", notes: "" };
items.fainted_jungle_pig = { name: "fainted_jungle_pig", img: "misty_island_assets/materials/fainted-jungle-pig.png", notes: "Obtained from jungle pigs (uncommon)." };
items.fainted_smilodon = { name: "fainted_smilodon", img: "misty_island_assets/materials/fainted-smilodon.png", notes: "" };
// ------------------------------------------------
// -------------------EDIBLES----------------------
// ------------------------------------------------
items.bird_egg = { name: "bird_egg", img: "misty_island_assets/edibles/bird-egg.png", notes: "" };
items.caterpillar = { name: "caterpillar", img: "misty_island_assets/edibles/caterpillar", notes: "" };
items.banana = { name: "banana", img: "misty_island_assets/edibles/banana.png", notes: "" };
items.herb = { name: "herb", img: "misty_island_assets/edibles/herb.png", notes: "" };
items.petal = { name: "petal", img: "misty_island_assets/edibles/petal.png", notes: "" };
items.raw_meat = { name: "raw_meat", img: "misty_island_assets/edibles/raw-meat.png", notes: "" };
items.wild_mushroom = { name: "wild_mushroom", img: "misty_island_assets/edibles/wild-mushroom.png", notes: "" };
items.raw_fish = { name: "raw_fish", img: "misty_island_assets/edibles/raw-fish.png", notes: "" };
items.seaweed = { name: "seaweed", img: "misty_island_assets/edibles/seaweed.png", notes: "" };
// ------------------------------------------------
// -------------------MANUFACTURE------------------
// ------------------------------------------------
manufactures.rope = {
    name: "rope",
    img: "misty_island_assets/manufacture/rope.png",
    ingredients: [[items.leaf, 3]],
    unlock: "-",
    notes: ""
};
manufactures.board = {
    name: "board",
    img: "misty_island_assets/manufacture/board.png",
    ingredients: [[items.log, 3]],
    unlock: "-",
    notes: ""
};
manufactures.charcoal = {
    name: "charcoal",
    img: "misty_island_assets/manufacture/charcoal.png",
    ingredients: [[items.log, 1]],
    unlock: "-",
    notes: ""
};
manufactures.brick = {
    name: "brick",
    img: "misty_island_assets/manufacture/brick.png",
    ingredients: [[items.stone, 3]],
    unlock: "Survival Worktable",
    notes: ""
};
manufactures.iron_plate = {
    name: "iron plate",
    img: "misty_island_assets/manufacture/iron-plate.png",
    ingredients: [[items.iron, 3]],
    unlock: "Survival Worktable",
    notes: ""
};
manufactures.iron_rod = {
    name: "iron rod",
    img: "misty_island_assets/manufacture/iron-rod.png",
    ingredients: [[items.iron, 2]],
    unlock: "Survival Worktable",
    notes: ""
};
manufactures.gunpowder = {
    name: "gunpowder",
    img: "misty_island_assets/manufacture/gunpowder.png",
    ingredients: [[items.golem_rubble, 1], [manufactures.charcoal, 1]],
    unlock: "???",
    notes: ""
};
manufactures.processed_wood = {
    name: "processed glued laminated wood",
    img: "misty_island_assets/manufacture/processed-wood.png",
    ingredients: [[manufactures.board, 2], [items.log, 2]],
    unlock: "Industrial Worktable",
    notes: ""
};
manufactures.screw = {
    name: "screw",
    img: "misty_island_assets/manufacture/screw.png",
    ingredients: [[items.iron, 2]],
    unlock: "Industrial Worktable",
    notes: ""
};
manufactures.cog = {
    name: "cog",
    img: "misty_island_assets/manufacture/cog.png",
    ingredients: [[items.iron, 2]],
    unlock: "Industrial Worktable",
    notes: ""
};
manufactures.lever = {
    name: "lever",
    img: "misty_island_assets/manufacture/lever.png",
    ingredients: [[manufactures.iron_plate, 1], [manufactures.iron_rod, 1]],
    unlock: "Industrial Worktable",
    notes: ""
};
manufactures.gold_bar = {
    name: "gold bar",
    img: "misty_island_assets/manufacture/gold-bar.png",
    ingredients: [[items.gold, 3]],
    unlock: "Industrial Worktable",
    notes: ""
};
// ------------------------------------------------
// ---------------------TOOLS----------------------
// ------------------------------------------------
tools.stone_axe = {
    name: "stone axe",
    img: "misty_island_assets/toolbox/stone-axe.png",
    ingredients: [[items.stone, 2], [items.log, 1]],
    unlock: "-",
    notes: ""
};
tools.stone_pickax = {
    name: "stone pickax",
    img: "misty_island_assets/toolbox/stone-pickax.png",
    ingredients: [[items.stone, 2], [items.log, 1]],
    unlock: "-",
    notes: ""
};
tools.steel_axe = {
    name: "steel axe",
    img: "misty_island_assets/toolbox/steel-axe.png",
    ingredients: [[manufactures.iron_plate, 1], [manufactures.iron_rod, 1], [manufactures.charcoal, 1]],
    unlock: "Survival Worktable",
    notes: ""
};
tools.steel_pickax = {
    name: "steel pickax",
    img: "misty_island_assets/toolbox/steel-pickax.png",
    ingredients: [[manufactures.iron_plate, 1], [manufactures.iron_rod, 1], [manufactures.charcoal, 1]],
    unlock: "Survival Worktable",
    notes: ""
};
tools.gold_axe = {
    name: "gold axe",
    img: "misty_island_assets/toolbox/gold-axe.png",
    ingredients: [[items.gold, 2], [manufactures.iron_rod, 1]],
    unlock: "Industrial Worktable",
    notes: ""
};
tools.gold_pickax = {
    name: "gold pickax",
    img: "misty_island_assets/toolbox/gold-pickax.png",
    ingredients: [[items.gold, 2], [manufactures.iron_rod, 1]],
    unlock: "Industrial Worktable",
    notes: ""
};
tools.matches = {
    name: "matches",
    img: "misty_island_assets/toolbox/matches.png",
    ingredients: [[items.log, 1]],
    unlock: "-",
    notes: ""
};
tools.torch = {
    name: "torch",
    img: "misty_island_assets/toolbox/torch.png",
    ingredients: [[items.log, 1]],
    unlock: "Survival Worktable",
    notes: ""
};
tools.leaves_bag = {
    name: "leaves bag",
    img: "misty_island_assets/toolbox/leaves-bag.png",
    ingredients: [[items.leaf, 6]],
    unlock: "Survival Worktable",
    notes: "+4 inventory slots"
};
tools.leather_bag = {
    name: "leather bag",
    img: "misty_island_assets/toolbox/leather-bag.png",
    ingredients: [[items.leather, 6]],
    unlock: "Industrial Worktable",
    notes: "+8 inventory slots"
};
tools.empty_bucket = {
    name: "leaves bag",
    img: "misty_island_assets/toolbox/empty-bucket.png",
    ingredients: [[manufactures.iron_plate, 1]],
    unlock: "Survival Worktable",
    notes: ""
};
manufactures.water_bucket = {
    name: "water bucket",
    img: "misty_island_assets/manufacture/water-bucket.png",
    ingredients: [[tools.empty_bucket, 1]],
    unlock: "Industrial Worktable",
    notes: "Use empty bucket at waterfall"
};
manufactures.water = {
    name: "water",
    img: "misty_island_assets/materials/water.png",
    ingredients: [[manufactures.water_bucket, 1]],
    unlock: "Industrial Worktable",
    notes: ""
};
manufactures.cement_powder = {
    name: "cement powder",
    img: "misty_island_assets/manufacture/cement-powder.png",
    ingredients: [[items.stone, 3], [manufactures.water, 1]],
    unlock: "Survival Worktable",
    notes: ""
};
tools.demolition_hammer = {
    name: "demolition hammer",
    img: "misty_island_assets/toolbox/demolition-hammer.png",
    ingredients: [[items.iron, 1], [items.log, 1], [manufactures.rope, 1]],
    unlock: "Survival Worktable",
    notes: ""
};
tools.diary = {
    name: "expedition diary",
    img: "misty_island_assets/toolbox/diary.png",
    ingredients: [[items.leather, 1], [items.log, 2], [manufactures.charcoal, 1]],
    unlock: "Survival Worktable",
    notes: ""
};
tools.cookbook = {
    name: "expedition cookbook",
    img: "misty_island_assets/toolbox/cookbook.png",
    ingredients: [[items.leather, 1], [items.log, 2], [manufactures.charcoal, 1]],
    unlock: "Survival Worktable",
    notes: ""
};
tools.leather_saddle = {
    name: "leather saddle",
    img: "misty_island_assets/toolbox/leather-saddle.png",
    ingredients: [[items.fainted_jungle_pig, 1], [manufactures.rope, 1], [items.leather, 2]],
    unlock: "???, may need fainted jungle pig in inventory",
    notes: ""
};
// ------------------------------------------------
// ------------------STRUCTURES--------------------
// ------------------------------------------------
structures.survival_worktable = {
    name: "survival worktable",
    img: "misty_island_assets/structures/survival-worktable.png",
    ingredients: [[manufactures.board, 2], [items.log, 3], [manufactures.rope, 1]],
    unlock: "-",
    notes: ""
};
structures.industrial_worktable = {
    name: "industrial worktable",
    img: "misty_island_assets/structures/industrial-worktable.png",
    ingredients: [[manufactures.board, 3], [manufactures.iron_rod, 5], [items.gold, 5]],
    unlock: "Survival Worktable",
    notes: ""
};
structures.bonfire = {
    name: "bonfire",
    img: "misty_island_assets/structures/bonfire.png",
    ingredients: [[items.log, 3]],
    unlock: "-",
    notes: ""
};
structures.campfire = {
    name: "campfire for cooking",
    img: "misty_island_assets/structures/campfire.png",
    ingredients: [[items.log, 3], [items.stone, 3], [manufactures.iron_plate, 1]],
    unlock: "Survival Worktable",
    notes: ""
};
structures.wooden_box = {
    name: "wooden box",
    img: "misty_island_assets/structures/wooden-box.png",
    ingredients: [[manufactures.board, 2]],
    unlock: "Survival Worktable",
    notes: ""
};
structures.rainwater_filter = {
    name: "rainwater filter",
    img: "misty_island_assets/structures/rainwater-filter.png",
    ingredients: [[items.leaf, 10], [manufactures.board, 2]],
    unlock: "Survival Worktable",
    notes: "Gives 30 water after rainy days"
};
structures.palm_tent = {
    name: "palm tent",
    img: "misty_island_assets/structures/palm-tent.png",
    ingredients: [[items.leaf, 6], [manufactures.board, 1]],
    unlock: "Survival Worktable",
    notes: ""
};
structures.alchemy_pot = {
    name: "alchemy pot",
    img: "misty_island_assets/structures/alchemy-pot.png",
    ingredients: [[manufactures.brick, 2], [items.iron, 2], [manufactures.water_bucket, 1]],
    unlock: "Industrial Worktable",
    notes: ""
};
structures.countertop = {
    name: "countertop",
    img: "misty_island_assets/structures/countertop.png",
    ingredients: [[manufactures.board, 1], [manufactures.brick, 2], [manufactures.iron_plate, 2], [manufactures.charcoal, 1]],
    unlock: "Industrial Worktable",
    notes: "3 cooking slots"
};
structures.streetlight = {
    name: "streetlight",
    img: "misty_island_assets/structures/streetlight.png",
    ingredients: [[manufactures.iron_rod, 1], [manufactures.charcoal, 1]],
    unlock: "Industrial Worktable",
    notes: ""
};
structures.sturdy_box = {
    name: "sturdy box",
    img: "misty_island_assets/structures/alchemy-pot.png",
    ingredients: [[manufactures.iron_plate, 2]],
    unlock: "Industrial Worktable",
    notes: ""
};
structures.feather_tent = {
    name: "feather tent",
    img: "misty_island_assets/structures/feather-tent.png",
    ingredients: [[items.feather, 4], [items.leather, 2], [manufactures.board, 1]],
    unlock: "Industrial Worktable",
    notes: ""
};
structures.well = {
    name: "alchemy pot",
    img: "misty_island_assets/structures/alchemy-pot.png",
    ingredients: [[manufactures.brick, 3], [manufactures.processed_wood, 1]],
    unlock: "Industrial Worktable",
    notes: ""
};
structures.monster_sound_speaker = {
    name: "monster sound speaker",
    img: "misty_island_assets/structures/monster-sound-speaker.png",
    ingredients: [[manufactures.board, 2], [manufactures.iron_rod, 1], [manufactures.fainted_smilodon, 1]],
    unlock: "Industrial Worktable",
    notes: ""
};
structures.molar_trap = {
    name: "molar trap",
    img: "misty_island_assets/structures/molar-trap.png",
    ingredients: [[items.molar, 2], [manufactures.iron_plate, 1]],
    unlock: "Industrial Worktable",
    notes: ""
};
// ------------------------------------------------
// --------------------ARMOR-----------------------
// ------------------------------------------------
armor.leaf_dress = {
    name: "leaf dress",
    img: "misty_island_assets/armor/leaf-dress.png",
    ingredients: [[items.leaf, 8]],
    unlock: "-",
    notes: "Defense +3%."
};
armor.leather_outfit = {
    name: "leather outfit",
    img: "misty_island_assets/armor/leather-outfit.png",
    ingredients: [[items.leather, 5], [manufactures.rope, 2]],
    unlock: "Survival Worktable",
    notes: "Defense +5%."
};
armor.raincoat = {
    name: "raincoat",
    img: "misty_island_assets/armor/raincoat.png",
    ingredients: [[items.leather, 4], [items.seaweed, 4]],
    unlock: "Survival Worktable",
    notes: "Defense +5%. Ignores Blade Torrent atmospheric effect."
};
armor.sloppy_exploration_clothes = {
    name: "sloppy exploration clothes",
    img: "misty_island_assets/armor/sloppy-exploration-clothes.png",
    ingredients: [[items.leather, 6], [items.feather, 2], [manufactures.rope, 1]],
    unlock: "Survival Worktable",
    notes: "Defense +5%."
};
armor.gladiator_armor = {
    name: "gladiator armor",
    img: "misty_island_assets/armor/gladiator-armor.png",
    ingredients: [[items.leather, 4], [manufactures.iron_plate, 1]],
    unlock: "Survival Worktable",
    notes: "Defense +6%."
};
armor.plate_armor = {
    name: "plate armor",
    img: "misty_island_assets/armor/plate-armor.png",
    ingredients: [[manufactures.iron_plate, 2], [items.leather, 2]],
    unlock: "Industrial Worktable",
    notes: "Defense +9%."
};
armor.golden_armor = {
    name: "golden armor",
    img: "misty_island_assets/armor/golden-armor.png",
    ingredients: [[manufactures.gold_bar, 2], [manufactures.iron_plate, 1]],
    unlock: "Industrial Worktable",
    notes: "Defense +10%."
};
armor.leopard_coat = {
    name: "leopard coat",
    img: "misty_island_assets/armor/leopard-coat.png",
    ingredients: [[manufactures.iron_plate, 6], [items.leather, 2]],
    unlock: "Industrial Worktable",
    notes: "Defense +8%. +30 Life Force when equipped."
};
armor.jungle_floral_crown = {
    name: "jungle floral crown",
    img: "misty_island_assets/armor/jungle-floral-crown.png",
    ingredients: [[items.leaf, 4]],
    unlock: "-",
    notes: "Defense +3%."
};
armor.leather_hat = {
    name: "leather hat",
    img: "misty_island_assets/armor/leather-hat.png",
    ingredients: [[items.leather, 4]],
    unlock: "-",
    notes: "Defense +3%."
};
armor.sloppy_exploration_hat = {
    name: "sloppy exploration hat",
    img: "misty_island_assets/armor/sloppy-exploration-hat.png",
    ingredients: [[items.leather, 4], [manufactures.rope, 1]],
    unlock: "Survival Worktable",
    notes: "Defense +4%."
};
armor.iron_helmet = {
    name: "iron helmet",
    img: "misty_island_assets/armor/iron-helmet.png",
    ingredients: [[manufactures.iron_plate, 1]],
    unlock: "Survival Worktable",
    notes: "Defense +4%."
};
armor.horned_iron_hat = {
    name: "horned iron hat",
    img: "misty_island_assets/armor/horned-iron-hat.png",
    ingredients: [[items.iron, 4],],
    unlock: "Survival Worktable",
    notes: "Defense +5%."
};
armor.birds_nest_hat = {
    name: "bird's nest hat",
    img: "misty_island_assets/armor/birds-nest-hat.png",
    ingredients: [[items.bird_egg, 1], [items.leaf, 3]],
    unlock: "Survival Worktable",
    notes: "Defense +3%."
};
armor.golden_helmet = {
    name: "golden helmet",
    img: "misty_island_assets/armor/golden-helmet.png",
    ingredients: [[manufactures.gold_bar, 1], [manufactures.iron_plate, 1]],
    unlock: "Industrial Worktable",
    notes: "Defense +7%."
};
armor.steel_helmet = {
    name: "steel helmet",
    img: "misty_island_assets/armor/steel-helmet.png",
    ingredients: [[manufactures.iron_plate, 2], [items.leather, 1]],
    unlock: "Industrial Worktable",
    notes: "Defense +8%."
};
armor.sun_cap = {
    name: "sun cap",
    img: "misty_island_assets/armor/sun-cap.png",
    ingredients: [[items.leather, 4], [items.leaf, 2], [manufactures.rope, 1]],
    unlock: "Industrial Worktable",
    notes: "Defense +8%."
};
armor.lightning_rod_hat = {
    name: "lightning rod hat",
    img: "misty_island_assets/armor/lightning-rod-hat.png",
    ingredients: [[items.iron, 4], [manufactures.iron_rod, 1], [items.golem_rubble, 1]],
    unlock: "Industrial Worktable",
    notes: "Defense +7%."
};
armor.rope_sandals = {
    name: "rope sandals",
    img: "misty_island_assets/armor/rope-sandals.png",
    ingredients: [[items.leather, 2]],
    unlock: "-",
    notes: "Defense +2%. Speed +30. Jump +10."
};
armor.sturdy_straw_shoes = {
    name: "sturdy straw shoes",
    img: "misty_island_assets/armor/sturdy-straw-shoes.png",
    ingredients: [[manufactures.rope, 2]],
    unlock: "-",
    notes: "Defense +3%. Speed +20. Jump +5."
};
armor.sloppy_leather_shoes = {
    name: "sloppy leather shoes",
    img: "misty_island_assets/armor/sloppy-leather-shoes.png",
    ingredients: [[items.leather, 6], [manufactures.rope, 2]],
    unlock: "Survival Worktable",
    notes: "Defense +4%. Speed +35. Jump +10."
};
armor.iron_plated_shoes = {
    name: "iron plated shoes",
    img: "misty_island_assets/armor/iron-plated-shoes.png",
    ingredients: [[manufactures.iron_plate, 1], [items.leather, 2], [manufactures.rope, 2]],
    unlock: "Survival Worktable",
    notes: "Defense +5%. Speed +30. Jump +10."
};
armor.studded_shoes = {
    name: "studded shoes",
    img: "misty_island_assets/armor/studded-shoes.png",
    ingredients: [[items.iron, 2], [items.leather, 6], [manufactures.rope, 2]],
    unlock: "Survival Worktable",
    notes: "Defense +6%. Speed +20. Jump +10."
};
armor.golden_shoes = {
    name: "golden shoes",
    img: "misty_island_assets/armor/golden-shoes.png",
    ingredients: [[items.lizardman_skin, 2], [manufactures.gold_bar, 2]],
    unlock: "Industrial Worktable",
    notes: "Defense +7%. Speed +40. Jump +15."
};
armor.feather_boots = {
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
    name: "wooden sword",
    img: "misty_island_assets/weapons/wooden-sword.png",
    ingredients: [[items.log, 3]],
    unlock: "-",
    notes: "Attack +35. Damage +100%. Attack Speed 0. Attack Count 1. Mob Count 3."
};
weapons.slingshot = {
    name: "slingshot",
    img: "misty_island_assets/weapons/slingshot.png",
    ingredients: [[items.log, 3], [manufactures.rope, 1]],
    unlock: "-",
    notes: "Attack +30. Damage +250%. Attack Speed 1. Attack Count 1. Mob Count 1."
};
weapons.stone_hammer = {
    name: "stone hammer",
    img: "misty_island_assets/weapons/stone-hammer.png",
    ingredients: [[items.stone, 2], [items.log, 3]],
    unlock: "-",
    notes: "Attack +50. Damage +100%. Attack Speed 1. Attack Count 2. Mob Count 1."
};
weapons.iron_sword = {
    name: "iron sword",
    img: "misty_island_assets/weapons/iron-sword.png",
    ingredients: [[items.iron, 3], [items.log, 1]],
    unlock: "Survival Worktable",
    notes: "Attack +65. Damage +100%. Attack Speed 2. Attack Count 2. Mob Count 3."
};
weapons.forked_spear = {
    name: "forked spear",
    img: "misty_island_assets/weapons/forked-spear.png",
    ingredients: [[items.log, 2], [items.iron, 2], [manufactures.rope, 1]],
    unlock: "Survival Worktable",
    notes: "Attack +80. Damage +100%. Attack Speed 2. Attack Count 1. Mob Count 3."
};
weapons.battle_hammer = {
    name: "battle hammer",
    img: "misty_island_assets/weapons/battle-hammer.png",
    ingredients: [[items.iron, 2], [items.log, 2]],
    unlock: "Survival Worktable",
    notes: "Attack +85. Damage +100%. Attack Speed 2. Attack Count 2. Mob Count 1."
};
weapons.overlord_sword = {
    name: "overlord sword mark-l1",
    img: "misty_island_assets/weapons/overlord-sword.png",
    ingredients: [[manufactures.iron_plate, 1], [manufactures.iron_rod, 1], [items.gold, 1]],
    unlock: "Survival Worktable",
    notes: "Attack +55. Damage +100%. Attack Speed -1. Attack Count 2. Mob Count 5."
};
weapons.golden_sword = {
    name: "golden sword",
    img: "misty_island_assets/weapons/golden-sword.png",
    ingredients: [[items.gold, 4], [items.iron, 1]],
    unlock: "Industrial Worktable",
    notes: "Attack +45. Damage +100%. Attack Speed -1. Attack Count 2. Mob Count 5."
};
weapons.bow = {
    name: "bow",
    img: "misty_island_assets/weapons/bow.png",
    ingredients: [[items.iron, 1], [items.log, 2], [manufactures.rope, 1]],
    unlock: "Survival Worktable",
    notes: "Attack +35."
};
weapons.crossbow = {
    name: "crossbow",
    img: "misty_island_assets/weapons/crossbow.png",
    ingredients: [[manufactures.iron_plate, 1], [manufactures.iron_rod, 1], [items.log, 3], [manufactures.rope, 1]],
    unlock: "Industrial Worktable",
    notes: "Attack +40. Damage +100%. Attack Speed 1. Attack Count 2. Mob Count 7."
};
weapons.deadly_poison_gourd = {
    name: "deadly poison gourd",
    img: "misty_island_assets/weapons/deadly-poison-gourd.png",
    ingredients: [[items.poison, 5]],
    unlock: "Survival Worktable",
    notes: "Attack +75. Damage +100%. Attack Speed -1. Attack Count 2. Mob Count 5."
};
weapons.fish_spear = {
    name: "fish spear",
    img: "misty_island_assets/weapons/fish-spear.png",
    ingredients: [[items.log, 3], [manufactures.iron_rod, 1], [items.raw_fish, 1]],
    unlock: "Industrial Worktable",
    notes: "Attack +180. Damage +100%. Attack Speed 2. Attack Count 1. Mob Count 1."
};
weapons.golden_decorative_hammer = {
    name: "golden decorative hammer",
    img: "misty_island_assets/weapons/golden-decorative-hammer.png",
    ingredients: [[items.iron, 4], [items.gold, 2], [items.log, 1]],
    unlock: "Industrial Worktable",
    notes: "Attack +80. Damage +100%. Attack Speed 0. Attack Count 2. Mob Count 5."
};
weapons.bastard_sword = {
    name: "bastard sword",
    img: "misty_island_assets/weapons/bastard-sword.png",
    ingredients: [[manufactures.iron_plate, 1], [manufactures.iron_rod, 1]],
    unlock: "Industrial Worktable",
    notes: "Attack +45. Damage +100%. Attack Speed -1. Attack Count 2. Mob Count 3."
};
weapons.crude_cannon = {
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
    name: "wooden fence",
    img: "misty_island_assets/defend/wooden-fence.png",
    ingredients: [[items.log, 3], [manufactures.rope, 2]],
    unlock: "-",
    notes: ""
};
defend.wooden_barricade = {
    name: "wooden barricade",
    img: "misty_island_assets/defend/wooden-barricade.png",
    ingredients: [[manufactures.board, 2], [manufactures.rope, 2], [items.stone, 2]],
    unlock: "-",
    notes: ""
};
defend.crossbow_tower = {
    name: "crossbow tower",
    img: "misty_island_assets/defend/crossbow-tower.png",
    ingredients: [[manufactures.board, 2], [manufactures.rope, 1], [manufactures.iron_plate, 1]],
    unlock: "-",
    notes: ""
};
export { items, manufactures, tools, structures, armor, defend, weapons, };
//# sourceMappingURL=dictionaries.js.map