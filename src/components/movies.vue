<template>
  <div>
    <b-row>
      <b-col>
        <sidebar-menu :menu="menu" class="space"/>
      </b-col>
      <b-col cols="9">
        <b-carousel
          id="carousel1"
          style="text-shadow: 1px 1px 2px #333;"
          controls
          indicators
          background="#ababab"
          :interval="4000"
          img-width="1024"
          img-height="480"
        >
          <!-- Text slides with image -->
          <b-carousel-slide
            caption="First slide"
            text="Nulla vitae elit libero, a pharetra augue mollis interdum."
            img-src="https://cdn1.techadvisor.fr/cmsdata/slideshow/3662349/netflix_meilleures_series_du_moment_2018_thumb800.jpg"
          />

          <!-- Slides with custom text -->
          <b-carousel-slide img-src="https://cdn1.techadvisor.fr/cmsdata/slideshow/3662349/netflix_meilleures_series_du_moment_2018_thumb800.jpg">
            <h1>Hello world!</h1>
          </b-carousel-slide>

          <!-- Slides with image only -->
          <b-carousel-slide img-src="https://cdn1.techadvisor.fr/cmsdata/slideshow/3662349/netflix_meilleures_series_du_moment_2018_thumb800.jpg"/>

          <!-- Slides with img slot -->
          <!-- Note the classes .d-block and .img-fluid to prevent browser default image alignment -->
          <b-carousel-slide>
            <img
              slot="img"
              class="d-block img-fluid w-100"
              width="1024"
              height="480"
              src="https://cdn1.techadvisor.fr/cmsdata/slideshow/3662349/netflix_meilleures_series_du_moment_2018_thumb800.jpg"
              alt="image slot"
            >
          </b-carousel-slide>
        </b-carousel>
        <br>
        <!-- <b-row>
          <b-col class="itemsContainer" style="float:left;">
            <div v-for="movie in movies">
              <img :src="movie.thumbnail" height="280px" width="300px">
            <div class="play">
              <router-link to="/movies/movie.route"><img src="http://cdn1.iconfinder.com/data/icons/flavour/button_play_blue.png"></router-link>
            </div>
            </div>
          </b-col>
        </b-row> -->
        <div class="row">
            <div class="col-md-12">
                <div class="col-md-4" style="float:left;" v-for="movie in movies">
                   <router-link :to="{path:movie.route, params:{video: movie.url}}"> <img :src="movie.thumbnail" height="280px" width="300px"> </router-link>
                </div>
            </div>
        </div>
      </b-col>
    </b-row>
  </div>
</template>
<script>
import { movies } from '@/moviesdata/movies'
export default {
  data() {
    return {
        movies:movies,
      menu: [
        {
          header: true,
          title: "Main Navigation"
          // component: componentName
          // visibleOnCollapse: true
        },
        {
          href: "/movies",
          title: "Home",
          icon: "fa fa-home"
          /*
                        disabled: true
                        badge: {
                            text: 'new',
                            // class:''
                        }
                        */
        },
        {
          title: "Movies",
          icon: "fa fa-trend",
          child: [
            {
              href: "/charts/hollywood",
              title: "Hollywood"
            },
            {
              href: "/charts/animation",
              title: "Animations"
            }
          ]
        }
      ]
    };
  },
  methods: {
   
  }
};
</script>
<style>
.space {
  position: relative;
}
.itemsContainer {
  float: left;
  position: relative;
}
.itemsContainer:hover .play {
  display: block;
}
.play{
  position : absolute;
    display:none;
    top:50%; 
    width:5px;
    margin:0 auto; left:0px;
    right:110px;
    z-index:50;
} 
</style>
