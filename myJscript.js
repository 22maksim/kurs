"use strict";

const numberOfFilms = prompt('Сколько фильмов вы уже посмотрели?', '');

const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false
};

const a = prompt('Один из последних просмотренных фильмов?', ''),
      b = prompt('На сколько оцените его?', ''),
      c = prompt('Один из последних просмотренных фильмов?', ''),
      d = prompt('На сколько оцените его?', '');

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

console.log(personalMovieDB);

function myFunction() {
  document.getElementById('maksim').innerHTML = personalMovieDB.movies[a];
}


if () {
  console.log('Ok!');
} else {
  console.log('Error!');
}

// if (num < 49) {
//   console.log('Error');
// } else if (num > 100) {
//   console.log('Other');
// } else {
//   console.log('Ok!');
// }

// (num == 10) ? console.log('False') : console.log('Ok!');



// switch (num) {
//   case 49:
//     console.log('Неверно');
//     break;
//   case 100:
//     console.log('Неверно');
//     break;
//   case 50:
//     console.log('В точку!');
//     break;
//   default:
//     console.log('не верно.');
//     break;
// }



// while (num <= 55) {
//   console.log(num);
//   num++;
// }

// do {
//   console.log(num);
//   num++;
// }
// while (num < 55);

let num = 50;

for (let i = 1; i < 10; i++) {
  num++;
  if (num === 59) {
    break;
  }

  console.log(num);
}
