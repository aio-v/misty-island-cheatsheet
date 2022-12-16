import { Item, Craftable } from './types'
import { items as materials, tools, manufactures, structures, armor, weapons, defend } from './dictionaries.js'

const tables = {
    'manufactures' : manufactures,
    'tools' : tools,
    'structures' : structures,
    'armor' : armor,
    'weapons': weapons,
    'defend': defend,
}


function isCraftable(x: any): x is Craftable {
    return x.ingredients !== undefined;
};

function getBaseMaterials(recipe: [Item, number], mats: { [key: string]: number }) {
    if(!isCraftable(recipe[0])) {
        mats[recipe[0].name] = (mats[recipe[0].name] || 0) + recipe[1];
        return;
    }
    else {
        let c = recipe[0] as Craftable;
        for(const [i, n] of c.ingredients) {
            getBaseMaterials([i, n * recipe[1]], mats);
        }
    }
}

function convertMaterials(table: { [key: string]: Craftable } ) {
    let result: { [key: string]: Craftable } = {};
    
    for(let item in table) {
        let mats: { [key: string]: number } = {};
        getBaseMaterials([table[item], 1], mats);

        result[item] = {
            ...table[item],
            ingredients: Object.entries(mats).map(([k,v]) => {
                return [materials[k], v];
            }),
        }
    }

    return result;
}

function createTable() {
    let dict:{ [key: string]: Craftable } = (document.getElementById("check") as HTMLInputElement).checked ? 
        convertMaterials(tables[(document.getElementById("table_select") as HTMLSelectElement).value]) :
        tables[(document.getElementById("table_select") as HTMLSelectElement).value];

    let table = document.createElement('table');
    table.classList.add("craft");

    // Header
    let tableHeader = table.createTHead();
    let headerRow = tableHeader.insertRow();
    let cell = headerRow.insertCell(0);
    cell.innerHTML = "Item";
    let cell2 = headerRow.insertCell(1);
    cell2.innerHTML = "Materials";
    let cell3 = headerRow.insertCell(2);
    cell3.innerHTML = "Unlocked By";
    let cell4 = headerRow.insertCell(3);
    cell4.innerHTML = "Notes";
    

    // Body
    let tableBody = table.createTBody();
    for(let craftable in dict) {
        let row = tableBody.insertRow();
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
        for(const [mat, count] of dict[craftable].ingredients) {
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

(document.getElementById("table_select") as HTMLSelectElement).addEventListener('change', createTable);
(document.getElementById("check") as HTMLSelectElement).addEventListener('change', createTable);
createTable();
