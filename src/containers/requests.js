// headers --> use these at your own discretion
// const headers = {'Content-Type': 'application/json', 'Accepts': 'application/json'}
// urls
const restaurantsURL = 'http://localhost:4000/restaurants';
const commentsURL = 'http://localhost:4000/comments'
const usersURL = 'http://localhost:4000/users'

// parse incoming data
const parseData = (response) => response.json()
// error handler
const catchError = (error) => console.log(`%c${error}`, 'color: red;');


export const fetchRestaurants = () =>
    fetch(restaurantsURL).then(parseData).catch(catchError);

export const fetchOneRest = (id) =>
    fetch(restaurantsURL + `/${id}`).then(parseData).catch(catchError);

export const postUsers = (users) => {
    return fetch(usersURL, {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ users })
    })
}
export const postComments = (comment) => {
    return fetch(commentsURL, {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ comment })
    })
}

export const searchRestaurants = (data) =>
    fetch(restaurantsURL + `/search?q=${data}`).then(parseData).catch(catchError);

