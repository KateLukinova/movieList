<template>
    <div class="wrapper">
        <div class="genres__buttons">
            <button @click="setCurrentFilmList('All')">All</button>
            <button @click="setCurrentFilmList('Comedy')">Comedy</button>
            <button @click="setCurrentFilmList('Drama')">Drama</button>
            <button @click="setCurrentFilmList('Adventure')">Adventure</button>
            <button @click="setCurrentFilmList('Animation')">Animation</button>
            <button @click="setCurrentFilmList('Horror')">Horror</button>
        </div>
            <ul class="film__list">
                <film-item class="film__item"
                           v-for="filmItem in currentFilmList"
                           :film-data="filmItem"
                           :genres="getGenres(filmItem.genre_ids)">
                </film-item>
            </ul>
<div class="pagination">
    <button @click="getFilmsByPage(1)">1</button>
    <button @click="getFilmsByPage(2)">2</button>
    <button @click="getFilmsByPage(3)">3</button>
    <button @click="getFilmsByPage(4)">4</button>
    <button @click="getFilmsByPage(5)">5</button>
</div>
    </div>
</template>

<script>
    import axios from 'axios';
    import FilmItem from './FilmItem.vue'

    export default {
        components: {FilmItem},
        data() {
            return {
                genres: [],
                filmList: [],
                currentFilmList: [],
                filmsByGenre: []
            };
        },
        methods: {
            getGenres: function (genreIds) {
                var genreNames = [];

                for (var i = 0; i < genreIds.length; i++) {
                    var genreId = genreIds[i];

                    var result = this.genres.find(obj => {
                        return obj.id === genreId;
                    });

                    if (result) {
                        genreNames.push(result.name);
                    }
                }

                return genreNames;
            },
            getGenreFilms: function (genreId) {
                var genreFilms = [];

                for (var i = 0; i < this.filmList.length; i++) {
                    if (this.filmList[i].genre_ids.includes(genreId)) {
                        genreFilms.push(this.filmList[i]);
                    }
                }

                return genreFilms;
            },
            getFilmsByGenre: function () {
                var filmsByGenre = [];

                for (var i = 0; i < this.genres.length; i++) {
                    var genre = this.genres[i];
                    var name = genre.name;
                    var genreFilms = this.getGenreFilms(genre.id);

                    filmsByGenre.push({
                        name: name,
                        list: genreFilms
                    })
                }

                return filmsByGenre;
            },
            setCurrentFilmList: function (genre) {
                if (genre == 'All') {
                    this.currentFilmList = this.filmList;
                    return;
                }

                var filmsByGenre = this.filmsByGenre.find(g => {
                    return g.name == genre;
                });

                this.currentFilmList = filmsByGenre.list;
            },
            getFilmsByPage: function (page) {
                axios
                    .get("https://api.themoviedb.org/3/trending/all/week?api_key=a80e3ddac5951a3c686e7677c4007931&page=" + page)
                    .then(response => {
                        this.filmList = response.data.results;
                        this.getGenreFilms();
                        this.filmsByGenre = this.getFilmsByGenre();
                        this.currentFilmList = this.filmList;
                    });
            }
        },
        mounted() {
            // a80e3ddac5951a3c686e7677c4007931
            this.getFilmsByPage(1);

            axios
                .get('https://api.themoviedb.org/3/genre/movie/list?api_key=a80e3ddac5951a3c686e7677c4007931&language=en-US')
                .then(response => {
                    this.genres = response.data.genres;
                });

        }
    }
</script>

<style scoped lang="scss">

    ul {
        list-style: none;
    }
    button {
        background-color: transparent;
        outline: none;
        border: 1px solid #2c3e50;
        padding: 5px 10px;
        font-family: Montserrat;
        margin-left: 5px;
    }
    .wrapper {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: auto;
        flex-direction: column;
    }
    .film__list {
        display: flex;
        justify-content: space-around;
        align-items: center;
        flex-wrap: wrap;
        width: 90%;
        padding: 0;
    }
</style>
