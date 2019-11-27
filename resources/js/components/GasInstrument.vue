<template>
  <div class="container">
    <h1>Calibration instrument</h1>
    <p
      my-2
    >To add instrument with options and source that you want, just click on conresponding table cell and instrument will be added.</p>
    <div class="alert-wrapper">
      <div v-if="alert" class="alert red fade show" role="alert">That product is unavilable</div>
      <div v-if="alertSuccess" class="alert alert-success m-0" role="alert">Product is in the basket</div>
      <!-- {{product[0]}} -->
    </div>
    <table class="table table-bordered table-hover">
      <thead>
        <tr>
          <th scope="col">Gas</th>
          <th scope="col">
            <img src="/img/cal2000.jpg" alt />
            <span>Cal2000</span>
          </th>
          <th scope="col">
            <img src="/img/cal2000lt.jpg" alt />
            <span>Cal2000lt</span>
          </th>
          <th scope="col">
            <img
              src="https://static.wixstatic.com/media/a4f035_570bb7020beb4e5391e2f22a7abe3dee~mv2.png/v1/fill/w_351,h_351,al_c,q_85,usm_0.66_1.00_0.01/a4f035_570bb7020beb4e5391e2f22a7abe3dee~mv2.webp"
              alt
            />
            <span>cal 101</span>
          </th>
          <th scope="col">
            <img src="/img/minibump.jpg" alt />
            <span>Minibump</span>
          </th>
          <th scope="col">
            <img src="/img/genieEc.jpg" alt />
            <span>Genie EC</span>
          </th>
          <th scope="col">
            <img src="/img/genieO3.jpg" alt />
            <span>Genie O3</span>
          </th>
          <th scope="col">
            <img src="/img/genieQC.jpg" alt />
            <span>Genie QC</span>
          </th>
          <th scope="col">
            <img src="/img/qc100.jpg" alt />
            <span>QC 100</span>
          </th>
          <th scope="col">
            <img class="qc-img" src="/img/qc.jpg" alt />
            <span>QC</span>
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(g,i) in gases" :key="i">
          <th scope="row">{{g.name}}</th>
          <td @click="addToBasket(g,'cal2000',$event)">
            <span>{{g.cal2000}}</span>
          </td>
          <td @click="addToBasket(g,'cal2000lt',$event)">
            <span>{{g.cal2000lt}}</span>
          </td>
          <td @click="addToBasket(g,'cal101',$event)">
            <span>{{g.cal101}}</span>
          </td>
          <td @click="addToBasket(g,'minibump',$event)">
            <span>{{g.minibump}}</span>
          </td>
          <td @click="addToBasket(g,'genieEC',$event)">
            <span>{{g.genieEC}}</span>
          </td>
          <td @click="addToBasket(g,'genieO3',$event)">
            <span>{{g.genieO3}}</span>
          </td>
          <td @click="addToBasket(g,'genieQC',$event)">
            <span>{{g.genieQC}}</span>
          </td>
          <td @click="addToBasket(g,'qc100',$event)">
            <span>{{g.qc100}}</span>
          </td>
          <td @click="addToBasket(g,'qc',$event)">
            <span>{{g.qc}}</span>
          </td>
        </tr>
      </tbody>
    </table>
    <div class="instruments-table--responsive">
      <img src="/img/cal2000.jpg" alt />
      <h3>Cal2000</h3>
      <div class="instruments-table__content" v-for="(g,i) in gases" :key="i">
        <span class="instuments-table__gas">{{g.name}}:</span>
        <span v-if="g.cal2000" class="instuments-table-name">{{g.cal2000}}</span>
        <span v-else class="instuments-table-name">no product</span>
        <span class="instruments-table__content__button">
          <button
            @click="addToBasketResponsive(g.name,'cal2000',g.cal2000)"
            v-if="g.cal2000"
            class="red btn"
          >add</button>
        </span>
      </div>
      <hr />
      <h3>
        Cal2000lt
        <img src="/img/cal2000lt.jpg" alt />
      </h3>
      <div class="instruments-table__content" v-for="(g,i) in gases" :key="i">
        <span class="instuments-table__gas">{{g.name}}:</span>
        <span v-if="g.cal2000lt" class="instuments-table-name">{{g.cal2000lt}}</span>
        <span v-else class="instuments-table-name">no product</span>
        <span class="instruments-table__content__button">
          <button v-if="g.cal2000lt" class="red btn">add</button>
        </span>
      </div>
      <hr />
      <h3>
        Cal101
        <img src="/img/cal101.jpg" alt />
      </h3>
      <div class="instruments-table__content" v-for="(g,i) in gases" :key="i">
        <span class="instuments-table__gas">{{g.name}}:</span>
        <span v-if="g.genie" class="instuments-table-name">{{g.cal101}}</span>
        <span v-else class="instuments-table-name">no product</span>
        <span class="instruments-table__content__button">
          <button v-if="g.genie" class="red btn">add</button>
        </span>
      </div>
      <hr />
      <h3>
        GenieO3
        <img src="/img/genieO3.jpg" alt />
      </h3>
      <div class="instruments-table__content" v-for="(g,i) in gases" :key="i">
        <span class="instuments-table__gas">{{g.name}}:</span>
        <span v-if="g.genieO3" class="instuments-table-name">{{g.genieO3}}</span>
        <span v-else class="instuments-table-name">no product</span>
        <span class="instruments-table__content__button">
          <button v-if="g.genieO3" class="red btn">add</button>
        </span>
      </div>
      <hr />
      <h3>
        GenieQC
        <img src="/img/genieQC.jpg" alt />
      </h3>
      <div class="instruments-table__content" v-for="(g,i) in gases" :key="i">
        <span class="instuments-table__gas">{{g.name}}:</span>
        <span v-if="g.genieQC" class="instuments-table-name">{{g.genieQC}}</span>
        <span v-else class="instuments-table-name">no product</span>
        <span class="instruments-table__content__button">
          <button v-if="g.genieQC" class="red btn">add</button>
        </span>
      </div>
      <hr />
      <h3>
        qc100
        <img src="/img/qc100.jpg" alt />
      </h3>
      <div class="instruments-table__content" v-for="(g,i) in gases" :key="i">
        <span class="instuments-table__gas">{{g.name}}:</span>
        <span v-if="g.qc100" class="instuments-table-name">{{g.qc100}}</span>
        <span v-else class="instuments-table-name">no product</span>
        <span class="instruments-table__content__button">
          <button v-if="g.qc100" class="red btn">add</button>
        </span>
      </div>
      <hr />
      <h3>
        qc
        <img src="/img/qc.jpg" alt />
      </h3>
      <div class="instruments-table__content" v-for="(g,i) in gases" :key="i">
        <span class="instuments-table__gas">{{g.name}}:</span>
        <span v-if="g.qc" class="instuments-table-name">{{g.qc}}</span>
        <span v-else class="instuments-table-name">no product</span>
        <span class="instruments-table__content__button">
          <button v-if="g.qc" class="red btn">add</button>
        </span>
      </div>
      <hr />
    </div>
  </div>
