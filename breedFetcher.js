const request = require('request');

const breedName = process.argv[2];

const fetchBreedDescription = function(breedName, callback) {
  const url = `https://api.thecatapi.com/v1/breeds/search?q=${breedName}`;
  request(url, (error, response, body) => {
    // console.log('body', body); // body is a string
    if (error) {
      console.log('Invalid URL');
      process.exit();
    }
    const data = JSON.parse(body); // parse string to object
    // console.log('data', data);
    // console.log('typeof data', typeof data) // data is an object
    if (data.length === 0) {
      console.log('Breed not found');
      process.exit();
    } else {
      console.log(data[0].description);
    }
  });
};

// fetchBreedDescription(breedName);

module.exports = {
  fetchBreedDescription,
};







// > node breedFetcher.js Chartreux
// The Chartreux is generally silent but communicative. Short play sessions, mixed with naps and meals are their perfect day. Whilst appreciating any attention you give them, they are not demanding, content instead to follow you around devotedly, sleep on your bed and snuggle with you if you’re not feeling well.