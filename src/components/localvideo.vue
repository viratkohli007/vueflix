<template>
  <div class="bg-dark">
  <xgplayer :options="sample" class="screen"></xgplayer>
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
<style>
.screen{
  height: 900px !important;
  width: 100%;
}
</style>