</template>

<script>
import { timeout } from "q";
export default {
  data() {
    return {
      alert: false,
      alertSuccess: false,
      gases: [
        {
          name: "ammonia",
          cal2000: "",
          cal2000lt: "",
          cal101: "",
          minibump: "",
          genieEC: "",
          genieO3: "",
          genieQC: "20-1000 or 10-500PPM",
          qc100: "Bump test",
          qc: "Bump test"
        },
        {
          name: "chlorine",
          cal2000: ".05 or .5 - 50PPM",
          cal2000lt: "1 - 25PPM",
          cal101: "1 - 25PPM",
          minibump: "1 - 25PPM < 5PPM",
          genieEC: ".05 -5 or .5 -50",
          genieO3: "",
          genieQC: "",
          qc100: "",
          qc: ""
        },
        {
          name: "chlorine-dioxide",
          cal2000: ".5 - 5PPM",
          cal2000lt: "",
          cal101: "",
          minibump: "",
          genieEC: ".5 - 5PPM",
          genieO3: "",
          genieQC: "",
          qc100: "",
          qc: ""
        },
        {
          name: "hexane",
          cal2000: "",
          cal2000lt: "",
          cal101: "",
          minibump: " ",
          genieEC: "",
          genieO3: "",
          genieQC: "",
          qc100: "Bump Test",
          qc: "Bump Test"
        },
        {
          name: "hydrogen",
          cal2000: ".05 or .5 - 50PPM",
          cal2000lt: "1 - 25PPM",
          cal101: "1 - 25PPM",
          minibump: "1 - 25PPM > 25PPM",
          genieEC: ".05 - 5 or .5 - 500",
          genieO3: "",
          genieQC: "",
          qc100: "",
          qc: ""
        },
        {
          name: "hydrogen chloride",
          cal2000: "",
          cal2000lt: "",
          cal101: "",
          minibump: " ",
          genieEC: "",
          genieO3: "",
          genieQC: "",
          qc100: "Bump Test",
          qc: "Bump Test"
        },
        {
          name: "hydrogen cyanide",
          cal2000: ".05 or .5 - 50PPM",
          cal2000lt: "1 - 25PPM",
          cal101: "1 - 25PPM",
          minibump: "1 - 25PPM > 10PPM",
          genieEC: ".05 - 5 or .5 - 50PPM",
          genieO3: "",
          genieQC: "",
          qc100: "",
          qc: ""
        },
        {
          name: "hydrogen sulfide",
          cal2000: ".05 or .5 - 50PPM",
          cal2000lt: "1 - 25PPM",
          cal101: "1 - 25PPM",
          minibump: "1 - 25PPM > 25PPM",
          genieEC: ".05 - 5 or .5 - 50PPM",
          genieO3: "",
          genieQC: "",
          qc100: "",
          qc: ""
        },
        {
          name: "ozone",
          cal2000: "",
          cal2000lt: "",
          cal101: "",
          minibump: "",
          genieEC: "",
          genieO3: ".2-1PPM",
          genieQC: "",
          qc100: "",
          qc: ""
        },
        {
          name: "toulene",
          cal2000: "",
          cal2000lt: "",
          cal101: "",
          minibump: "",
          genieEC: "",
          genieO3: "",
          genieQC: "",
          qc100: "Bump Test",
          qc: "Bump Test"
        }
      ]
    };
  },
  methods: {
    addToBasketResponsive(gasName, instrument, source) {
      // var self = this;
      var options = {
        productName: instrument,
        gas: gasName,
        details: source,
        ordNum: 1,
        type: "instrument",
        stylesheet: ""
      };

      this.$store.dispatch("addToCart", options);
      // this.alertSuccess = true;
      // setTimeout(function() {
      //   self.alertSuccess = false;
      // }, 3000);
    },
    addToBasket(data, instrument, $event) {
      var self = this;
      if (!$event.target.innerText) {
        this.alert = true;
        // this.alert = false;
        setTimeout(function() {
          self.alert = false;
        }, 3000);
        $event.target.classList.add("red btn");
        console.log($event.target);
        setTimeout(function() {
          $event.target.classList.remove("red btn");
          console.log($event.target);
        }, 500);
      } else {
        var options = {
          productName: instrument,
          gas: data.name,
          details: $event.target.innerText,
          ordNum: 1,
          type: "instrument",
          stylesheet: " "
        };

        this.$store.dispatch("addToCart", options);
        this.alertSuccess = true;
        setTimeout(function() {
          self.alertSuccess = false;
        }, 3000);
      }

      // Store to Vuex cart
      // this.$store.dispatch("addToCart", {
      //   productName: device.productName,
      //   ordNum: device.ordNum,
      //   product: this.$route.params.name,
      //   // product: device.gas,
      //   class: device.type,
      //   life: device.life,
      //   range: device.range,
      //   details: device.details,
      //   SKU: device.SKU,
      //   gas: device.gas,
      //   type: device.type
      // });

      console.log(options);
    }
  },

  computed: {}
};
</script>

