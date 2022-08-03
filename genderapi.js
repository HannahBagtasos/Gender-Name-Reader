let inputn = document.querySelector(".input")
let button = document.querySelector(".submit")
let name_sanitized = document.querySelector(".name")
let gender = document.querySelector(".gender")
let accuracy = document.querySelector(".accuracy")
// let country = document.querySelector(".country")  doesn't work properly
let samples = document.querySelector(".samples")
let message = document.querySelector(".message")

let getGender = async () => {
    try {
        let textInput = inputn.value.trim()
        let response = await fetch(`https://gender-api.com/get?name=${textInput}&key=orDyQFjgVfF8cgVsV5CSoRAXkmjEtckDX9Q7`)
        let result = await response.json()
        if(result.gender === null || result.gender === 'unknown') {
            message.innerHTML = "<h2>I didn't quite get that, enter a new name...</h2>"
            message.style.color = "macaroon"
        }
        else {
            name_sanitized.innerHTML = `<h2>Name: ${result.name_sanitized}</h2>`
            name_sanitized.style.color = "white"

            gender.innerHTML = `<h2>Gender: ${result.gender}</h2>`
            gender.style.color = "white"

            accuracy.innerHTML = `<h2>Accuracy: ${result.accuracy}</h2>`
            accuracy.style.color = "white"

            samples.innerHTML = `<h2>Number of samples used: ${result.samples}</h2>`
            samples.style.color = "white"

            //country.innerHTML = `<h2>Country of origin: ${result.country}</h2>`

            message.innerHTML = "<h2>Did I detect that correctly?</h2>"
            message.style.color = "Lime"
        }
    } catch (error) {
        console.log(`${error}`)
    }
}

button.addEventListener("click", getGender)










/*default template on Gender API's website
try {
    var GenderApi = require('gender-api.com-client');

    var genderApiClient = new GenderApi.Client('orDyQFjgVfF8cgVsV5CSoRAXkmjEtckDX9Q7');

    genderApiClient.getByFirstName('elizabeth', function (response) {
        console.log(response.gender); 
        console.log(response.accuracy); 
    });

    genderApiClient.getByFirstNameAndCountry('john', 'US', function (response) {
        console.log(response.gender); 
        console.log(response.accuracy);
    });

}
catch(e) {
    console.log('Error:', e);
}

*/