let inputn = document.querySelector(".input")
let button = document.querySelector(".submit")
let name = document.querySelector(".name")
let gender = document.querySelector(".gender")
let accuracy = document.querySelector(".accuracy")
let duration = document.querySelector(".duration")
let message = document.querySelector(".message")

let getGender = async () => {
    try {
        let textInput = inputn.value.trim()
        let response = await fetch(`https://gender-api.com/get?name=${textInput}&key=orDyQFjgVfF8cgVsV5CSoRAXkmjEtckDX9Q7`)
        let result = await response.json()
        if(result.gender === null || result.gender === undefined) {
            message.innerHTML = "<h2>I didn't quite get that, enter a new name...</h2>"
            message.style.color = "red"
        }
        else {
            name.innerHTML = `<h2>Name: ${result.name}</h2>`
            gender.innerHTML = `<h2>Gender: ${result.gender}</h2>`
            probability.innerHTML = `<h2>Accuracy: ${result.probability}</h2>`
            count.innerHTML = `<h2>Duration: ${result.count}</h2>`
            message.innerHTML = "<h2>Did I detect that correctly? :D </h2>"
            message.style.color = "green"
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