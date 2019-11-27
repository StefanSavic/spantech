<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-light row">
      <a class="navbar-brand d-none d-sm-block" href="/">
        <img src="/img/logo.svg" alt />
      </a>
      <a class="navbar-brand d-block d-sm-none small-logo" href="/">
        <img src="/img/small-logo.svg" alt />
      </a>

      <search class="big-screen-search"></search>
      <div class="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
        <ul class="navbar-nav">
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
              id="navbarDropdown"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >Products</a>
            <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
              <a class="dropdown-item" href="/gas-sensors">Gas Sensors</a>
              <a class="dropdown-item" href="/calibration-gas">Calibration Gas</a>
              <a class="dropdown-item" href="/calibration-instruments">Calibration Instruments</a>
              <a class="dropdown-item" href="/rare-gas-purifier">Rare Gas Purifirer</a>
            </div>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/enquiry-basket">Enquiry</a>
          </li>
          <li class="d-flex">
            <i class="fas fa-shopping-basket d-block my-auto pl-1"></i>
            <span class="my-auto pl-1">{{inCartNum}}</span>
          </li>
        </ul>
      </div>
      <button
        class="navbar-toggler responsive-button"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <!-- <div class="d-flex">
        <i class="fas fa-shopping-basket d-block my-auto pl-1"></i>
        <span class="my-auto pl-1">{{inCartNum}}</span>
      </div>-->
      <search class="medium-screen-search"></search>
    </nav>
  </div>
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
  padding: 0 2.5em !important;
}
.small-logo {
  // display: none;
}
@media only screen and (min-width: 902px) {
  .medium-screen-search {
    display: none !important;
  }
}
@media only screen and (max-width: 902px) {
  .big-screen-search {
    display: none !important;
  }
  .search-bar {
    width: 100% !important;
    transform: none !important;
  }
  .search-wrapper {
    width: 100% !important;
  }
  // .search-ico {
  //   top: 25px;
  // }
  // .responsive-button {
  //   position: absolute;
  //   right: 25px;
  //   top: 21px;
  // }
  // .search-bar {
  //   transform: translateY(20px);
  // }
  // .navbar-brand {
  //   transform: translateY(12px);
  // }
  // .search-bar .search-wrapper {
  //   width: 100%;
  // }
  // .small-logo {
  //   display: block !important;
  // }
}
@media only screen and (min-width: 992px) {
  #navbarSupportedContent {
    margin-left: 3em;
  }
}
@media only screen and (max-width: 425px) {
  .search-ico {
    top: 25px;
  }
  .responsive-button {
    position: absolute;
    right: 25px;
    top: 21px;
  }

  .navbar-brand {
    transform: translateY(12px);
  }
  .search-bar .search-wrapper {
    width: 100%;
  }
  .small-logo {
    display: block !important;
  }
}
@media only screen and (max-width: 425px) {
  .responsive-button {
    position: absolute;
    right: 37px;
    top: 17px;
  }
}
@media only screen and (min-width: 578px) and (max-width: 902px) {
  .navbar-brand {
    width: 30% !important;
  }
}
nav {
  margin-bottom: 1em;
  // border-bottom: 1px solid black;
  -webkit-box-shadow: 1px 0 5px 0 #585857;
  -moz-box-shadow: 1px 0 5px 0 #585857;
  box-shadow: 1px 0 5px 0 #585857;
}

a {
  text-transform: uppercase;
  color: black;
}
</style>

