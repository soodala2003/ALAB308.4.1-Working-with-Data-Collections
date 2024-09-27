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
// convert each value in the first row to lowercase letters 
let heading = rowsArray[0];

for (let j = 0; j < heading.length; j++) {
    rowsArray[0][j] = heading[j].toLowerCase();
}

// check the conversion of lowercase letters
console.log(rowsArray);

// extract properties for keys
let properties = [];

for (let k = 0; k < rowsArray[0].length; k++) {
    properties[k] = rowsArray[0][k];
}

let rowsObject = [];
let count = 0;

for (let m = 1; m < rowsArray.length; m++) {
    let transformData = {};
    for (let n = 0; n < rowsArray[0].length; n++) {
        if (transformData == {}) {  
            transformData = {[properties[n]]: rowsArray[m][n]};
        } else {
              transformData[properties[n]] = rowsArray[m][n];
        }
    }
    rowsObject[count] = transformData; 
    count++;
}
console.log(rowsObject);

// Part 4: Sorting and Manipulating Data
// remove the last element from 'rowsObject'
const lastObject = rowsObject.pop();

// check the last element was removed
console.log(rowsObject);

// insert an object at index 1
let insertObject = { id: "48", name: "Barry", occupation: "Runner", age: "25" };
let removedObject = rowsObject.splice(1, 0, insertObject);
console.log(rowsObject);

// add an object to the end of the array
let addedObject = { id: "7", name: "Bilbo", occupation: "None", age: "111" };
rowsObject.push(addedObject);
console.log(rowsObject);

// claculate the average age of the group
const keys = Object.keys(rowsObject[0]); // ["id", "name", "occupation", "age"]

let sum = 0;
for (let c = 0; c < rowsObject.length; c++) {
    sum += Number(rowsObject[c][keys[keys.length - 1]]);
}

let averageAge = sum / (rowsObject.length);
console.log("The average age: " + averageAge);

// Part 5: Full Circle
console.log(rowsObject);

// remove the addedObject object from the end of the array
let addedRowObject = rowsObject.pop();
console.log(rowsObject);

// remove the insertObject object at index 1
let insertedObject = rowsObject.splice(1, 1);
console.log(rowsObject);

// add the lastObject object which was removed at the end of the array
rowsObject.push(lastObject);
console.log(rowsObject);

