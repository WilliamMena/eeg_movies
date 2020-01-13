This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

EEG Code Challenge Submission for [William Mena](mailto:williammena1991@gmail.com)

## Install

    $ git clone https://github.com/WilliamMena/eeg_movies.git
    $ cd eeg_movies
    $ npm install

## Create .env file

A .env file is needed to successfully use this application.<br />
This is how you're able to utilize the data from the backend.<br /> 
Rename the `.env.sample` to `.env`.<br/>
Inside of the .env file, insert a valid `API_KEY` directly after `REACT_APP_API_KEY=`, without quotation marks or brackets.

    REACT_APP_API_KEY=1234-0987-5432
    // Just an example. Not a valid key.

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.


# Challenge Requirements 

The base requirements were met.
- [x] Paginated List
- [x] Allow adding, editing, deleting movies
- [x] Allow searching, filtering, sorting of movies

To accomplish all this I've used a couple libraries.
Mainly [react-table](https://github.com/tannerlinsley/react-table/tree/master/examples/sub-components). <br />
The other packages were for handling things like API requests but could have been done with the `fetch()` API.

## Component Breakdown

So you may notice a number of components. Some can be ignored due to them being created during the initial moment when trying to figure out CRUD. Some kept for when testing `outside` of the Paginated table.

The ones listed here are the more notable one for the final execution.

### < Header />
Contains Logo and Name

### < Movies />
Container which houses the main `movieList`. Here is where the fetching of all the movies is located and primarily controls/displays the rest of the application.

### < MovieForm />
The form in where you're able to create and edit a movie. Functions for both are in this component.

### < CreateButton />
Button up center which, when clicked, opens a clean `MovieForm` for creation of a movie. Once created, the `movieList` is updated and rendered.

### < MovieRowButtons />
Came from MovieRow before using the Paginated Library. Now a component which houses the `edit` and `delete` buttons. When clicking `edit`, the `MovieForm` dominates the screen and presents itself with the populated movie data.

### < PaginatedMovieTable />
A paginated table that displays 10 per page, with the option of changing to 20. Sorting of each column can be done by clicking the actual table header. Clicking will sort in ascending order. Clicking again will sort in descending. Clicking one more time will remove the sort.

There is also a search input. Here you can type in what ever you like and it will search and filter all the data. All columns can be filtered in this search input. Not case sensitive.