<template>
    <div class="wrapper">

        <ul class="film__list">
            <film-item class="film__item"
                       v-for="filmItem in filmList"
                       :film-data="filmItem"
                       :genres="getGenres(filmItem.genre_ids)">
            </film-item>
        </ul>
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
                currentFilmList: []
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
            }
        },
        mounted() {
            // a80e3ddac5951a3c686e7677c4007931
            axios
                .get('https://api.themoviedb.org/3/trending/all/week?api_key=a80e3ddac5951a3c686e7677c4007931')
                .then(response => (this.filmList = response.data.results));

            axios
                .get('https://api.themoviedb.org/3/genre/movie/list?api_key=a80e3ddac5951a3c686e7677c4007931&language=en-US')
                .then(response => (this.genres = response.data.genres));

        }
    }
</script>

<style scoped lang="scss">

    ul {
        list-style: none;
    }
    .wrapper {
        display: flex;
        justify-content: center;
        align-items: flex-start;
        width: 100%;
        height: auto;
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
