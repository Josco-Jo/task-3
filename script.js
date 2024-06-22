// Question 1: Compare Two Objects
let obj1 = { name: "person1", age: 5 };
let obj2 = { age: 5, name: "person1" };
console.log(obj1 === obj2); // This will always be false as they are different objects in memory

let objequal = false;

let obj1keys = Object.keys(obj1).sort();
let obj2keys = Object.keys(obj2).sort();

if (obj1keys.length !== obj2keys.length) {
    console.log(objequal);
} else {
    const areEqual = obj1keys.every((key, index) => {
        const objValue1 = obj1[key];
        const objValue2 = obj2[key];
        return objValue1 === objValue2;
    });
    if (areEqual) {
        objequal = true;
    }
    console.log(objequal);
}

// Question 2: Display All Country Flags
let xhr = new XMLHttpRequest();
xhr.open("GET", "https://restcountries.com/v3.1/all");
xhr.send();
xhr.onload = function() {
    if (xhr.status === 200) {
        let result = JSON.parse(xhr.response);
        for (let i = 0; i < result.length; i++) {
            console.log(result[i].flags.png); // Accessing the flag image URL
        }
    } else {
        console.error("Error fetching data");
    }
};

// Question 3: Print All Countries' Names, Regions, Subregions, and Populations
let countries = new XMLHttpRequest();
countries.open("GET", "https://restcountries.com/v3.1/all");
countries.send();
countries.onload = function() {
    if (countries.status === 200) {
        let result = JSON.parse(countries.response);
        for (let i = 0; i < result.length; i++) {
            console.log(`Name: ${result[i].name.common}`);
            console.log(`Region: ${result[i].region}`);
            console.log(`Subregion: ${result[i].subregion}`);
            console.log(`Population: ${result[i].population}`);
        }
    } else {
        console.error("Error fetching data");
    }
};
