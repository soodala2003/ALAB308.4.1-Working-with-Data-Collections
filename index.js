// Part 1: Refactoring Old Code
const str = "ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26";
const rows = str.split('\n');
const rowsArray = [];

for (let i = 0; i < rows.length; i++) {
    rowsArray[i] = rows[i].split(',');
}

// Part 2: Expanding Functionality
console.log(rowsArray);

// Part 3: Transforming Data
// to convert each value in the first row to lowercase letters 
let heading = rowsArray[0];

for (let j = 0; j < heading.length; j++) {
    rowsArray[0][j] = heading[j].toLowerCase();
}

// to check the conversion of lowercase letters
console.log(rowsArray);



