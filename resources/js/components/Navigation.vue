<template>
  <nav class="navbar navbar-expand-lg navbar-white bg-white">
    <a class="navbar-brand" href="/">
      <img src="/img/logo.svg" alt />
    </a>
    <search></search>
    <button
      class="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarNavDropdown"
      aria-controls="navbarNavDropdown"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavDropdown">
      <ul class="navbar-nav ml-auto">
        <li class="nav-item active">
          <a class="nav-link" href="/">
            Home
            <span class="sr-only">(current)</span>
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/about">About</a>
        </li>
        <li class="nav-item dropdown">
          <a
            class="nav-link dropdown-toggle"
            href="#"
            id="navbarDropdownMenuLink"
            role="button"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >Products</a>
          <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
            <a class="dropdown-item" href="/gas-sensors">Gas Sensors</a>
            <a class="dropdown-item" href="/calibration-gas">Calibration Gas</a>
            <a class="dropdown-item" href="/calibration-instruments">Calibration Instruments</a>
            <a class="dropdown-item" href="/rare-gas-purifirer">Rare Gas Purifirer</a>
          </div>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/enquiry-basket">Enquiry Basket</a>
        </li>
        <li class="d-flex">
          <i class="fas fa-shopping-basket d-block m-auto pl-1"></i>
          <span class="m-auto pl-1">{{inCartNum}}</span>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
// import search from "./SearchBar";

export default {
  computed: {
    inCartNum() {
      return this.$store.getters.inCart.length;
    }
  }
};
</script>

<style lang="scss">
nav {
  margin-bottom: 1em;
  border-bottom: 1px solid black;
}

a {
  color: black;
}
</style>

