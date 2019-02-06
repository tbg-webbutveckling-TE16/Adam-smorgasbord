var movies = [
    {
        title: "Hobbit",
        rating: "4.5",
        hasWatched: true
    },
    {
        title: "Teletubbies",
        rating: "5",
        hasWatched: true
    },
    {
        title: "Glass",
        rating: "4,5",
        hasWatched: false
    },
];
movies.forEach(function(movie)
{
    if (movie.hasWatched == true){
        console.log("- You have seen " + movie.title + " - " + movie.rating)
    }
    else{
        console.log("- You have not seen " + movie.title + " - " + movie.rating)
    }
});