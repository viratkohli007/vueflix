<template>
  <div>
    <p>{{ $route.params.video }}</p>
  <xgplayer :options="sample"></xgplayer>
  </div>
</template>

<script>
// import { movies } from '../moviesdata/movies'
export default {
  data () {
    return {
      sample: {
        url: 'http://localhost:3000/movies/'+this.$route.params.video,
        width: '30%' // Depends on its wrapper element.
      }
    }
  },
  mounted() {
    console.log(this.$route.params.video)
  }
}
</script>
// http://localhost:3000/video2