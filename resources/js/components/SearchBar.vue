<template>
  <div class="search-bar">
    <div class="search-wrapper">
      <font-awesome-icon class="search-ico" icon="search" />
      <input
        type="text"
        placeholder="Search"
        v-model="search"
        @input="onChange($event)"
        @keydown.down="onArrowDown"
        @keydown.up="onArrowUp"
        @keydown.enter="onEnter"
        @click="handleClick"
        @keydown="handleBackspace($event)"
      />
      <ul v-if="isOpen">
        <li
          v-for="(result,index)  in listOfDevices"
          :key="index"
          @click="setResult(result)"
          :class="{'is-active': index === arrowCounter}"
        >
          <a :href="'/gas-sensors/'+ result.gas">
            <span class="text-left">{{result.productName}}</span>
            <span class="text-center">{{result.gas}}</span>
            <span v-if="result.instrument">{{result.instrument}}</span>
            <span class="text-right">{{result.SKU | sku }}</span>
            <!-- <span>
              <img class="device-img" :src="result.img" alt />
            </span>
            <span>
              <img class="device-img" src="../assets/img/logo.svg" alt />
            </span>-->
          </a>
        </li>
      </ul>
    </div>
    <!-- {} -->
  </div>
</template>

<script>
export default {
  // name: "search",
  data() {
    return {
      search: "",
      listOfDevices: [],
      isOpen: false,
      arrowCounter: -1,
      gases: []
    };
  },
  computed: {},

  filters: {
    sku: function(value) {
      // if(value.str.substring(0,2).toString()== "75"){
      if (!value) return "";
      value = value.toString();
      return value.replace(/(\d{2})(\d{3})(\d{4})/, "$1-$2$3");
      console.log(value);
      // }
    }
  },
  methods: {
    imgSource() {
      this.listOfDevices.forEach(d => {
        if (d.instrument == "CAL2000") {
          d.img = "https://www.goacd.com/index%20Graphics/cal2000-3.png";
        } else if (d.class == "Instrument") {
          d.img =
            "http://www.sircal.co.uk/whitedragon/documents/image/Product%20Images/home-page-product-template.png";
          // console.log(d);
        } else if (d.type == "sensor" || d.type == "sensoric") {
          d.img =
            "http://samsonscientific.com/product_images/city_tech_oxygen_sensors.png";
          // console.log(d);
        }
      });
    },
    setResult(result) {
      console.log(result);
      if (result.class == "instrument") {
        this.$router.push("/calibration-gas-instruments");
      } else if (result.class == "sensor" || result.class == "sensoric") {
        this.$router.push({
          name: `product`,
          params: { name: result.gas }
        });
      }
      this.search = result.productName;
      this.isOpen = false;

      this.search = "";
    },

    onChange($event) {
      this.listOfDevices = [];
      this.isOpen = true;
      this.getDevices();
      this.filterResults();

      if (this.listOfDevices.length == 0) {
        this.isOpen = false;
      }
    },

    onArrowDown() {
      if (this.arrowCounter < this.listOfDevices.length) {
        this.arrowCounter = this.arrowCounter + 1;
        this.search = this.listOfDevices[this.arrowCounter].productName;
        // this.filterResults()
      }
    },
    onArrowUp() {
      if (this.arrowCounter > 0) {
        this.arrowCounter = this.arrowCounter - 1;
        this.search = this.listOfDevices[this.arrowCounter].productName;
      }
    },
    onEnter() {
      let currentDeviceName = this.listOfDevices[this.arrowCounter].productName;
      // console.log(currentDeviceName);
      let currentDeviceInstument = this.listOfDevices[this.arrowCounter];
      if (currentDeviceInstument.class == "instrument") {
        this.$router.push("/calibration-gas-instruments");
        this.isOpen = false;
        this.arrowCounter = -1;
        this.getDevices();
        this.search = "";
      } else if (currentDeviceName.includes("Sircal")) {
        this.$router.push("/rare-gas-purfier");
        this.isOpen = false;
        this.arrowCounter = -1;
        this.getDevices();
        this.search = "";
      } else {
        let currentDevice = this.listOfDevices[this.arrowCounter].gas;
        this.isOpen = false;
        this.arrowCounter = -1;
        window.location.replace("/gas-sensors/" + currentDevice);
        // this.$router.push({
        //   path: "/gas-sensors/" + currentDevice
        // });
        this.getDevices();
        this.search = "";
      }
      // this.search = this.listOfDevices[this.arrowCounter].productName;
    },
    filterResults() {
      this.listOfDevices = this.listOfDevices.filter(product => {
        if (product.instrument && product.value !== null) {
          product.productName = product.value;
          product.SKU = product.partNum;
          // console.log(product);
          return (
            product.productName
              .toLowerCase()
              .includes(this.search.toLowerCase()) ||
            product.value.toLowerCase().includes(this.search.toLowerCase()) ||
            product.SKU.toString()
              .toLowerCase()
              .includes(this.search.replace(/-/g, ""))
          );
        } else if (
          product.class == "instrument" &&
          product.gas == undefined &&
          product.SKU == undefined
        ) {
          return product.productName
            .toLowerCase()
            .includes(this.search.toLowerCase());
        } else if (product.gas == undefined) {
          return (
            product.productName
              .toLowerCase()
              .includes(this.search.toLowerCase()) ||
            product.SKU.toString()
              .toLowerCase()
              .includes(this.search.replace(/-/g, ""))
          );
        } else if (product.SKU) {
          return (
            product.productName
              .toLowerCase()
              .includes(this.search.toLowerCase()) ||
            product.gas.toLowerCase().includes(this.search.toLowerCase()) ||
            product.SKU.toString()
              .toLowerCase()
              .includes(this.search.replace(/-/g, ""))
          );
        }
      });
    },

    getDevices() {
      let foundProduct = this.listOfDevices.find(device => {
        return device.productName
          .toLowerCase()
          .includes(this.search.toLowerCase());
      });

      this.gases = this.$store.getters.products;
      // axios
      //   .get("http://studio-sova.rs/api/products.json")
      //   .then(response => {
      //     this.gases = response.data;
      //   })
      //   .catch(function(error) {
      //     // handle error
      //     console.log(error);
      //   })
      //   .finally(function() {
      //     // always executed
      //   });
      // console.log(foundProduct);
      this.gases.forEach(product => {
        if (product.devices) {
          return product.devices.forEach(device => {
            if (!foundProduct) {
              this.listOfDevices.push(device);
            }
          });
        }
      });
      // console.log("getdevices:", this.$store.getters.sirical);
      // console.log("getdevices:", this.$store.getters.sirical);
      // console.log("getdevices:", this.$store.getters.sourceOptions);
      //   this.$store.getters.sirical.forEach(device => {
      //     this.listOfDevices.push(device);
      //   });
      //   this.$store.getters.sourceOptions.forEach(device => {
      //     if (device.value !== null) {
      //       this.listOfDevices.push(device);
      //     }
      //   });
    },
    handleClickOutside(evt) {
      // console.log("click");
      if (!this.$el.contains(evt.target)) {
        this.isOpen = false;
        this.arrowCounter = -1;
        this.getDevices;
      }
    },
    handleClick() {
      if (this.search && this.listOfDevices.length > 0) {
        this.isOpen = true;
      }
    },

    handleBackspace($event) {
      if ($event.keyCode == 8) {
        // this.devices = [];
        // this.getDevices();
        // this.filterResults();
        console.log(this.listOfDevices);
      }
    }
  },
  mounted() {
    console.log(document.window);
    // console.log(this.listOfDevices.filter(d => d.instrument == "CAL2000"));
    document.addEventListener("click", this.handleClickOutside);
    // console.log("search:",this.$store.getters.sirical)
  },
  destroyed() {
    document.removeEventListener("click", this.handleClickOutside);
  },
  beforeMount() {
    document.addEventListener("click", this.handleClickOutside);
    // document.addEventListener("click", function() {
    //   console.log("click");
    // });
    this.getDevices();
  },

  watch: {
    listOfDevices(n, o) {
      // console.log(n);
      this.imgSource();
    }
  }
};
</script>

<style lang="scss" scoped>
ul {
  border: 1px solid rgba(0, 0, 0, 0.15);
  border-radius: 2px;
}
input {
  // transform: translateX(7%);
  border: 1px solid #585857;
  border-radius: 2px;
  // background: ghostwhite;
  color: #585857;
}
input:hover,
input:focus {
  box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.3);
  border-color: #c20e1a;
}

@media only screen and (max-width: 424px) {
  input {
    margin-top: 1em;
  }
}
@media only screen and (min-width: 992px) {
  .search-wrapper {
    margin: 0 auto;
  }
}
@media only screen and (min-width: 1204px) {
  .search-ico {
    // transform: translateX(56px);
  }
  input {
    // transform: translateX(8%);
  }
}
</style>
