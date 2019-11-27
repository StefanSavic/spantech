<template>
  <div>
    <div v-if="added" class="counter">
      <button class="btn red" variant @click.capture="subOrd()">-</button>
      <input type="text" class="counterInput" v-model="ordNum" />
      <button class="btn red" variant @click="addOrd()">+</button>
      <!-- @click.capture="addOrdNum(index)" -->
    </div>
  </div>
</template>

<script>
export default {
  name: "counter",
  props: [
    "counterNum",
    "addToCart",
    "ordNum",
    "addOrdNum",
    "productName",
    "gas"
  ],
  data() {
    return {
      // counter:this.ordNum
    };
  },
  methods: {
    addOrd() {
      // console.log(this);
      this.$store.dispatch("addOrd", {
        productName: this.productName,
        // gas:this.$route.params.name
        gas: this.gas
      });
    },
    subOrd() {
      this.$store.dispatch("subOrd", {
        productName: this.productName,
        gas: this.gas
      });
    }
  },

  computed: {
    added() {
      let inCartItem = this.$store.getters.inCart.find(inCartItem => {
        return inCartItem.productName == this.productName;
      });
      if (inCartItem) {
        return true;
      } else {
        return false;
      }
    }
  }
};
</script>

<style lang="scss">
@media only screen and (max-width: 768px) {
  .sensor .counter {
    justify-content: flex-start;
    margin-top: 10px;
  }
}
.counter {
  display: flex;
  justify-content: center;
  .counterInput {
    width: 30px !important;
    margin: 0 2px;
    text-indent: 8px;
  }
}
.red {
  background: #c20e1a !important;
  border: none;
  color: white;
}
</style>

