<template>
  <div class="row">
      <div class="col-lg-1"></div>
    <div class="col-lg-8">
      <youtube :video-id="tempvar" ref="youtube" width="900px" height="500px"></youtube>
    </div>
    <div class="col-lg-2">
    <div v-for="video in videos" @click="clickVideoPlay(video.youtubeId)">
        <img :src="video.thumbnail">
    </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
        tempvar: 'jn9mHzXJIV0',
      videos: [
        {
          id: 1,
          youtubeId: "jn9mHzXJIV0",
          title: "18-core iMac Pro Review: Not a Trap!",
          thumbnail:
            "https://i.ytimg.com/vi/jn9mHzXJIV0/hqdefault.jpg?sqp=-oaymwEZCNACELwBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLAvJvk4k_UNB9nst4pFP-txM1TLZA",
          youtubeURL: "https://www.youtube.com/embed/jn9mHzXJIV0",
          creator: "Marques Brownlee",
          likes: 0,
          views: 0
        },
        {
          id: 2,
          youtubeId:"UIwdCN4dV6w",
          title: "Dope Tech: Camera Robots!",
          thumbnail:
            "https://i.ytimg.com/vi/UIwdCN4dV6w/hqdefault.jpg?sqp=-oaymwEZCNACELwBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLDhlan32jHSvicGZezDFPjAOdXGUA",
          youtubeURL: "https://www.youtube.com/embed/UIwdCN4dV6w",
          creator: "Marques Brownlee",
          likes: 0,
          views: 0
        },
        {
          id: 3,
          youtubeId:"ctx4YBEdOxo",
          title: "Let's Talk About Tesla Roadster 2020!",
          thumbnail:
            "https://i.ytimg.com/vi/ctx4YBEdOxo/hqdefault.jpg?sqp=-oaymwEZCNACELwBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLBDnlrC2rVwXamNkicEEbc3Mf4T0w",
          youtubeURL: "https://www.youtube.com/embed/ctx4YBEdOxo",
          creator: "Marques Brownlee",
          likes: 0,
          views: 0
        },
        {
          id: 4,
          youtubeId:"pqQrL1K0Z5g",
          title: "Talking Tech with Neil deGrasse Tyson!",
          thumbnail:
            "https://i.ytimg.com/vi/pqQrL1K0Z5g/hqdefault.jpg?sqp=-oaymwEZCNACELwBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLA5hTiwkz4Tr1w1hSMhPlwtmQeyYw",
          youtubeURL: "https://www.youtube.com/embed/pqQrL1K0Z5g",
          creator: "Marques Brownlee",
          likes: 0,
          views: 0
        },
        {
          id: 5,
          youtubeId:"KB4_WIPE7vo",
          title: "The Apple Ecosystem: Explained!",
          thumbnail:
            "https://i.ytimg.com/vi/KB4_WIPE7vo/hqdefault.jpg?sqp=-oaymwEZCNACELwBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLCCxXm7aoPShOwON74nhMlGYMUkHw",
          youtubeURL: "https://www.youtube.com/embed/KB4_WIPE7vo",
          creator: "Marques Brownlee",
          likes: 0,
          views: 0
        }
      ]
    };
  },
  methods: {
    playing() {
      console.log("o/ we are watching!!!");
    },
    clickVideoPlay(yId){
      this.tempvar = yId
      console.log(this.tempvar)
    }
  }
};
</script>
<style>
.video-player {
  display: flex;
  width: 1200px;
  margin: auto;
}

.video-container {
  margin-right: 40px;
}

/* .row {
  display: flex;
  justify-content: space-between;
} */

button {
  background: #d0021b;
  color: white;
  border: none;
  padding: 10px 20px;
}
.left {
  margin-left: 900px;
}
</style>
