"use strict";

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

// let num = 50;

// for (let i = 1; i < 10; i++) {
//   num++;
//   if (num === 59) {
//     break;
//   }

//   console.log(num);
// }





// var x2 = 0,
//     z2 = 0;
// CancelLoops: while (true) {
//   console.log('Внешний цикл: ' + x2);
//   x2 += 1;
//   z2 = 1;
//   while (true) {
//     console.log('Внутренний цикл: ' + z2);
//     z2 += 1;
//     if (z2 === 3 && x2 === 7) {
//       break CancelLoops;
//     } else if (z2 === 3) {
//       break;
//     }
//   }
// }





// let e = 0,
//     p = 0;
// myMetka2: while (true) {
//   console.log('Внешний цикл: ' + e);
//   e += 1;
//   p = 1;
//   while (true) {
//     console.log('Внутренний цикл: ' + p);
//     p += 1;
//     if (e === 2 && p === 7) {
//       break myMetka2;
//     } else if (p === 7) {
//       break;
//     }
//   }
// }








const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false
};

for (let i = 0; i < 2; i++) {
  const a = prompt('Один из последних просмотренных фильмов?', ''),
        b = prompt('На сколько оцените его?', '');
  if (a != '' && b != '' && a.length <= 50 && a != null && b != null) {
    personalMovieDB.movies[a] = b;
  } else {
    i--;
  }
}

let u = personalMovieDB.count;
if (u <= 10) {
  alert('Маловато фильмов');
} else if (u > 10 && u <= 30) {
  alert('Вы классический зритель');
} else if (u > 30) {
  alert('Вы киноман!');
}
console.log(personalMovieDB);