<template>
    <li class="film-item">
        <router-link :to="getRouterLinkObject" class="film-item__link">
            <div class="film-item__card">
                <img :src="'https://image.tmdb.org/t/p/w500' + filmData.poster_path" alt="" class="film-item__img">
                <div class="film-item__properties">
                    <h2>{{ filmData.original_title }}</h2>
                    <div class="film-item__genres" v-for="genre in genres">{{ genre }}</div>
                    <div class="film-item__rating">Vote Count - {{ filmData.vote_count }}</div>
                </div>
            </div>
        </router-link>
    </li>
</template>

<script>
    export default {
        props: [
            'filmData',
            'genres'
        ],
        data() {
            return {
                title: '',
                imgSource: ''
            };
        },
        mounted() {

        },
        computed: {
            getRouterLinkObject: function () {
                return {name: 'film', params: {filmData: this.filmData, genres: this.genres}};
            }
        }
    }
</script>

<style scoped lang="scss">
    .film-item{
        width: 12%;
        display: flex;
        flex-direction: column;
        min-width: 350px;
        margin: 20px;
        border: 1px solid #dee8f3;
        padding: 10px;
     &__card {
         display: flex;
         justify-content: flex-start;
         align-items: flex-start;
         width: 100%;
     }
     &__img {
         width: 40%;
         margin-right: 20px;
         min-width: 150px;
         overflow: hidden;
         transition: all 0.5s ease;
     }
     &__properties {
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            justify-content: flex-start;
        }
     &__genres {
            font-family: Montserrat;
            color: cadetblue;
            margin: 2px 0;
        }

    }
    .film-item:hover .film-item__img {
        transform: scale(1.08);
    }

</style>
