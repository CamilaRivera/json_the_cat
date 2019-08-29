// index.js
const { fetchBreedDescription } = require('./breedFetcher');

const breedName = process.argv[2];

fetchBreedDescription(breedName, (error, desc) => {
  if (error !== null) {
    console.log('Error fetch details:', error);
  } else {
    if (desc === null) {
      console.log('The breed wasn\'t found');
    } else {
      console.log(desc);
    }
  }
});


