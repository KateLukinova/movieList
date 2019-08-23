<template>
    <div>
        <router-link to="/" class="back">
            <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                 viewBox="0 0 492 492" xml:space="preserve" width="20" height="20">
                <g>
                    <path d="M198.608,246.104L382.664,62.04c5.068-5.056,7.856-11.816,7.856-19.024c0-7.212-2.788-13.968-7.856-19.032l-16.128-16.12
                        C361.476,2.792,354.712,0,347.504,0s-13.964,2.792-19.028,7.864L109.328,227.008c-5.084,5.08-7.868,11.868-7.848,19.084
                        c-0.02,7.248,2.76,14.028,7.848,19.112l218.944,218.932c5.064,5.072,11.82,7.864,19.032,7.864c7.208,0,13.964-2.792,19.032-7.864
                        l16.124-16.12c10.492-10.492,10.492-27.572,0-38.06L198.608,246.104z"></path>
                </g>
            </svg>
            Back
        </router-link>
        <div class="film">
            <div class="film__header" :class="$mq">
                <img :src="imgSource" alt="" class="film__img" :class="$mq">
                <div class="film__properties">
                    <h2>{{ filmData.original_title }}</h2>
                    <div class="film__genres" v-for="genre in genres">{{ genre }}</div>
                    <div class="film__rating">Popularity - {{ filmData.popularity }}</div>
                    <div class="film__rating">Vote Average - {{ filmData.vote_average }}</div>
                    <div class="film__rating">Vote Count - {{ filmData.vote_count }}</div>
                    <div class="film__release-date">{{filmData.release_date}}</div>
                    <div class="film__description">{{filmData.overview}}</div>
                </div>
            </div>
        </div>
    </div>
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
            this.imgSource = 'https://image.tmdb.org/t/p/w500' + this.filmData.poster_path;
        }
    }
</script>

<style scoped lang="scss">
    .film {
        width: 80%;
        display: flex;
        flex-direction: column;
        margin: auto;
        background-color: rgba(247, 248, 249, 0.43);;
     &__header {
         display: flex;

         &.tablet {
             flex-direction: column;
         }

         &.mobile {
             flex-direction: column;
         }
     }
     &__img {
            margin-right: 20px;
            object-fit: cover;
            &.mobile {
                height: 350px;
                overflow: hidden;
            }
     }
     &__description {
            font-family: Montserrat;
            color: #2c3e50;
            font-size: 16px;
            margin: 30px auto;
            text-align: left;
         padding-right: 25px;
     }
     &__properties {
            display: flex;
            flex-direction: column;
            justify-content: flex-start;
            align-items: flex-start;
     }
     &__rating, &__genres, &__release-date {
         margin: 10px 0;
     }
    }
    .back {
        display: flex;
        justify-content: center;
        align-items: center;
        margin-bottom: 20px;
        margin-left: 0;
        width: max-content;
    }
    .back svg {
        margin-right: 20px;
    }

</style>
