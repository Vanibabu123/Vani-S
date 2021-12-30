const getCountries = () => {
    console.log("Getting countries....");
    //XMLHttpRequest()
// creating the request
const xhr = new XMLHttpRequest();
//Reading the data
//METHOD, URL
xhr.open("GET", "https://restcountries.com:/v3.1/all"); //open
xhr.send(); //send
xhr.responseType = "json"; //data format

// After getting the response, print on console
xhr.onload = () => {
    const countries = xhr.response;
    const countryNames = countries.map((country) => country.name.common);
    const conLanguages = countries.map((country) => country.languages);
    const spanish = conLanguages.spa;
    if(countries.spanish === countries.spanish) {
        console.log("Countrie names of Spanish", countryNames);
    }
    //console.log(countries.languages);
    //if(countryNames.)
    console.log("Full data", countries, countryNames);
    console.log("Full data", countries, conLanguages);
};
};
getCountries();

// Transform -  map
// Array of objects -> Array of strings

//const countryNames = countries.map((country) => country.name);

//console.log(countryNames);

//Task// Find all countries that speak spanish// Expected output// ["spain", "mexico"...]
// Find all countries names with more than 1_00_00_000 population// ["India", "China", "RUSSIA"]
// Task - deposit
//https://chrome.google.com/webstore/detail/json-viewer/gbmdgpbipfallnflgajpaliibnhdgobh
