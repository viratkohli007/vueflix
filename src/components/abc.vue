<template>
    <button @click="ab">click here</button>
</template>
<script>
import { movies } from '../moviesdata/movies.js'
export default {
    data(){
        return{
            a : movies
        }
    },
    methods: {
        ab(){
            console.log(this.a)
        }
    }
}
</script>
