import { items as materials, tools, manufactures, structures, armor, weapons, defend, potions, mounts } from './dictionaries.js';
const tables = {
    'manufactures': manufactures,
    'tools': tools,
    'structures': structures,
    'armor': armor,
    'weapons': weapons,
    'defend': defend,
    'potions': potions,
    'mounts': mounts
};
function isCraftable(x) {
    return x.ingredients !== undefined;
}
;
function getBaseMaterials(recipe, mats) {
    if (!isCraftable(recipe[0])) {
        mats[recipe[0].id] = (mats[recipe[0].id] || 0) + recipe[1];
        return;
    }
    else {
        let c = recipe[0];
        for (const [i, n] of c.ingredients) {
            getBaseMaterials([i, n * recipe[1]], mats);
        }
    }
}
function convertMaterials(table) {
    let result = {};
    for (let item in table) {
        let mats = {};
        getBaseMaterials([table[item], 1], mats);
        result[item] = Object.assign(Object.assign({}, table[item]), { ingredients: Object.entries(mats).map(([k, v]) => {
                return [materials[k], v];
            }) });
    }
    return result;
}
function toggleFavorite(id, table, checked) {
    let faves = localStorage.getItem("favorites");
    let favesMap;
    if (!checked) {
        favesMap = new Map(JSON.parse(faves));
        favesMap.delete(id);
    }
    else {
        if (!faves) {
            favesMap = new Map();
            favesMap.set(id, table);
        }
        else {
            favesMap = new Map(JSON.parse(faves));
            favesMap.set(id, table);
        }
    }
    localStorage.setItem("favorites", JSON.stringify(Array.from(favesMap.entries())));
}
function createFaveButton(id, table, checked) {
    let button = document.createElement("i");
    button.classList.add(id);
    if (checked)
        button.classList.add("fas", "fa-star", "checked");
    else
        button.classList.add("far", "fa-star");
    button.addEventListener("click", function () {
        let on = this.classList.toggle("checked");
        if (on) {
            this.classList.replace("far", "fas");
        }
        else {
            this.classList.replace("fas", "far");
        }
        toggleFavorite(this.classList.item(0), table, on);
    }, false);
    return button;
}
function createTable() {
    let currTable = document.getElementById("table_select").value;
    let faves = localStorage.getItem("favorites");
    let favesMap = faves ? new Map(JSON.parse(faves)) : new Map();
    let dict;
    if (currTable == "favorites") {
        let favesDict = {};
        favesMap.forEach((value, key) => {
            favesDict[key] = tables[value][key];
        });
        dict = document.getElementById("check").checked ? convertMaterials(favesDict) :
            favesDict;
    }
    else {
        dict = document.getElementById("check").checked ? convertMaterials(tables[currTable]) :
            tables[currTable];
    }
    let table = document.createElement('table');
    table.classList.add("craft");
    // Header
    let tableHeader = table.createTHead();
    let headerRow = tableHeader.insertRow();
    let filler = headerRow.insertCell();
    let cell = headerRow.insertCell();
    cell.innerHTML = "Item";
    let cell2 = headerRow.insertCell();
    cell2.innerHTML = "Materials";
    let cell3 = headerRow.insertCell();
    cell3.innerHTML = "Unlocked By";
    let cell4 = headerRow.insertCell();
    cell4.innerHTML = "Notes";
    // Body
    let tableBody = table.createTBody();
    for (let craftable in dict) {
        let row = tableBody.insertRow();
        let faveCell = row.insertCell();
        faveCell.appendChild(createFaveButton(craftable, currTable == "favorites" ? favesMap.get(craftable) : currTable, favesMap.has(craftable)));
        let itemCell = row.insertCell();
        itemCell.classList.add("center");
        let img = document.createElement('img');
        img.src = dict[craftable].img;
        img.title = dict[craftable].name;
        img.alt = dict[craftable].name;
        img.classList.add("icon");
        itemCell.appendChild(img);
        let cellWrap = row.insertCell();
        cellWrap.classList.add("center");
        let ingredientsDiv = document.createElement('div');
        ingredientsDiv.classList.add("materials");
        for (const [mat, count] of dict[craftable].ingredients) {
            let div = document.createElement('div');
            let num = document.createElement('span');
            num.innerText = count + "";
            num.classList.add("count");
            div.appendChild(num);
            let icon = document.createElement('img');
            icon.src = mat.img;
            icon.alt = mat.name;
            icon.title = mat.name;
            icon.classList.add("icon");
            div.appendChild(icon);
            ingredientsDiv.appendChild(div);
            cellWrap.appendChild(ingredientsDiv);
        }
        let unlockCell = row.insertCell();
        unlockCell.innerHTML = dict[craftable].unlock;
        let notesCell = row.insertCell();
        notesCell.innerHTML = dict[craftable].notes;
    }
    document.getElementById("tablesheet").replaceChildren(table);
}
document.getElementById("table_select").addEventListener('change', createTable);
document.getElementById("check").addEventListener('change', createTable);
createTable();
//# sourceMappingURL=index.js.map