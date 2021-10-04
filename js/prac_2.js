'use strict';
 
const personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
    start: function() {
        this.count = +prompt('Сколько фильмов вы уже посмотрели?', '');
    
        while (this.count == '' || this.count == null || isNaN(this.count)) {
            this.count = +prompt('Сколько фильмов вы уже посмотрели?', '');
        }
    },
    rememberMyFilms: function() {
        for (let i = 0; i < 2; i++) {
            const a = prompt('Один из последних просмотренных фильмов?', ''),
                  b = +prompt('На сколько оцените его?', '');
        
            if (a != null && b != null && a != '' && b != '' && a.length < 50) {
                this.movies[a] = b;
            } else {
                console.log('Error');
                i--;
            }
        }
    },
    detectPersenalLevel: function() {
        if (this.count < 10) {
            console.log('Просмотрено довольно мало фильмов');
        } else if (this.count >= 10 && this.count <= 30) {
            console.log('Вы классический зритель');
        } else if (this.count > 30) {
            console.log('Вы киноман');
        } else {
            console('Error');
        }
    },
    showMyDB: function(hidden) {
        if (!hidden) {
            console.log(this);
        }
    },
    toggleVisibleMyDB: function() {
        if (this.privat) {
            this.privat = false;
        } 
        else {
            this.privat = true;
        }
    },
    writeYourGenres: function() {
        for(let i = 1; i < 4; i++) {
            let genre = prompt(`Ваш любимый жанр под номером ${i}`);

            if (genre === '' || genre === null) {
                i--;
            } else {
                this.genres[i - 1] = genre;
            }
        }

        this.genres.forEach((item, i) => {
            console.log(`Любимый жанр #${i + 1} - это ${item}`);
        });
    }
};

// console.log(personalMovieDB);

// start();

// rememberMyFilms();

// detectPersenalLevel();

// showMyDB(personalMovieDB.privat);

// writeYourGenres();