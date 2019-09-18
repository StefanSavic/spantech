<template>
  <div class="container">
    <h1>Calibration instrument</h1>
    <p
      my-2
    >To add instrument with options and source that you want, just click on conresponding table cell and instrument will be added.</p>
    <!-- {{product[0]}} -->
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
          <td @click="addToBasket(g,'genie101',$event)">
            <span>{{g.genie}}</span>
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
  </div>
</template>

<script>
export default {
  data() {
    return {
      gases: [
        {
          name: "ammonia",
          cal2000: "",
          cal2000lt: "",
          genie: "",
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
          genie: "1 - 25PPM",
          minibump: "1 - 25PPM < 5PPM",
          genieEC: ".05 -5 or .5 -50",
          genieO3: "",
          genieQc: "",
          qc100: "",
          qc: ""
        },
        {
          name: "chlorine-dioxide",
          cal2000: ".5 - 5PPM",
          cal2000lt: "",
          genie: "",
          minibump: " ",
          genieEC: ".5 - 5PPM",
          genieO3: "",
          genieQc: "",
          qc100: "",
          qc: ""
        },
        {
          name: "hexane",
          cal2000: "",
          cal2000lt: "",
          genie: "",
          minibump: " ",
          genieEC: "",
          genieO3: "",
          genieQc: "",
          qc100: "Bump Test",
          qc: "Bump Test"
        },
        {
          name: "hydrogen",
          cal2000: ".05 or .5 - 50PPM",
          cal2000lt: "1 - 25PPM",
          genie: "1 - 25PPM",
          minibump: "1 - 25PPM > 25PPM",
          genieEC: ".05 - 5 or .5 - 500",
          genieO3: "",
          genieQc: "",
          qc100: "",
          qc: ""
        },
        {
          name: "hydrogen chloride",
          cal2000: "",
          cal2000lt: "",
          genie: "",
          minibump: " ",
          genieEC: "",
          genieO3: "",
          genieQc: "",
          qc100: "Bump Test",
          qc: "Bump Test"
        },
        {
          name: "hydrogen cyanide",
          cal2000: ".05 or .5 - 50PPM",
          cal2000lt: "1 - 25PPM",
          genie: "1 - 25PPM",
          minibump: "1 - 25PPM > 10PPM",
          genieEC: ".05 - 5 or .5 - 50PPM",
          genieO3: "",
          genieQc: "",
          qc100: "",
          qc: ""
        },
        {
          name: "hydrogen sulfide",
          cal2000: ".05 or .5 - 50PPM",
          cal2000lt: "1 - 25PPM",
          genie: "1 - 25PPM",
          minibump: "1 - 25PPM > 25PPM",
          genieEC: ".05 - 5 or .5 - 50PPM",
          genieO3: "",
          genieQc: "",
          qc100: "",
          qc: ""
        },
        {
          name: "ozone",
          cal2000: "",
          cal2000lt: "",
          genie: "",
          minibump: "",
          genieEC: "",
          genieO3: ".2-1PPM",
          genieQc: "",
          qc100: "",
          qc: ""
        },
        {
          name: "toulene",
          cal2000: "",
          cal2000lt: "",
          genie: "",
          minibump: "",
          genieEC: "",
          genieO3: "",
          genieQc: "",
          qc100: "Bump Test",
          qc: "Bump Test"
        }
      ]
    };
  },
  methods: {
    addToBasket(data, instrument, $event) {
      var options = {
        productName: instrument,
        gas: data.name,
        details: $event.target.innerText,
        ordNum: 1,
        type: "instrument",
        stylesheet: " "
      };

      this.$store.dispatch("addToCart", options);

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
  font-weight: 800;
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
</style>