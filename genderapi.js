let inputn = document.querySelector(".input")
let button = document.querySelector(".button")
let name_sanitized = document.querySelector(".name")
let gender = document.querySelector(".gender")
let accuracy = document.querySelector(".accuracy")
// let country = document.querySelector(".country")  doesn't work properly
let samples = document.querySelector(".samples")
let message = document.querySelector(".message")
let genderm = 0;
let genderf = 0;
let genderu = 0;


//Detect Gender function using Gender Api 

let getGender = async () => {
    try {
        let textInput = inputn.value.trim()
        let response = await fetch(`https://gender-api.com/get?name=${textInput}&key=orDyQFjgVfF8cgVsV5CSoRAXkmjEtckDX9Q7`)
        let result = await response.json()
        

        if(result.gender === null || result.gender === 'unknown') {
            message.innerHTML = "<h4>I didn't quite get that, enter a new name...</h4>"
            message.style.color = "red"
        }
        else {
            name_sanitized.innerHTML = `<h4>Name: ${result.name_sanitized}</h4>`
            name_sanitized.style.color = "white"

            gender.innerHTML = `<h4>Gender: ${result.gender}</h4>`
            gender.style.color = "white"

            accuracy.innerHTML = `<h4>Accuracy: ${result.accuracy}</h4>`
            accuracy.style.color = "white"

            samples.innerHTML = `<h4>Number of samples used: ${result.samples}</h4>`
            samples.style.color = "white"

            //country.innerHTML = `<h2>Country of origin: ${result.country}</h2>`

            message.innerHTML = "<h4>Did I detect that correctly?</h4>"
            message.style.color = "Lime"
        }






            //Gender counter for the pie chart
            if(result.gender === 'female'){
                genderf++;
                console.log("There is this many female names generated: " + genderf);
            }
            else if (result.gender === 'male'){
                genderm++;
                console.log("There is this many male names generated: " + genderm);
            
            }
            else{
                genderu++;
                console.log("There is this many unknown names generated: " + genderu );

            }
                pieChart(genderf, genderm);

                

    } catch (error) {
        console.log(`${error}`)
    }
}


function pieChart(genderf, genderm){
    //pie chart

    anychart.onDocumentReady(function() {
        var data = [
            {x: "Female names", value: genderf,  exploded: true},
            {x: "Male names", value: genderm}
        ];
        
    
        var chart = anychart.pie();
        
        chart.title("Names detected");
        
    
        chart.data(data);
        
    
        chart.legend().position("right");
    
        chart.legend().itemsLayout("vertical");  
        
    
        chart.container('container');
        chart.draw();

});

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