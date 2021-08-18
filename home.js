function slideShow() {
  
    const movieImages = ["https://wallpapercave.com/wp/wp2162756.jpg","https://wallpapercave.com/wp/wp2162758.jpg","https://wallpapercave.com/wp/wp2162759.jpg","https://wallpapercave.com/wp/wp2162760.jpg"]
    let div = document.getElementById("slideShow")
    let img = document.createElement("img")
    
    let i=0;
    img.src=movieImages[0]
    div.append(img)

    setInterval(function(){
        if(i == movieImages.length){
            i=0
        }
        img.src = movieImages[i]
        i++
    },3000)
}
slideShow()

const movieList =[
    {
        poster:"https://wallpapercave.com/wp/wp4770368.jpg",
        id:1,
        name:"Avengers",
        imdbRating:8.0,
        releaseDate:2012
    },
    {
        poster:"https://www.teahub.io/photos/full/258-2582169_shawshank-redemption-poster.jpg",
        id:2,
        name:"The shawshank redemption",
        imdbRating:9.3,
        releaseDate:1994
    },
    {
        poster:"https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg",
        id:3,
        name:"The Godfather",
        imdbRating:9.2,
        releaseDate:1972
    },
    {
        poster:"https://i.pinimg.com/564x/ff/69/47/ff69471d65d45d29554b817812646395.jpg",
        id:4,
        name:"The Dark Night",
        imdbRating:9.0,
        releaseDate:2008
    },
    {
        poster:"https://m.media-amazon.com/images/M/MV5BMWMwMGQzZTItY2JlNC00OWZiLWIyMDctNDk2ZDQ2YjRjMWQ0XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg",
        id:5,
        name:"The God Father part 2",
        imdbRating:9.0,
        releaseDate:1974
    },
    {
        poster:"https://c8.alamy.com/comp/2BKBD96/movie-poster-12-angry-men-1957-2BKBD96.jpg",
        id:6,
        name:"12 Angry Men",
        imdbRating:9.0,
        releaseDate:1984
    },
    {
        poster:"http://www.impawards.com/2003/posters/lord_of_the_rings_the_return_of_the_king.jpg",
        id:7,
        name:"The Lord Of THe Rings:the return of the king",
        imdbRating:8.9,
        releaseDate:2003
    },
    {
        poster:"https://www.teahub.io/photos/full/27-278528_pulp-fiction-wallpaper-poster.jpg",
        id:8,
        name:"Pulp Fiction",
        imdbRating:8.9,
        releaseDate:1974
    },
    {
        poster:"http://www.noreruns.net/wp-content/uploads/2018/12/Schindler-4K-Front-e1544989465430-255x300.jpg",
        id:9,
        name:"Schindler's List",
        imdbRating:8.9,
        releaseDate:1993
    }
]
if(localStorage.getItem("movieList") == null){
    console.log("hello")
    localStorage.setItem("movieList",JSON.stringify(movieList))
}

function showMovieList(d) {
    let movieList = d



    let movieDiv = document.getElementById("movieList")

        movieDiv.innerHTML = null

         movieList.forEach(function (el) {

        let div = document.createElement("div")
        div.setAttribute("class","moviePoster")

        // let id_num = document.createElement("p")
        // id_num.innerText = "SI No"+": "+el.id;

        let name = document.createElement("h3")
        name.setAttribute("class","movieTitleHeading")
        name.innerText = el.name;

        let imdbRating = document.createElement("p")
        imdbRating.innerText ="IMDB Rating --"+"  "+  el.imdbRating;

        let releaseDate = document.createElement("p")
        releaseDate.innerText = "Release Date"+ "--"+el.releaseDate;

        let img = document.createElement("img")
        img.src =el.poster

        div.append(img,name,imdbRating,releaseDate)
        movieDiv.append(div)
    })
}
showMovieList(JSON.parse(localStorage.getItem("movieList")))//default student show

function sortLh(){
    let movieList = JSON.parse(localStorage.getItem("movieList"))
        movieList= movieList.sort(function(a,b){
       return a.imdbRating- b.imdbRating
   })
   showMovieList(movieList)//sorted students show
}


function sortHl(){
    let movieList = JSON.parse(localStorage.getItem("movieList"))
        movieList= movieList.sort(function(a,b){
       return b.imdbRating- a.imdbRating
   })
   showMovieList(movieList)
}


function sortYear() {
    let movieList = JSON.parse(localStorage.getItem("movieList"))
    movieList = movieList.sort(function (a,b) {
        return a.year - b.year
    })
    showMovieList(movieList)
}