<template>
  <div class="container">
    <!-- <b-breadcrumb class="container spantech-breadcrumb"   :items="items"/> -->
    <h1>Rare Gas Purifiers</h1>
    <hr />
    <div class="intro-text">
      <p class="text-left">
        <strong>SIRCAL MP-2000</strong> converts standard Argon (or Helium) to ultra-high purity (UHP) Argon for a fraction
        of the price of bottled UHP gas.
      </p>

      <p class="text-left">
        A unique combination of catalytic and molecular sieves provides UHP Argon or Helium at unrivalled purity with build
        in current and pressure protection devices for safety and ease of use.
        <br />
      </p>
      <a
        target="_blank"
        class="brochure"
        href="http://www.sircal.co.uk/whitedragon/documents/file/PDF's/MP2000%20Brochure%20Pages.pdf"
      >Read the brochure...</a>
    </div>

    <h3 class="text-left">
      <strong>Rare Gas Purifier MP-2000 Highlights:</strong>
    </h3>
    <div class="row">
      <div class="col-md-6">
        <ul class="highlights">
          <li v-for="h in highlights" :key="h">{{h}}</li>
        </ul>
      </div>
      <div class="col-md-6">
        <!-- <img src="../assets/img/gas-purifier.png" alt /> -->
      </div>
    </div>

    <h3 class="text-left">
      <strong>Features &amp; Benefits</strong>
    </h3>
    <p>
      Simplicity and Purity – The MP-2000 will remove the impurities, i.e. oxygen, nitrogen, hydrogen, carbon monoxide,
      hydrocarbons, carbon dioxide and moisture (typically present in the range of 30-50vpm) in commercially available
      rare gases down to a concentration of less than 1 vpm in total.
    </p>

    <p>
      Easy to use Safe to Use – dual thermocouple temperature control, with remote status indication and fault alarm
      system.
    </p>

    <p>Low Maintenance – quick-change purifier tubes procedure with its modular design.</p>

    <p>
      Reliability – built in safeguards against any fluctuations in ambient temperature or surges in electrical supply,
      offering long term optimum performance and reliability. Flexibility – Optional pressure sensor interfaces with
      microcontroller to provide display of system pressure and furnace shut down if the gas supply fails.
    </p>

    <p>
      <strong>Manufacturer</strong>: Sircal Instruments Co. Ltd (est. 1981, part of FTT since March 2010) – the market leader in Argon
      purification for spectrometric applications
    </p>

    <h4>Instuments</h4>
    <!-- <div>
		<span>name</span>
		<span>name</span>
    </div>-->
    <ul class="s-list">
      <li class="s-list-item" v-for="(i,index) in instruments" :key="index">
        <span>{{i.productName}}</span>
        <span>{{i.class}}</span>
        <button class="btn red" @click="addToCart(i)">
          <strong>add</strong>
        </button>
      </li>
    </ul>
    <!-- <b-table class="hide S-table" :items="instruments" responsive  small striped hover :fields="fields">
		<template slot="addItem" slot-scope="data">
          <b-button class="addBtn"  @click="addToCart(data)"><strong>add</strong></b-button>
    </template>
		<template slot="quantity" slot-scope="data">
    				<counter :ordNum="data.item.ordNum" :gas="data.item.gas" :productName="data.item.productName"></counter>
    </template>
		<template slot="productName" slot-scope="data">
			<div class="S-table__productName">
    		<p class="text-center">{{data.item.productName}}</p>
			</div>
    </template>
    </b-table>-->
    <h4>Spare Parts</h4>

    <ul class="s-list">
      <li class="s-list-item" v-for="(i,index) in accessories" :key="index">
        <span>{{i.productName}}</span>
        <span>{{i.class}}</span>
        <button class="btn red" @click="addToCart(i)">
          <strong>add</strong>
        </button>
      </li>
    </ul>
    <!-- <b-table class="hide S-table" :items="accessories" responsive  small striped hover :fields="fields">
		<template slot="addItem" slot-scope="data">
            <b-button class="addBtn"  @click="addToCart(data)"><strong>add</strong></b-button>
        </template>
				<template slot="productName" slot-scope="data">
			<div class="S-table__productName">
    		<p class="text-center">{{data.item.productName}}</p>
			</div>
    </template>
		<template slot="quantity" slot-scope="data">
           
        </template>
    </b-table>-->
  </div>
</template>

<script>
// import counter from "./Spantech-counter";
export default {
  //   name: "RareGasPurifier",
  //   components: { counter },
  data() {
    return {
      fields: [
        {
          key: "productName",
          class: "S-table__productName"
        },
        {
          key: "class"
        },
        {
          key: "addItem",
          label: "Add Item",
          class: "addItem"
        }
      ],
      items: [
        {
          text: "Gas Sensors",
          to: "/products",
          name: "/products",
          active: false
        },
        {
          text: "Gas Cylinders",
          to: "/calibration-gas-cylinders",
          active: false
        },
        {
          text: "Gas Instruments",
          to: "/calibration-gas-instruments"
        },
        {
          text: "Rare Gas Purifier",
          to: "/rare-gas-purfier",
          active: true
        },
        {
          text: "Enquiry Basket",
          to: "/basket",
          active: false
        }
      ],
      highlights: [
        "The cost effective and reliable solution for rare gas purification",
        "Purifies rare gases of Argon, Helium, Neon, Xenon and Krypton",
        "Contains two getter tubes and one molecular sieve tube",
        "Removes impurities of O2, N2, H2, CO, CO2, H2O and Hydrocarbons",
        `Inside of the MP-2000 showing the 2 catalyst (getter) tubes, molecular sieve and heater, a simple classical use of 
				hemistry to save the user thousands of USD a year in UHP gas costs`
      ]
    };
  },
  methods: {
    addToCart(data) {
      console.log(data);
      this.$store.dispatch("addToCart", {
        productName: data.productName,
        ordNum: data.ordNum,
        type: data.class,
        SKU: data.SKU
      });
    }
  },

  computed: {
    products() {
      return this.$store.getters.sirical;
    },

    instruments() {
      return this.products.filter(p => {
        return p.class == "Instrument";
      });
    },
    accessories() {
      return this.products.filter(p => {
        return p.class == "Accessory";
      });
    }
  }
};
</script>

<style lang="scss">
.highlights {
  // background: red;
  list-style-type: disc !important;
  li {
    text-align: left;
  }
}
.intro-text {
  margin-bottom: 10px;
  text-align: left;
}
.brochure {
  color: #c61017;
  // margin: 3em
  // display: inblock;
  // text-align: left;
}

.brochure:hover {
  color: #6c757d;
}

button {
  display: block;
}
.S-table__productName {
  // background: #C61017;
  // width: 494px!important;
  max-width: 494px;
  // margin: 0 auto;
  // width: 100%;
}
textarea {
  padding: 1em 0;
  // text-indent: 1em;
  width: 100%;
}
p,
ul li {
  font-size: 15px;
}
p {
  text-align: left;
}
.addItem {
  button {
    margin: 0 auto;
  }
}
.s-list {
  background: #eeeeee;
  padding: 10px 0;
}
.s-list-item {
  display: flex;
  justify-content: space-between;
  margin: 1em;

  span {
    text-align: left;
    flex-grow: 1;
    flex-basis: 0;
  }
}
</style>
