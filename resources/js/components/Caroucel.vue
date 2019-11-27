<template>
  <div class="container caroucel-container hidden-md-and-down" px-0 pt-1>
    <div class="caroucel-container">
      <!-- <transition name="bounce"> -->
      <article
        class="caroucel-container__text"
        v-if="images[activeImage].text"
      >{{images[activeImage].text}}</article>
      <img width="100%" class="m-auto current-image" :src="'/img/caroucel/' + currentImage" />
      <!-- </transition> -->
      <!-- <div>
        <a
          :href="'/' + images[activeImage].btnText"
          class="btn red text-capitalize"
          v-if="images[activeImage].btnText"
        >{{images[activeImage].btnText | noDash}}</a>
      </div>-->

      <!-- <div class="caroucel-container__indicators">
        <button
          @click="showElement(index)"
          class="caroucel-container__indicator"
          v-for="(_,index) in images"
          :key="index"
          :class="{'active': activeImage === index}"
        ></button>
      </div>-->
    </div>
  </div>
</template>

<script>
export default {
  props: ["images"],
  data() {
    return {
      show: true,
      modal: false,

      activeImage: 0

      // url: "static/img/"
    };
  },
  filters: {
    noDash: function(value) {
      // if(value.str.substring(0,2).toString()== "75"){
      if (!value) return "";
      value = value.toString();
      return value.replace(/-/g, " ");
      // console.log(value);
      // }
    }
  },
  // props: ["images"],
  methods: {
    openModal($event, index) {
      // this.modal = true;
      this.activeImage = index;

      document.querySelector(".current-image").classList.add("fade");
      setTimeout(() => {
        document.querySelector(".current-image").classList.remove("fade");
      }, 500);
    },
    // showElement(elementIndex) {
    //   this.activeImage = elementIndex;
    //   document.querySelector(".current-image").classList.add("fade");
    //   setTimeout(() => {
    //     document.querySelector(".current-image").classList.remove("fade");
    //   }, 500);
    //   this.caroucelStop();
    //   this.caroucelStart();
    // },
    caroucelStart() {
      this.myInterval = setInterval(() => {
        this.next();
      }, 3000);
    },
    close() {
      this.modal = false;
      document.querySelector("body").style.overflowY = "scroll";
    },
    caroucelStop() {
      clearInterval(this.myInterval);
    },
    next($event) {
      // document.querySelector(".current-image").classList.add("fade");
      // document.querySelector(".current-image").classList.remove("fade");
      setTimeout(() => {
        var active = this.activeImage + 1;
        if (active >= this.images.length) {
          active = 0;
        }
        this.openModal($event, active);
      }, 500);
      // document.querySelector('.current-image').classList.add('fadeOut');
    },
    prev($event) {
      var active = this.activeImage - 1;
      if (active < 0) {
        active = this.images.length - 1;
      }
      this.openModal($event, active);
    },
    handleKeypress($event) {
      if ($event.keyCode == "39") {
        this.next();
      } else if ($event.keyCode == "37") {
        this.prev();
      } else if ($event.keyCode == "27") {
        this.close();
      }
    },

    beforeEnter(el) {
      el.style.opacity = 0;
    },

    enter(el) {
      // var delay = el.dataset.index * 200;
      var delay = Math.floor(Math.random() * Math.floor(9)) * 150;
      setTimeout(() => {
        el.style.opacity = 1;
        // console.log(el.);
      }, delay);
    }
  },

  computed: {
    // currentImage gets called whenever activeImage changes
    // and is the reason why we don't have to worry about the
    // big image getting updated
    currentImage() {
      // return "../static/img/" + this.images[this.activeImage].link;
      return this.images[this.activeImage].link;
    }
  },
  watch: {},
  befereDestroy() {
    this.caroucelStop();
  },
  beforeMount() {
    this.caroucelStop();
  },
  destroyed() {
    this.caroucelStop();
  },
  created() {
    // this.caroucelStop();
  },
  updated() {
    // this.caroucelStop();
  },
  mounted() {
    // this.caroucelStop();
    window.addEventListener("keydown", this.handleKeypress);
    if (this.images.length > 1) {
      this.caroucelStart();
    } else {
      this.caroucelStop();
    }

    // this.caroucel();
    // this.onLoadAnimation();
  }
  // components: {
  //   HelloWorld,
  //   Card
  // }
};
</script>
<style lang="scss" scoped>
.masonry-layout {
  column-count: 4;
  column-gap: 0;
  padding-top: 2em;
}
.masonry-layout__panel {
  break-inside: avoid;
  padding: 5px;
  transition: 0.5s all ease;
}
.masonry-layout__panel-content img {
}
.masonry-layout__panel-content {
  padding: 25px;
  border-radius: 10px;
}
.current-image {
  transition: 0.7s all ease-in-out;
}

.fade {
  animation: fadeIn 0.7s ease-in-out;
  /*animation-delay: 1s;*/
}
// .fadeOut {
//   animation: fadeIn 0.1s ease-in-out;
//   animation-direction: reverse;
// }

@keyframes fadeIn {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
.modal {
  display: flex;
  position: fixed;
  top: 0;
  left: 0;
  /*border: 1px solid seagreen;*/
  width: 100%;
  height: 100vh;
  background: rgba(0, 0, 0, 1);
}

.caroucel-container span {
  width: 200px;
  height: 200px;
  cursor: pointer;
  position: absolute;
  top: 20px;
  right: 20px;
}

.caroucel-container {
  max-width: 900px;
  margin: 0 auto;
  position: relative;
  max-height: 500px;
  text-align: center;
  // min-height: 600px;
  //   display: flex;
  //   flex-direction: column;
  //   justify-content: center;
  //   align-content: center;
  height: auto;
  margin-bottom: 27px;
  /*flex: 20%;*/
  /*display: flex;*/
}

@media only screen and (min-width: 1024px) {
  .caroucel-container img {
    border-radius: 5px;
    max-width: 522px;
    width: 60%;
    margin: 0 auto;
    min-height: 365px;
    // max-height: 500px;
    // box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2),
    //   0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);
  }
}
.prev {
  position: absolute;
  left: 10%;
  top: 45%;
}
.next {
  position: absolute;
  right: 10%;
  top: 45%;
}
.prev,
.next {
  margin: auto;
  padding: 2em;
}
.prev i,
.next i {
  font-size: 25px;
  color: #d50000;
}
.masonry-brick img {
  max-width: 500px;
}

// text

.caroucel-container__text {
  position: absolute;
  top: 30px;
  left: 30px;
  max-width: 300px;
  color: white;
}

/* indicator */
.caroucel-container__indicators {
  width: 100%;
  // transform: translateY(-45px);
  display: flex;
  justify-content: center;
  align-items: center;
  /* height: 30px; */
  /* background: green; */
}
img {
  max-height: 400;
}
.caroucel-container__indicator:hover {
  cursor: pointer;
}
.caroucel-container__indicator {
  display: block;
  width: 15px;
  height: 15px;
  border-radius: 50%;
  // border: 1px solid black;
  background: white;
  margin: 10px;
  border: 1px solid lightgray;
}
.caroucel-container__indicator.active {
  /* display: block;
  width: 20px;
  height: 20px;
  border-radius: 50%; */
  background: #dc3545;

  /* margin: 20px; */
}
.btn-class {
  position: absolute;
  bottom: 10px;
  right: 10px;
  border: none;
  padding: 1em;
  //   background: gray;
  background: #dc3545;
  color: white;
  border-radius: 5px;
  position: absolute;
  left: 30px;
  bottom: 60px;
}
</style>


