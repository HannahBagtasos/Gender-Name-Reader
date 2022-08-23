let inputn = document.querySelector(".input")
let button = document.querySelector(".button")
let name_sanitized = document.querySelector(".name")
let gender = document.querySelector(".gender")
let accuracy = document.querySelector(".accuracy")
// let country = document.querySelector(".country")  doesn't work properly
let samples = document.querySelector(".samples")
let message = document.querySelector(".message")
var genderm = 0;
var genderf = 0;
var genderu = 0;


//Detect Gender function using Gender Api 

let getGender = async () => {
    try {
        let textInput = inputn.value.trim()
        let response = await fetch(`https://gender-api.com/get?name=${textInput}&key=orDyQFjgVfF8cgVsV5CSoRAXkmjEtckDX9Q7`)
        let result = await response.json()
        

        if(result.gender === null || result.gender === 'undefined') {
            message.innerHTML = "<h4>Sorry I didn't quite get that, enter a new name...</h4>"
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

                //Pie chart

                var xValues = ["Male", "Female"];
                var yValues = [genderm, genderf];
                
                var barColors = [
                  "#b91d47",
                  "#00aba9"
                ];
                
                new Chart("myChart", {
                  type: "pie",
                  data: {
                    labels: xValues,
                    datasets: [{
                      backgroundColor: barColors,
                      data: yValues
                    }]
                }
                });
                

    } catch (error) {
        console.log(`${error}`)
    }
}


//json list

const myJSON =  [
    {
        "firstname":"John",
        "secondname":"Swift"
    }, 
    {
        "firstname":"Olivia", 
        "secondname":"Goldsmith"
    },
    {
        "firstname":"William ", 
        "secondname":"Butler Yeats"
    },
    {
        "firstname":"Elizabth", 
        "secondname":"Brown"
    },
    {
        "firstname":"William", 
        "secondname":"Trevor"
    }
]

//$('pre').html(JSON.stringify(data, undefined, 2));




var editable = document.getElementById('editableDiv'),
textContent = editable.textContent;
// editable is "Here is some encoded text."




button.addEventListener("click", getGender)


/* old pie chart
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
        chart.data();
        chart.draw();
        
        anyChartView.setChart(chart);

       
       

});
*/
/*const updatePieChart = (data, dataOrder)=> {
    genderf.addEventListener('change', e =>{
    chart.data(data) = e.target.value;
    chart.update();
    })
}


}
*/
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