<style lang="scss" scoped>
table.table {
  // background: #eee !important;
  color: #575758;
}
.alert-wrapper {
  min-height: 65px;
}
span {
  display: block;
}
.qc-img {
  transform: translateX(-6px);
}
th {
  text-align: center;
}
img {
  text-align: center;
  max-width: 65px;
}
tr {
  // font-weight: 800;
}

tr.ammonia {
  background: darkorange !important;
}
tr.chlorine {
  background: #0e74bc !important;
}
tr td:hover {
  // filter: brightness(190%);
  // opacity: 0.5;
  // background-color: darken($color: "", $amount: 10);
  cursor: pointer;
}

.red btn {
  margin: 0 !important;
  background: #c20e1a;
}
.gray {
  background: lightgrey;
}
// responsive
.instuments-table-name {
  display: block;
  text-align: center;
  width: 33%;
}

.instruments-table__content {
  padding: 0.5em;
  display: flex;
  justify-content: space-between;
  background: #eee;
}
.instruments-table__content__button {
  width: 33%;
  display: flex;
  justify-content: flex-end;
}
.instuments-table__gas {
  width: 33%;
}
@media only screen and (min-width: 992px) {
  .instruments-table--responsive {
    display: none;
  }
}
@media only screen and (max-width: 425px) {
  .instruments-table__content {
    padding: 0.5em;
    display: flex;
    justify-content: space-around;
    align-items: center;
    // border-bottom: 1px solid #585857;
    flex-direction: column;
  }
  .instuments-table-name {
    display: block;
    text-align: center;
    width: 50%;
    text-align: center;
  }
  .instruments-table__content__button {
    width: 50%;
    display: flex;
    justify-content: center;
    padding: 15px;
  }
  .instuments-table__gas {
    width: 100%;
    padding: 10px;
    justify-content: center;
    align-items: center;
    text-align: center;
  }
  .instruments-table--responsive img {
    display: block;
    margin: auto;
  }
  h3 {
    text-align: center;
  }
}

@media only screen and (max-width: 991px) {
  table.table {
    display: none;
  }
}
</style>