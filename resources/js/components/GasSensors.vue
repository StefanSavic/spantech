<template>
  <div class="container spantech-container">
    <!-- {{gases}} -->
    <div class="col-xl-12">
      <h1>Gas Sensors</h1>
    </div>
    <div class="col-xl-12">
      <ul>
        <li v-for="(gas,i) in gases" v-bind:key="i">
          <a class :href="'/gas-sensors' + '/' + gas.name">{{gas.name}}</a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // gases: []
    };
  },
  computed: {
    gases() {
      return this.$store.getters.products;
    }
  }
};
</script>



<style lang="scss" scoped>
h1 {
  font-weight: 300;
}
.spantech-container {
  display: flex;
  flex-wrap: wrap;
  //   justify-content: space-around;
  > div {
    // display: inline;
  }
  a {
    width: 300px;
    height: auto;
    margin: 5px;
    text-align: center;
    padding: 10px;
    font-size: 18px;
    color: #505354;
    text-transform: uppercase;
    height: auto;
    margin: 5px;
    font-weight: 600px;
    &:hover {
      text-decoration: none;
      color: #c20e1a;
    }
  }

  ul {
    margin-top: 3em;
    list-style-type: none;
    border: 1px solid ghostwhite;
    padding: 0;
  }
  ul li:nth-child(odd) {
    background: ghostwhite;
  }
  ul li {
    // background: gainsboro;
    display: flex;
    flex-direction: column;
    width: 100%;
    justify-content: center;
    align-items: center;
  }
  // li a {
  //   // margin: 0 auto;
  // }
}
</style>