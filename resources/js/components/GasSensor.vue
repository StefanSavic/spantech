<template>
  <div class="container">
    <h2>{{product[0].name}}</h2>
    <!-- {{product[0]}} -->
    <div v-if="alertSuccess" class="alert alert-success" role="alert">Product is in the basket</div>
    <table class="table table-bordered table-hover">
      <thead>
        <tr>
          <th scope="col">Product name</th>
          <th scope="col">Type</th>
          <th scope="col">Details</th>
          <th scope="col">Datasheet</th>
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
            <a :href="device.link" target="_blank">Datasheet</a>
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
    <div class="sensors-wrapper">
      <div v-for="(device,i) in devices" :key="i" class="sensor">
        <div>
          Product name :
          <span>{{device.productName}}</span>
        </div>
        <div>
          Type :
          <span>{{device.type}}</span>
        </div>
        <div>
          Details
          <span>{{device.details}}</span>
        </div>
        <div>
          Datasheet :
          <a :href="device.link" target="_blank">Datasheet</a>
        </div>
        <div>
          <button class="btn btn-add" @click="addToCart(device)">
            <strong>Add</strong>
          </button>
        </div>

        <counter :ordNum="device.ordNum" :gas="device.gas" :productName="device.productName"></counter>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      alertSuccess: false,
      // gases: []
      devices: []
      //   product: []
    };
  },
  methods: {
    addToCart(device) {
      var self = this;
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
        link: device.link,
        manufacturer: device.manufacturer
      });
      this.alertSuccess = true;
      setTimeout(function() {
        self.alertSuccess = false;
      }, 3000);
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
.sensor {
  border: 1px solid rgba(0, 0, 0, 0.15);
  border-radius: 2px;
  padding: 1em;
  margin-bottom: 1em;
}
@media only screen and (max-width: 768px) {
  table {
    display: none;
  }

  .sensor .counter {
    justify-content: flex-start !important;
  }
}
@media only screen and (min-width: 768px) {
  .sensors-wrapper {
    display: none;
  }
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