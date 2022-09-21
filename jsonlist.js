var apiEndpoint = "https://gender-api.com/v2/gender"
var urlParams = new URLSearchParams(window.location.search);
var xhr = new XMLHttpRequest();
var gender2m = 0;
var gender2f = 0;
var gender2u = 0;

function jsonReader(event){
    var fr = new FileReader();
    fr.onload = readFile;
    fr.readAsText(event.target.files[0]);
}
function readFile(event){
    var object = JSON.parse(event.target.result);

    xhr.open("POST", apiEndpoint);
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.setRequestHeader("Authorization", "Bearer " + "02dd39f7e003776aa4ba778a0df38c002a051d7086b8fae1c6915ac9f756d55a");
    
    xhr.onload = function() {
        if (xhr.status === 200) {
            var response2 = JSON.parse(xhr.responseText)
            console.log(response2)
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
    xhr.send(JSON.stringify(object));
}
document.getElementById('selectFiles').addEventListener('change', jsonReader);
 
