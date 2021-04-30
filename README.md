Wait or no More Wait App

# Yelp clone(Restaurant search app) - ForntEnd Repository

### Login Page

---

![Alt text](screenshots/login.jpg?raw=true 'login Page')

### Home Page

---

![Alt text](screenshots/home-1.PNG?raw=true 'Home Page ')

### View Page

---

![Alt text](screenshots/view-1.PNG?raw=true 'View')

---

## Technologies Used

- React js
- React route
- Bcrypt js
- formik
- CSS:react-bootstrap

# Known Bugs

- New user, if password is not followed guideline, the alret message show as 'Someone using that email'
- pagination: if list of items are more than 30 and hit back (ex. going from page 2 to page 1) it shows the very last of list.
- Search, when search a keyword it also return result with non related result as well.

# Improvements

- Sign up should be easy and understandable for a new user.
- Search results should list by closet distance.
- User can make favorite restaurants list(current the functionality is not avaliable).
- User token after login(Instead of setting toke to localStorage.. should be better way to handle it.).

---

# User Stories

- Yelp cloning(lite version)

## User can..

As a user, I can ...

- User can signup/log in
- User can search restaurants that nearby location.
- User can view details of each list of itmes
- User able to write comments every itmes of the list and edit/delete as well.
