// const restaurantsURL =
//   'https://david-s-food-runner-backend.herokuapp.com/restaurants';

// const commentsURL =
//   'https://david-s-food-runner-backend.herokuapp.com/comments';

// const usersURL = 'https://david-s-food-runner-backend.herokuapp.com/users';

const restaurantsURL = 'http://localhost:4000/restaurants';
const commentsURL = 'http://localhost:4000/comments';
const usersURL = 'http://localhost:4000/users';

export const fetchComments = (id) =>
  fetch(restaurantsURL + `/comments` + `/${id}`);
export const fetchOneRest = (id) => fetch(restaurantsURL + `/${id}`);
export const fetchRestaurants = () => fetch(restaurantsURL);
export const fetchUser = (email) => fetch(usersURL + `/login?q=${email}`);
export const fetchUserById = (id) => fetch(usersURL + `/${id}`);
export const searchRestaurants = (data) =>
  fetch(restaurantsURL + `/search?q=${data}`);

export const patchUsers = (users, id) => {
  return fetch(usersURL + `/${id}`, {
    method: 'PATCH',
    headers: { 'content-type': 'application/json' },
    body: JSON.stringify({ users }),
  });
};

export const postComments = (comment) => {
  return fetch(commentsURL, {
    method: 'POST',
    headers: { 'content-type': 'application/json' },
    body: JSON.stringify({ comment }),
  });
};

export const postUsers = (users) => {
  return fetch(usersURL, {
    method: 'POST',
    headers: { 'content-type': 'application/json' },
    body: JSON.stringify({ users }),
  });
};

export const deleteComment = (id) => {
  return fetch(commentsURL + `/${id}`, { method: 'DELETE' });
};
