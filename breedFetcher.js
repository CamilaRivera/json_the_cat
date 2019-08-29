const request = require('request');

const input = process.argv;
const breedName = input[2];


  request('https://api.thecatapi.com/v1/breeds/search?q=' + breedName, (error, _, body) => {
    if (error) {
      console.log('error:', error); // Print the error if one occurred
    } else {
      const data = JSON.parse(body);
      if (data.lenght > 0) {
        console.log(data[0].description);
      } else {
        console.log(" The breed you are looking for doesn't exists");
      }
      
    }
  });

