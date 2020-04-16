// headers --> use these at your own discretion
// const headers = {'Content-Type': 'application/json', 'Accepts': 'application/json'}
// urls
const restaurantsURL = 'http://localhost:4000/restaurants';
const commentsURL = 'http://localhost:4000/comments'
const usersURL = 'http://localhost:4000/users'

export const fetchRestaurants = () =>
    fetch(restaurantsURL)

export const fetchOneRest = (id) =>
    fetch(restaurantsURL + `/${id}`)

export const fetchUser = (email) =>
    fetch(usersURL + `/login?q=${email}`)

export const postUsers = (users) => {
    return fetch(usersURL, {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ users })
    })
}

export const patchUsers = (users, id) => {
    return fetch(usersURL + `/${id}`, {
        method: "PATCH",
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
    fetch(restaurantsURL + `/search?q=${data}`)

