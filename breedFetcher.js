const request = require('request');

const fetchBreedDescription = function(breedName, callback) {
  request('https://api.thecatapi.com/v1/breeds/search?q=' + breedName, (error, _, body) => {
    if (error) {
      callback(error);
    } else {
      const data = JSON.parse(body);
      if (data.length > 0) {
        callback(null, data[0].description.trim());
      } else {
        callback(null, null);
      }
    }
  });
};

module.exports = { fetchBreedDescription };

