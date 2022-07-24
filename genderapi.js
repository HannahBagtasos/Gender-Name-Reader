
try {
    var GenderApi = require('gender-api.com-client');

    var genderApiClient = new GenderApi.Client('orDyQFjgVfF8cgVsV5CSoRAXkmjEtckDX9Q7');

    genderApiClient.getByFirstName('elizabeth', function (response) {
        console.log(response.gender); //female
        console.log(response.accuracy); //98
    });

    genderApiClient.getByFirstNameAndCountry('john', 'US', function (response) {
        console.log(response.gender); //male
        console.log(response.accuracy); //99
    });

}
catch(e) {
    console.log('Error:', e);
}