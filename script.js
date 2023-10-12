function display(message) {
    document.getElementById("result").innerHTML += message + "<br>";
}

let allMovies = [];

//Define a movie class with parameters title (string), rating (number) and haveWatched (boolean)
class Movie {
    constructor (title, rating, haveWatched) {
        this.title = title;
        this.rating = rating;
        this.haveWatched = haveWatched;
    }
}

//add a movie OBJECT to the allMovies array
let addMovie = (movie) => {
    allMovies.push(movie);
    //display("----------------");
    display("A new movie is added");
    //display("----------------");

}


//iterate through all elements of allMovies array
//Display the total number of movies in allMovies array
let printMovies = () => {
    /*display("----------------");
    display("running program......");
    display("----------------");
    */

    display("Printing all movies....");
  
    
    for (let movie of allMovies) {
      display(`${movie.title}, rating of ${movie.rating}, havewatched: ${movie.haveWatched}`);
    }

    display(`<br>You have ${allMovies.length} movies in total`);
}


//Display only the movies that has a rating higher than rating(argument)
//Display the total number of matches
let highRatings = (rating) => {
    let highRatedMovies = allMovies.filter((movie) => movie.rating >= rating);

    display(`printing movie that has a rating higher than ${rating}:`);

    for (let movie of highRatedMovies) {
        display(`${movie.title} has a rating of ${movie.rating}`);
    }
    display(`<br>In total, there are ${highRatedMovies.length} matches`);

}


//Toggle the 'haveWatched' property of the specified movie 
let changeWatched = (title) => {
    let movie = allMovies.find((movie) => movie.title === title);
    movie.haveWatched = !movie.haveWatched;
    display("changing the status of the movie...");
}



////////////////////////////////////////////////////////////
//Test code - DO NOT DELETE
let x = new Movie("Spiderman", 3, true);
let y = new Movie("Citizen Kane", 4, false);
let z = new Movie("Zootopia", 4.5, true);

allMovies.push(x,y,z);

/*replace console.log with display on web page*/
display("----------------");
display("running program......");
display("----------------");
printMovies();


let movie1 = new Movie("Parasite", 2, false);

/*replace console.log with display on web page*/
display("----------------");
addMovie(movie1);
display("----------------");



changeWatched("Spiderman");
/*replace console.log with display on web page*/
display("----------------");

printMovies();

/*replace console.log with display on web page*/
display("----------------");

changeWatched("Spiderman");
/*replace console.log with display on web page*/
display("----------------");

printMovies();
/*replace console.log with display on web page*/
display("----------------");

highRatings(3.5);