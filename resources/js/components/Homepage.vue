<template>
  <div class="container">
    <img class="logo d-flex my-2" src="/img/logo.svg" alt />
    <!-- <div class="big-logo"></div> -->
    <caroucel :images="images"></caroucel>
    <!-- <div class="sensors"> -->
    <!-- <div class="sensor2"></div> -->

    <!-- <div class="links">
      <a href="/gas-sensors" variant="danger">
        <button class="btn red" variant="danger">Gas Sensors</button>
      </a>
      <a href="/calibration-gas" variant="danger">
        <button class="btn red" variant="danger">Calibration Gas</button>
      </a>
      <a href="/calibration-instruments" variant="danger">
        <button class="btn red" variant="danger">Calibration instruments</button>
      </a>
      <a href="/rare-gas-purifiers" variant="danger">
        <button class="btn red" variant="danger">Rare gas purifiers</button>
      </a>
    </div>-->
    <!-- </div> -->

    <!-- <img src="../assets/img/sensor1.png" alt=""> -->
    <!-- <img src="../assets/img/sensor1.png" alt=""> -->
  </div>
</template>

<script>
// import mbsCaroucel from "@/components/mbsCaroucel.vue";

export default {
  //   name: "homepage",
  data() {
    return {
      images: [
        {
          link: "sensor2.jpg",
          btnText: "gas-sensors"
        },
        {
          link: "call2000-1.jpg",
          btnText: "calibration-instruments"
        },
        {
          link: "gas-purifier.png",
          btnText: "rare-gas-purifier"
        }
        // {
        //   link: "call2000-1.jpg",
        //   btnText: "calibration-instruments"
        // }
        // {
        //   link: "sensor1.jpg"
        // },
        // {
        //   link: "sensor2.jpg"
        // }
      ]
    };
  }
  //   components: {
  //     mbsCaroucel
  //   }
};
</script>

<style lang="scss" scoped>
.logo {
  width: 60%;
  margin: 0 auto;
}
.wrapp {
  width: 100%;
  // height:600px;
  // display: flex;
}
// .big-logo {
//   max-width: 600px;
//   height: 150px;
//   /* border: 1px solid black; */
//   margin: auto;
//   background: url("../assets/img/logo.svg");
//   background-repeat: no-repeat;
// }
.sensors {
  display: flex;
  max-width: 600px;
  margin: auto;
  flex-direction: column;
  justify-content: center;

  .links {
    margin-top: 5em;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    max-width: 500px;
    margin: 5em auto;
    a {
      button {
        min-width: 220px;
      }
      margin: 3px;
    }
  }
}

.sensor2 {
  // width: 300px;
  // height: 172px;
  // background: url('../assets/img/sensor1.png');
  width: 900px;
  height: 609px;
  max-width: 60%;
  height: 203px;
  //   background: url("../assets/img/sensor2.jpg");
  background-size: contain;
  background-repeat: no-repeat;
  margin: auto;
}
.sensor1 {
  width: 300px;
  height: 172px;
  //   background: url("../assets/img/sensor1.png");
  // width: 900px;
  // height: 609px;
  // width: 300px;
  // height: 203px;
  // background: url('../assets/img/sensor2.jpg');
  background-size: cover;
  margin: auto;
}
</style>

