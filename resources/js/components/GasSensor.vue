<template>
  <div class="container">
    <!-- {{product[0]}} -->
    <table class="table table-bordered table-hover">
      <thead>
        <tr>
          <th scope="col">Product name</th>
          <th scope="col">Type</th>
          <th scope="col">Details</th>
          <th scope="col">stylesheet</th>
          <th scope="col">Add Sensor</th>
          <th scope="col">Quantity</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(device,i) in devices" :key="i">
          <th scope="row">{{device.productName}}</th>
          <td>{{device.type}}</td>
          <td>{{device.details}}</td>
          <td>
            <a :href="device.link" target="_blank">{{device.link}}</a>
          </td>

          <td>
            <button class="btn btn-add" @click="addToCart(device)">
              <strong>Add</strong>
            </button>
          </td>
          <td class="counter-table">
            <counter :ordNum="device.ordNum" :gas="device.gas" :productName="device.productName"></counter>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // gases: []
      devices: []
      //   product: []
    };
  },
  methods: {
    addToCart(device) {
      device.added = true;
      console.log(device);
      this.$store.dispatch("addToCart", {
        productName: device.productName,
        ordNum: device.ordNum,
        product: this.$route.params.name,
        // product: device.gas,
        class: device.type,
        life: device.life,
        range: device.range,
        details: device.details,
        SKU: device.SKU,
        gas: device.gas,
        type: device.type,
        link: device.link
      });
      // data.added = true;
    },
    getProductDevices() {
      this.devices = this.product[0].devices;
      this.devices.forEach(d => {
        d.added = false;
        console.log(d);
      });
    }
    // getProduct() {
    //   return this.gases.filter(
    //     product => product.name == this.$route.params.name
    //   );
    // }
  },
  beforeCreate() {},

  created() {
    console.log(this.$store);
    this.getProductDevices();
  },
  computed: {
    product() {
      return this.$store.getters.products.filter(
        product => product.name == this.$route.params.name
      );
      console.log(this.product);
    }
  },
  mounted() {
    console.log(this.$route.params.name);
  }
};
</script>

<style lang="scss" scoped>
.btn-add {
  background: #ec1c24;
  color: white;
}

.black {
  background: #bbbdbf !important;
  color: white;
}
// .addBtn {
//   padding:2em;
//   background: #585857;
//   border: none;
//   co

//   &:hover {
//     transition: 0.3s all ease;
//     background: #c20e1a;
//   }
// }
</style>