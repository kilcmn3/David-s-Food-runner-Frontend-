// headers --> use these at your own discretion
// const headers = {'Content-Type': 'application/json', 'Accepts': 'application/json'}
// urls
const restaurantsURL = 'http://localhost:4000/restaurants';
// parse incoming data
const parseData = (response) => response.json()
// error handler
const catchError = (error) => console.log(`%c${error}`, 'color: red;');

//////////////////////////////////////////////////////

// Fetches for kaijus, will return a promise
// GET /kaijus
export const fetchRestaurants = () =>
    fetch(restaurantsURL).then(parseData).catch(catchError);

export const searchRestaurants = (data) =>
    fetch(restaurantsURL + `/search?q=${data}`).then(parseData).catch(catchError);
// TODO: define a few more kaiju fetches
