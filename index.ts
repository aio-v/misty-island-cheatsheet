import { Craftable } from './types'
import { tools, manufactures, structures, armor } from './dictionaries.js'

const tables = {
    'manufactures' : manufactures,
    'tools' : tools,
    'structures' : structures,
    'armor' : armor
}

function createTable() {
    let dict:{ [key: string]: Craftable} = tables[(document.getElementById("table_select") as HTMLSelectElement).value];

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

    // Body
    let tableBody = table.createTBody();
    for(let craftable in dict) {
        let row = tableBody.insertRow();
        let itemCell = row.insertCell();
        let img = document.createElement('img');
        img.src = dict[craftable].img;
        img.title = dict[craftable].name;
        img.alt = dict[craftable].name;
        img.classList.add("icon");
        itemCell.appendChild(img);
        let ingredientsCell = row.insertCell();
        ingredientsCell.classList.add("materials");
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
            ingredientsCell.appendChild(div);
        }
        let unlockCell = row.insertCell();
        unlockCell.innerHTML = dict[craftable].unlock;
    }
    document.getElementById("tablesheet").replaceChildren(table);
}

(document.getElementById("table_select") as HTMLSelectElement).addEventListener('change', createTable);
createTable();
