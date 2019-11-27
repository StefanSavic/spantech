<template>
  <div class="container text-left">
    <!-- <b-breadcrumb class="container spantech-breadcrumb" :items="items" /> -->
    <h1 class="text-center">
      Gas Cylinders
      <span>
        <a href="#enquiry" v-smooth-scroll>send enquiry</a>
      </span>
    </h1>

    <hr />

    <p class="text-left">
      For more than 25 years Spantech have been supplying calibration gas cylinders worldwide and building a strong
      reputation as a reliable source for specialty gases – reactive and complex mixtures – delivering exceptional value
      and the highest quality, including longest shelf life options.
    </p>
    <p>
      Each gas mixture is supplied with a certificate of composition traceable to international standards via National
      Physical Laboratory (NPL UK) standards used in the gravimetric ISO 6142 process. Depending on user’s demand or
      specific market requirements, we also deliver ISO 17025 and Johnson Perry compliant gas mixtures.
    </p>
    <p>
      In addition to the gas cylinders, we offer a complete range of premium quality regulators delivering high
      reliability and accuracy.
    </p>

    <hr />

    <h3 class="text-left">Spancan</h3>
    <hr />
    <p>Spantech's brand of calibration gases is available in a wide range of mixtures and cylinder types, at a level of cost which eliminates the need of cylinder rental.</p>
    <div class="row">
      <div class="col-md-7">
        <h5>Typical Gases Supplied:</h5>
        <ul>
          <li class="text-left" v-for="gas in gases" :key="gas">{{gas}}</li>
        </ul>
      </div>

      <div class="col-md-5">
        <img src="/img/spancan.jpg" alt />
      </div>
    </div>

    <hr />
    <h3 class="text-left">Portagas</h3>
    <hr />
    <div class="row">
      <div class="col-md-7">
        <h5>Key Benifits:</h5>
        <ul>
          <li v-for="benefit in benefits" :key="benefit">{{benefit}}</li>
        </ul>

        <h5>Revolutionary cylinder coating and treatment allows:</h5>
        <ul>
          <li v-for="coating in coatings" :key="coating">{{coating}}</li>
        </ul>
      </div>
      <div class="col-md-5">
        <img src="/img/portagas.jpg" alt fluid />
      </div>
    </div>

    <hr />
    <h3>Regulators</h3>
    <hr />
    <p>Spantech offers unmatched quality and performance from its regulators. With their unique diaphragm design, these regulators will hold their preset flow, even as the cylinder pressure is depleted.</p>
    <hr />
    <h3>Send enquiry for gas cylinders</h3>
    <textarea
      class="enquiry"
      name
      id="enquiry"
      rows="10"
      style="width:100%"
      placeholder="Your Enquiry"
      v-model="gasCylindersEnquiry"
    ></textarea>

    <button class="btn red" @click="send()">send enquiry</button>

    <div
      class="mt-3"
      dismissible
      v-show="msgSentAlert"
      @dismissed="msgSentAlert=false"
    >Message sent to enquiry basket!</div>
    <div
      class="alert alert-warning alert-dismissible fade show my-3"
      dismissible
      v-show="noEnquiryAlert"
      @dismissed="noEnquiryAlert=false"
    >
      There is no enquiry to be sent
      <button
        type="button"
        class="close"
        data-dismiss="alert"
        aria-label="Close"
      >
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  // name: "CalibrationGasCylinders",
  data() {
    return {
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
          active: true
        },
        {
          text: "Gas Instruments",
          to: "/calibration-gas-instruments",
          active: false
        },
        {
          text: "Rare Gas Purifier",
          to: "/rare-gas-purfier",
          active: false
        },
        {
          text: "Enquiry Basket",
          to: "/basket",
          active: false
        }
      ],
      noEnquiryAlert: false,
      gasCylindersEnquiry: "",
      msgSentAlert: false,
      gases: [
        "Methane",
        "LEL mixtures",
        "Oxygen mixtures",
        "CO at ppm levels",
        "Hydrocarbon mixtures",
        "Multi-mix Hydrocarbons",
        "Air",
        "Nitrogen",
        "Carbon dioxide",
        "Helium",
        "Argon",
        "Hydrogen",
        "Ammonia"
      ],
      benefits: [
        "Wide range of cylinder types and sizes",
        "Highest quality by return rate of 0.24% per year",
        "Longest shelf lives in the industry",
        "Best patented regulators on the market",
        "Disposable, returnable, and environmentally friendly PortaGreen cylinders – with the longest shelf lives in the industry."
      ],
      coatings: [
        "Difficult mixtures to be made reliable such as 1ppm H2S in Nitrogen",
        "Longer shelf life for reactive gases such as Chlorine",
        "ISO and Johnson Perry compliant",
        "Environmentally friendly return empty to base option"
      ]
    };
  },
  methods: {
    dispatch() {
      this.$store.dispatch("addGasCylinders", this.gasCylindersEnquiry);
      this.gasCylindersEnquiry = "";
      this.msgSentAlert = true;
    },
    send() {
      this.gasCylindersEnquiry ? this.dispatch() : (this.noEnquiryAlert = true);
    }
  }
};
</script>
    
<style lang="scss" scoped>
.container {
  padding-bottom: 4em;
  font-size: 15px;
  h1 {
    display: flex;
    justify-content: space-between;
    span {
      font-size: 0.4em;
      margin: auto 0;
      a {
        color: #c20e1a;
      }
    }
  }
}
ul {
  display: flex;
  flex-direction: column;
  max-height: 200px;
  flex-wrap: wrap;
  list-style-type: square;
}

.col-md-5 {
  margin: auto 0;
  img {
    max-width: 292px;
  }
}
textarea.enquiry {
  // padding: 1em;
  text-indent: 10px;
}

@media only screen and (max-width: 425px) {
  ul {
    max-height: none;
    flex-wrap: nowrap;
  }
}
</style>
