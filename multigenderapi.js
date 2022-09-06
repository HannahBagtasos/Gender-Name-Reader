var apiEndpoint = "https://gender-api.com/v2/gender"
var urlParams = new URLSearchParams(window.location.search);
var xhr = new XMLHttpRequest();
var form = document.getElementById("form");
var gender2m = 0;
var gender2f = 0;
var gender2u = 0;
                                   
var result2 = document.getElementById("result2");
var gender2 = document.getElementById("gender2");
var authToken = urlParams.get("authToken");
var json = document.getElementById("json");
json.value = urlParams.get("json");
//document.getElementById("apiEndpoint").innerHTML = apiEndpoint;
//document.getElementById("header").innerHTML = "Authorization: Bearer " + authToken;

form.addEventListener("submit", function(evt) {
  evt.preventDefault();
  var requestPayload = JSON.parse(json.value);

  xhr.open("POST", apiEndpoint);
  xhr.setRequestHeader("Content-Type", "application/json");
  xhr.setRequestHeader("Authorization", "Bearer " + "02dd39f7e003776aa4ba778a0df38c002a051d7086b8fae1c6915ac9f756d55a");

   xhr.onload = function() {
    if (xhr.status === 200) {
      //result2.textContent = xhr.responseText;
      //result2.style.display = "inline-block";
     //Gender counter for the pie chart
     var response2 = JSON.parse(xhr.responseText) 
    
    for(person in response2){
     if(response2[person].gender === 'female'){
        gender2f++;
        console.log("There is this many female names generated: " + gender2f);
    }
    else if (response2[person].gender === 'male'){
        gender2m++;
        console.log("There is this many male names generated: " + gender2m);
    
    }
    else{
        gender2u++;
        console.log("There is this many unknown names generated: " + gender2u );

    } 
    
    //Pie chart

        var xValues = ["Male", "Female"];
        var yValues = [gender2m, gender2f];
        
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

        
       
    }
    

     
        
    }
   // console.log(xhr.responseText);


  };
  xhr.send(JSON.stringify(requestPayload));
});









































/*
let multibutton = document.querySelector(".button")
let multi_name_sanitized = document.querySelector(".name")
let multigender = document.querySelector(".gender")
let multiaccuracy = document.querySelector(".accuracy")
// let country = document.querySelector(".country")  doesn't work properly
let multisamples = document.querySelector(".samples")
let multimessage = document.querySelector(".message")
let multitextArea = document.querySelector(".textArea")
var multigenderm = 0;
var multigenderf = 0;
var multigenderu = 0;


    //file reader
    function onChange(event) {
        var reader = new FileReader();
        reader.onload = readFile;
        reader.readAsText(event.target.files[0]);
    }
    
    //puts data into a loop to only get author name
    function readFile(event){
        var object = JSON.parse(event.target.result);
        var nameString = ""
        for(author in object.books){
            var fullName = object.books[author].author;
            var firstname = fullName.split(' ',1);
            nameString += firstname[0] + ";";
            let multiName = async () => {
                try {
                    
                    let mutliresponse = await fetch(`https://gender-api.com/get?name=${nameString}&multi=true&key=orDyQFjgVfF8cgVsV5CSoRAXkmjEtckDX9Q7`)
                    let multiresult = await response.json()
        
                    if(multiresult.multigender === null || multiresult.multigender === 'undefined') {
                        message.innerHTML = "<h4>Sorry I didn't quite get that, enter a new name...</h4>"
                        message.style.color = "red"
                    }
                    else {
                        multi_name_sanitized.innerHTML = `<h4>Name: ${multiresult.multi_name_sanitized}</h4>`
                        multi_name_sanitized.style.color = "white"
            
                        multigender.innerHTML = `<h4>Gender: ${multiresult.gender}</h4>`
                        multigender.style.color = "white"
            
                        multiaccuracy.innerHTML = `<h4>Accuracy: ${multiresult.accuracy}</h4>`
                        multiaccuracy.style.color = "white"
            
                        multisamples.innerHTML = `<h4>Number of samples used: ${multiresult.samples}</h4>`
                        multisamples.style.color = "white"
            
                        //country.innerHTML = `<h2>Country of origin: ${multiresult.country}</h2>`
            
                        multimessage.innerHTML = "<h4>Did I detect that correctly?</h4>"
                        multimessage.style.color = "Lime"
            
                        console.log(multiresult);
                    }
         
            
                        //Gender counter for the pie chart
                        if(multiresult.multigender === 'female'){
                            multigenderf++;
                            console.log("There is this many female names generated: " + genderf);
                        }
                        else if (multiresult.multigender === 'male'){
                            multigenderm++;
                            console.log("There is this many male names generated: " + genderm);
                        
                        }
                        else{
                            multigenderu++;
                            console.log("There is this many unknown names generated: " + genderu );
            
                        }
            
                            //Pie chart
            
                            var xValues = ["Male", "Female"];
                            var yValues = [multigenderm, multigenderf];
                            
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
            button.addEventListener("click", multiName)
        }

    }


    document.getElementById('file').addEventListener('change', onChange);

   
   */
    

