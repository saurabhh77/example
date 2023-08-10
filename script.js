// //initial references

// let movieNameRef = document.getElementById("movie-name");

// let searchBtn = document.getElementById("search-btn");

// let result = document.getElementById("result");

// //Function to fetch data from API

// let getMovie = () => {
//   let movieName = movieNameRef.value;

//   let url = `http://www.omdbapi.com/?t=${movieName}&apikey=${key}`;

//   //if input field is empty
//   if (movieName.length <= 0) {
//     result.innerHTML = `<h3 class="msg">please enter a movie name</h3>`;
//   }

//   //if input field is not empty
//   else {
//     fetch(url)
//       .then((resp) => resp.json())
//       .then((data) => {
//         console.log(data);
//         // console.log(data.Poster);
//       });
//   }
// };

// window.addEventListener("load", getMovie);

const Car = function (make, speed) {
  this.make = make;
  this.speed = speed;
};

Car.prototype.accelerate = function () {
  return this.speed + 10;
};

Car.prototype.brake = function () {
  return this.speed - 5;
};

const BMW = new Car("bmw", 20);
const Merc = new Car("merc", 40);

console.log(BMW.accelerate());
console.log(Merc.brake());

console.log(BMW);
