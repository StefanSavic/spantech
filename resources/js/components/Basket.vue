<template>
  <div>
    <h1 class="my-3">
      Your enquiry basket
      <span v-if="devices.length <= 0">is currently empty</span>
    </h1>
    <h3>Feel free to send us an enquiry</h3>
    <!-- {{product[0]}} -->
    <table v-if="devices.length > 0" class="table table-bordered table-hover">
      <thead>
        <tr>
          <th scope="col">Product name</th>
          <th scope="col">Manufacturer</th>
          <th scope="col">Type</th>
          <th scope="col">Gas</th>
          <th scope="col">Details / Source</th>
          <th scope="col">Stylesheet</th>
          <th scope="col">Quantity</th>
          <th scope="col">Remove</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(device,i) in devices" :key="i">
          <td scope="col" class="text-capitalize">{{device.productName}}</td>
          <td scope="col" class="text-capitalize">{{device.manufac}}</td>
          <td scope="col" class="text-capitalize">{{device.type}}</td>
          <td scope="col" class="text-capitalize">{{device.gas}}</td>
          <td scope="col" class="text-capitalize">{{device.details}}</td>
          <td scope="col">
            <a :href="device.link">{{device.link}}</a>
          </td>

          <td>
            <counter :ordNum="device.ordNum" :gas="device.gas" :productName="device.productName"></counter>
          </td>
          <td>
            <button class="btn red" @click="removeItem(device)" variant="danger">remove</button>
          </td>
        </tr>
      </tbody>
    </table>

    <form @submit="formSubmit">
      <div class="form-group">
        <label for="enquiry">Enquiry</label>
        <textarea
          type="text"
          class="form-control"
          id="enquiry"
          placeholder="enquiry"
          v-model="enquiry"
        ></textarea>
      </div>
      <!-- {{resetData}} -->
      <h1 class="my-3">Your informations</h1>
      <hr />
      <div class="form-group">
        <label for="name">Name</label>
        <input
          type="text"
          required
          class="form-control"
          id="name"
          placeholder="First name"
          v-model="customer.name"
        />
      </div>
      <div class="form-group">
        <label for="exampleCheck1">Last Name</label>
        <input
          required
          type="text"
          class="form-control"
          id="lastName"
          placeholder="Last name"
          v-model="customer.lastName"
        />
      </div>
      <!-- form -->
      <div class="form-group">
        <label for="exampleInputEmail1">Email address</label>
        <input
          required
          name="email"
          type="email"
          class="form-control"
          aria-describedby="emailHelp"
          placeholder="Enter email"
          v-model="customer.email"
        />
        <small
          id="emailHelp"
          class="form-text text-muted"
        >We'll never share your email with anyone else.</small>
      </div>
      <div v-if="error" class="notification">{{error}}</div>
      <button class="btn red">submit</button>
    </form>
  </div>
</template>


<script>
export default {
  data() {
    return {
      customer: {
        name: "",
        lastName: "",
        email: ""
      },
      error: "",
      enquiry: this.$store.getters.gasCylindersEnquiry,
      resetData: false
    };
  },

  methods: {
    removeItem(data) {
      this.$store.dispatch("removeFromCart", {
        index: data.index,
        productName: data.productName,
        gas: data.product,
        output: ""
      });
    },

    formSubmit(e) {
      console.log(this.customer);
      e.preventDefault();
      var self = this;
      axios
        .post("/enquiry-basket", [
          this.devices,
          this.customer,
          { enquiry: this.enquiry }
        ])
        .then(function(response) {
          console.log(response);
          // console.log(self);
          self.reset();
          // console.log(this.rese);
        })
        .catch(function(error) {});
    },

    reset() {
      // this.resetData = true;
      this.customer.name = "";
      this.customer.email = "";
      this.customer.lastName = "";
      this.enquiry = "";
      this.$store.dispatch("emptyCart");
    }
  },
  computed: {
    devices() {
      return this.$store.getters.inCart;
    }
    // enquiry() {
    //   return this.$store.getters.gasCylindersEnquiry;
    // }
  }
};
</script>

