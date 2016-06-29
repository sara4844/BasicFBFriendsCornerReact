# BasicFBFriendsCornerReact
This project is still in progress. It is built in order to learn ReactJS and how to store state using the Flux paradigm.

A basic yellow book app which keeps information about users and their friends

##Semantic-ui api
This ui framework is used for the underlying style. Requires Gulp.

<b>npm install semantic-ui</b> to include as dependency.

##App directory walkthrough

<b>--app

----actions

------AppActions.js </b><i>flux paradigm component which takes in requests to send to the store. Currently only createUser sends requests</i>

<b>----components

------createUser </b><i>handles new user creation</i>

<b>--------AddFriends.js</b> <i>handles user input of friends and stores it temporarily, to be sent in an object package later on</i>

<b>--------CreateUser.js </b><i>takes user input through a form and sends the input via appActions to the store</i>

<b>--------Showlist.js </b><i>will render any array as an unordered list</i>

<b>------DisplayUser.js </b><i>handles the view of a specific user's info. Upon lookup by username, this view will display the user's info if the user exists</i>

<b>------Profile.js </b><i>handles all future user lookups</i>

<b>------UserIs.js </b><i>handles initial user lookup on first load</i>

<b>----config

------routes.js 

----constants

------AppConstants.js </b><i>flux paradigm file which stores action constants</i>

<b>----dispatcher

------AppDispatcher.js </b><i>flux paradigm component which sends payload requests</i>

<b>----stores

------AppStores.js </b><i>flux paradigm component which stores the state of the app</i>

<b>----index.html

----index.js</b>

