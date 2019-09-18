import Vue from "vue";
import Vuex from "vuex";
import createPersistedState from "vuex-persistedstate";
import axios from "axios";

Vue.use(Vuex);
Vue.use(axios);

export default new Vuex.Store({
    // axios
    //     .get("http://studio-sova.rs/api/products.json")
    //     //   .then(response => {
    //     //     contex.commit('GET_PRODUCTS', response.data);
    //     //   })
    //     .then(response => {
    //         console.log('from store', response.data);
    //         contex.commit('GET_PRODUCTS', response.data);
    //     })
    //     .catch(function (error) {
    //         // handle error
    //         console.log(error);
    //     })
    //     .finally(function () {
    //         // always executed
    //     });

    state: {
        products: [
            {
                name: "ammonia",
                chemicalId: "NH3",
                devices: [
                    {
                        ordNum: 1,
                        manufacturer: "CITY",
                        gas: "ammonia",
                        type: "sensoric",
                        productName: "NH3 3E 100 - Mini",
                        life: ">18 months",
                        range: "0-100ppm ",
                        details:
                            "3 Electrode sensor with organic electrolyte; Mini Format.",
                        link:
                            "https://www.citytech.com/en-gb/PDF-Datasheets/nh33e100.pdf",
                        SKU: "1845-031-30009"
                    },
                    {
                        ordNum: 1,
                        manufacturer: "CITY",
                        gas: "ammonia",
                        type: "sensoric",
                        productName: "NH3 3E 100 - Classic",
                        life: ">18 months",
                        range: "0-100ppm ",
                        details:
                            "3 Electrode sensor with organic electrolyte; Classic Format.",
                        link:
                            "https://www.citytech.com/en-gb/PDF-Datasheets/nh33e100.pdf",
                        SKU: "1845-031-30069"
                    },
                    {
                        ordNum: 1,
                        manufacturer: "CITY",
                        gas: "ammonia",
                        type: "sensoric",
                        productName: "NH3 3E 100 - 4-Series",
                        life: ">18 months",
                        range: "0-100ppm ",
                        details:
                            "3 Electrode sensor with organic electrolyte; 4-Series Format.",
                        link:
                            "https://www.citytech.com/en-gb/PDF-Datasheets/nh33e100.pdf",
                        SKU: "1845-031-30049"
                    },
                    {
                        ordNum: 1,
                        manufacturer: "CITY",
                        gas: "ammonia",
                        type: "sensoric",
                        productName: "NH3 3E 100 - 7-Series",
                        life: ">18 months",
                        range: "0-100ppm ",
                        details:
                            "3 Electrode sensor with organic electrolyte; 7-Series Format.",
                        link:
                            "https://www.citytech.com/en-gb/PDF-Datasheets/nh33e100.pdf",
                        SKU: "1845-031-30079"
                    },
                    {
                        ordNum: 1,
                        manufacturer: "CITY",
                        gas: "ammonia",
                        type: "sensoric",
                        productName: "NH3 3E 100 SE - Mini",
                        life: ">2 years",
                        range: "0-100ppm ",
                        details: "3 Electrode sensor; Mini Format.",
                        link:
                            "https://www.citytech.com/en-gb/PDF-Datasheets/nh33e100se.pdf",
                        SKU: "1845-932-30009"
                    },
                    {
                        ordNum: 1,
                        manufacturer: "CITY",
                        gas: "ammonia",
                        type: "sensoric",
                        productName: "NH3 3E 100 SE - Classic",
                        life: ">2 years",
                        range: "0-100ppm ",
                        details: "3 Electrode sensor; Classic Format.",
                        link:
                            "https://www.citytech.com/en-gb/PDF-Datasheets/nh33e100se.pdf",
                        SKU: "1845-932-30069"
                    },
                    {
                        ordNum: 1,
                        manufacturer: "CITY",
                        gas: "ammonia",
                        type: "sensoric",
                        productName: "NH3 3E 100 SE - 4-Series",
                        life: ">2 years",
                        range: "0-100ppm ",
                        details: "3 Electrode sensor; 4-Series Format.",
                        link:
                            "https://www.citytech.com/en-gb/PDF-Datasheets/nh33e100se.pdf",
                        SKU: "1845-932-30049"
                    },
                    {
                        ordNum: 1,
                        manufacturer: "CITY",
                        gas: "ammonia",
                        type: "sensoric",
                        productName: "NH3 3E 100 SE - 7-series",
                        life: ">2 years",
                        range: "0-100ppm ",
                        details: "3 Electrode sensor; 7-Series Format.",
                        link:
                            "https://www.citytech.com/en-gb/PDF-Datasheets/nh33e100se.pdf",
                        SKU: "1845-932-30079"
                    },
                    {
                        ordNum: 1,
                        manufacturer: "CITY",
                        gas: "ammonia",
                        type: "sensoric",
                        productName: "NH3 3E 1000 - Mini",
                        life: ">18 months",
                        range: "0-1000ppm ",
                        details:
                            "3 Electrode sensor with organic electrolyte; Mini Format",
                        link:
                            "https://www.citytech.com/en-gb/PDF-Datasheets/nh33e1000.pdf",
                        SKU: "1854-031-30009"
                    },
                    {
                        ordNum: 1,
                        manufacturer: "CITY",
                        gas: "ammonia",
                        type: "sensoric",
                        productName: "NH3 3E 1000 - Classic",
                        life: ">18 months",
                        range: "0-1000ppm ",
                        details:
                            "3 Electrode sensor with organic electrolyte; Classic Format",
                        link:
                            "https://www.citytech.com/en-gb/PDF-Datasheets/nh33e1000.pdf",
                        SKU: "1854-031-30069"
                    },
                    {
                        ordNum: 1,
                        manufacturer: "CITY",
                        gas: "ammonia",
                        type: "sensoric",
                        productName: "NH3 3E 1000 - Smart",
                        life: ">18 months",
                        range: "0-1000ppm ",
                        details:
                            "3 Electrode sensor with organic electrolyte; Smart Format",
                        link:
                            "https://www.citytech.com/en-gb/PDF-Datasheets/nh33e1000.pdf",
                        SKU: "1854-031-30209"
                    },
                    {
                        ordNum: 1,
                        manufacturer: "CITY",
                        gas: "ammonia",
                        type: "sensoric",
                        productName: "NH3 3E 1000 - 4-Series",
                        life: ">18 months",
                        range: "0-1000ppm ",
                        details:
                            "3 Electrode sensor with organic electrolyte; 4-Series Format.",
                        link:
                            "https://www.citytech.com/en-gb/PDF-Datasheets/nh33e1000.pdf",
                        SKU: "1854-031-30049"
                    },
                    {
                        ordNum: 1,
                        manufacturer: "CITY",
                        gas: "ammonia",
                        type: "sensoric",
                        productName: "NH3 3E 1000 - 7-Series",
                        life: ">18 months",
                        range: "0-1000ppm ",
                        details:
                            "3 Electrode sensor with organic electrolyte; 7-Series Format.",
                        link:
                            "https://www.citytech.com/en-gb/PDF-Datasheets/nh33e1000.pdf",
                        SKU: "1854-031-30079"
                    },
                    {
                        ordNum: 1,
                        manufacturer: "CITY",
                        gas: "ammonia",
                        type: "sensoric",
                        productName: "NH3 3E 1000 SE - Mini",
                        life: ">2 years",
                        range: "0-1000ppm ",
                        details: "3 Electrode sensor; Mini Format",
                        link:
                            "https://www.citytech.com/en-gb/PDF-Datasheets/nh33e1000se.pdf",
                        SKU: "1854-932-30009"
                    },
                    {
                        ordNum: 1,
                        manufacturer: "CITY",
                        gas: "ammonia",
                        type: "sensoric",
                        productName: "NH3 3E 1000 SE - Classic",
                        life: ">2 years",
                        range: "0-1000ppm ",
                        details: "3 Electrode sensor; Classic Format",
                        link:
                            "https://www.citytech.com/en-gb/PDF-Datasheets/nh33e1000se.pdf",
                        SKU: "1854-932-30069"
                    },
                    {
                        ordNum: 1,
                        manufacturer: "CITY",
                        gas: "ammonia",
                        type: "sensoric",
                        productName: "NH3 3E 1000 SE - 4-Series",
                        life: ">2 years",
                        range: "0-1000ppm ",
                        details: "3 Electrode sensor; 4-Series Format",
                        link:
                            "https://www.citytech.com/en-gb/PDF-Datasheets/nh33e1000se.pdf",
                        SKU: "1854-932-30049"
                    },
                    {
                        ordNum: 1,
                        manufacturer: "CITY",
                        gas: "ammonia",
                        type: "sensoric",
                        productName: "NH3 3E 1000 SE - 7-Series ",
                        life: ">2 years",
                        range: "0-1000ppm ",
                        details: "3 Electrode sensor; 7-Series Format",
                        link:
                            "https://www.citytech.com/en-gb/PDF-Datasheets/nh33e1000se.pdf",
                        SKU: "1854-932-30079"
                    },
                    {
                        ordNum: 1,
                        manufacturer: "CITY",
                        gas: "ammonia",
                        type: "sensoric",
                        productName: "NH3 3E 500 SE - Mini",
                        life: ">2 years",
                        range: "0-500ppm ",
                        details: "3 Electrode sensor; Mini Format",
                        link:
                            "https://www.citytech.com/en-gb/PDF-Datasheets/nh33e500se.pdf",
                        SKU: "1850-932-30009"
                    },
                    {
                        ordNum: 1,
                        manufacturer: "CITY",
                        gas: "ammonia",
                        type: "sensoric",
                        productName: "NH3 3E 500 SE - Classic",
                        life: ">2 years",
                        range: "0-500ppm ",
                        details: "3 Electrode sensor; Classic Format",
                        link:
                            "https://www.citytech.com/en-gb/PDF-Datasheets/nh33e500se.pdf",
                        SKU: "1850-932-30069"
                    },
                    {
                        ordNum: 1,
                        manufacturer: "CITY",
                        gas: "ammonia",
                        type: "sensoric",
                        productName: "NH3 3E 500 SE - 4-Series",
                        life: ">2 years",
                        range: "0-500ppm ",
                        details: "3 Electrode sensor; 4-Series Format",
                        link:
                            "https://www.citytech.com/en-gb/PDF-Datasheets/nh33e500se.pdf",
                        SKU: "1850-932-30049"
                    },
                    {
                        ordNum: 1,
                        manufacturer: "CITY",
                        gas: "ammonia",
                        type: "sensoric",
                        productName: "NH3 3E 500 SE - 7-series",
                        life: ">2 years",
                        range: "0-500ppm ",
                        details: "3 Electrode sensor; 7-Series Format",
                        link:
                            "https://www.citytech.com/en-gb/PDF-Datasheets/nh33e500se.pdf",
                        SKU: "1850-932-30079"
                    },
                    {
                        ordNum: 1,
                        manufacturer: "CITY",
                        gas: "ammonia",
                        type: "sensoric",
                        productName: "NH3 3E 5000 SE - Mini",
                        life: ">2 years",
                        range: "0-5000ppm ",
                        details: "3 Electrode sensor; Mini Format",
                        link:
                            "https://www.citytech.com/en-gb/PDF-Datasheets/nh33e5000se.pdf",
                        SKU: "1858-932-30009 "
                    },
                    {
                        ordNum: 1,
                        manufacturer: "CITY",
                        gas: "ammonia",
                        type: "sensoric",
                        productName: "NH3 3E 5000 SE - Classic",
                        life: ">2 years",
                        range: "0-5000ppm ",
                        details: "3 Electrode sensor; Classic Format",
                        link:
                            "https://www.citytech.com/en-gb/PDF-Datasheets/nh33e5000se.pdf",
                        SKU: "1858-932-30069"
                    },
                    {
                        ordNum: 1,
                        manufacturer: "CITY",
                        gas: "ammonia",
                        type: "sensoric",
                        productName: "NH3 3E 5000 SE - 4-Series",
                        life: ">2 years",
                        range: "0-5000ppm ",
                        details: "3 Electrode sensor; 4-Series Format",
                        link:
                            "https://www.citytech.com/en-gb/PDF-Datasheets/nh33e5000se.pdf",
                        SKU: "1858-932-30049"
                    },
                    {
                        ordNum: 1,
                        manufacturer: "CITY",
                        gas: "ammonia",
                        type: "sensoric",
                        productName: "NH3 3E 5000 SE - 7-Series",
                        life: ">2 years",
                        range: "0-5000ppm ",
                        details: "3 Electrode sensor; 7-Series Format",
                        link:
                            "https://www.citytech.com/en-gb/PDF-Datasheets/nh33e5000se.pdf",
                        SKU: "1858-932-30079"
                    }
                ]
            },

            {
                name: "arsine",
                chemicalId: "AsH3",
                devices: [
                    {
                        ordNum: 1,
                        gas: "arsine",
                        manufacturer: "CITY",
                        type: "sensoric",
                        SKU: "0731-237-30009",
                        productName: "AsH3 3E 1 F LT - Mini",
                        "life ": "2 years ",
                        range: "0-1ppm ",
                        details:
                            "3 Electrode sensor with ionic liquid electrolyte and 200ppm hour H2S filter; Mini Format. ",
                        link:
                            "https://www.citytech.com/en-gb/PDF-Datasheets/ash33e1flt.pdf"
                    },
                    {
                        ordNum: 1,
                        gas: "arsine",
                        manufacturer: "CITY",
                        type: "sensoric",
                        SKU: "0731-237-30049",
                        productName: "AsH3 3E 1 F LT - 4-Series",
                        "life ": "2 years ",
                        range: "0-1ppm ",
                        details:
                            "3 Electrode sensor with ionic liquid electrolyte and 200ppm hour H2S filter; 4 Series Format. ",
                        link:
                            "https://www.citytech.com/en-gb/PDF-Datasheets/ash33e1flt.pdf"
                    },
                    {
                        ordNum: 1,
                        gas: "arsine",
                        manufacturer: "CITY",
                        type: "sensoric",
                        SKU: "0731-237-30079",
                        productName: "AsH3 3E 1 F LT - 7-Series",
                        "life ": "2 years ",
                        range: "0-1ppm ",
                        details:
                            "3 Electrode sensor with ionic liquid electrolyte and 200ppm hour H2S filter; 7 Series Format. ",
                        link:
                            "https://www.citytech.com/en-gb/PDF-Datasheets/ash33e1flt.pdf"
                    },
                    {
                        ordNum: 1,
                        gas: "arsine",
                        manufacturer: "CITY",
                        type: "sensoric",
                        SKU: "0731-237-30069",
                        productName: "AsH3 3E 1 F LT - Classic",
                        "life ": "2 years ",
                        range: "0-1ppm ",
                        details:
                            "3 Electrode sensor with ionic liquid electrolyte and 200ppm hour H2S filter; Classic Format. ",
                        link:
                            "https://www.citytech.com/en-gb/PDF-Datasheets/ash33e1flt.pdf"
                    },
                    {
                        ordNum: 1,
                        gas: "arsine",
                        manufacturer: "CITY",
                        type: "sensoric",
                        SKU: "0731-237-30259",
                        productName: "AsH3 3E 1 F LT - Smart",
                        "life ": "2 years ",
                        range: "0-1ppm ",
                        details:
                            "3 Electrode sensor with ionic liquid electrolyte and 200ppm hour H2S filter; Smart Format. ",
                        link:
                            "https://www.citytech.com/en-gb/PDF-Datasheets/ash33e1flt.pdf"
                    },
                    {
                        ordNum: 1,
                        gas: "arsine",
                        manufacturer: "CITY",
                        type: "sensoric",
                        SKU: "0731-237-30659",
                        productName: "AsH3 3E 1 F LT - Transmitter",
                        "life ": "2 years ",
                        range: "0-1ppm ",
                        details:
                            "3 Electrode sensor with ionic liquid electrolyte and 200ppm hour H2S filter; Transmitter ",
                        link:
                            "https://www.citytech.com/en-gb/PDF-Datasheets/ash33e1flt.pdf"
                    },
                    {
                        ordNum: 1,
                        gas: "arsine",
                        manufacturer: "CITY",
                        type: "sensoric",
                        SKU: "0731-337-30009",
                        productName: "AsH3 3E 1 LT - Mini",
                        "life ": "2 years ",
                        range: "0-1ppm ",
                        details:
                            "3 Electrode sensor with ionic liquid electrolyte; available in Mini Format.  ",
                        link:
                            "https://www.citytech.com/en-gb/PDF-Datasheets/ash33e1lt.pdf"
                    },
                    {
                        ordNum: 1,
                        gas: "arsine",
                        manufacturer: "CITY",
                        type: "sensoric",
                        SKU: "0731-337-30049",
                        productName: "AsH3 3E 1 LT - 4-Series",
                        range: "0-1ppm ",
                        details:
                            "3 Electrode sensor with ionic liquid electrolyte; 4-Series Format.  ",
                        link:
                            "https://www.citytech.com/en-gb/PDF-Datasheets/ash33e1lt.pdf"
                    },
                    {
                        ordNum: 1,
                        gas: "arsine",
                        manufacturer: "CITY",
                        type: "sensoric",
                        SKU: "0731-337-30079",
                        productName: "AsH3 3E 1 LT - 7-Series",
                        range: "0-1ppm ",
                        details:
                            "3 Electrode sensor with ionic liquid electrolyte; available in 7-Series Format.",
                        link:
                            "https://www.citytech.com/en-gb/PDF-Datasheets/ash33e1lt.pdf"
                    },
                    {
                        ordNum: 1,
                        gas: "arsine",
                        manufacturer: "CITY",
                        type: "sensoric",
                        SKU: "0731-337-30069",
                        productName: "AsH3 3E 1 LT - Classic ",
                        range: "0-1ppm ",
                        details:
                            "3 Electrode sensor with ionic liquid electrolyte; available in Classic Format.  ",
                        link:
                            "https://www.citytech.com/en-gb/PDF-Datasheets/ash33e1lt.pdf"
                    },
                    {
                        ordNum: 1,
                        gas: "arsine",
                        manufacturer: "CITY",
                        type: "sensoric",
                        SKU: "0731-337-30259",
                        productName: "AsH3 3E 1 LT - Smart",
                        range: "0-1ppm ",
                        details:
                            "3 Electrode sensor with ionic liquid electrolyte; available in Smart Format.  ",
                        link:
                            "https://www.citytech.com/en-gb/PDF-Datasheets/ash33e1lt.pdf"
                    },
                    {
                        ordNum: 1,
                        gas: "arsine",
                        manufacturer: "CITY",
                        type: "sensoric",
                        SKU: "0731-337-30659",
                        productName: "AsH3 3E 1 LT - Transmitter ",
                        range: "0-1ppm ",
                        details:
                            "3 Electrode sensor with ionic liquid electrolyte; available in Transmitter Format.  ",
                        link:
                            "https://www.citytech.com/en-gb/PDF-Datasheets/ash33e1lt.pdf"
                    },
                    {
                        ordNum: 1,
                        gas: "arsine",
                        manufacturer: "CITY",
                        type: "sensoric",
                        SKU: "0731-021-30009",
                        productName: "AsH3 2E 1 - Mini ",
                        "life ": "18 month ",
                        range: "0-500ppb ",
                        details:
                            "2 Electrode sensor with organic gel electrolyte; Mini Format",
                        link:
                            "https://www.citytech.com/en-gb/PDF-Datasheets/ash32e1.pdf"
                    },
                    {
                        ordNum: 1,
                        gas: "arsine",
                        manufacturer: "CITY",
                        type: "sensoric",
                        SKU: "0731-021-30069",
                        productName: "AsH3 2E 1 - Classic",
                        "life ": "18 month ",
                        range: "0-500ppb ",
                        details:
                            "2 Electrode sensor with organic gel electrolyte; Classic Format.",
                        link:
                            "https://www.citytech.com/en-gb/PDF-Datasheets/ash32e1.pdf"
                    },
                    {
                        ordNum: 1,
                        gas: "arsine",
                        manufacturer: "CITY",
                        type: "sensoric",
                        SKU: "0731-021-30049",
                        productName: "AsH3 2E 1 - 4-Series",
                        "life ": "18 month ",
                        range: "0-500ppb ",
                        details:
                            "2 Electrode sensor with organic gel electrolyte; 4-Series Format. ",
                        link:
                            "https://www.citytech.com/en-gb/PDF-Datasheets/ash32e1.pdf"
                    },
                    {
                        ordNum: 1,
                        gas: "arsine",
                        manufacturer: "CITY",
                        type: "sensoric",
                        SKU: "0731-021-30079",
                        productName: "AsH3 2E 1 - 7-Series",
                        "life ": "18 month ",
                        range: "0-500ppb ",
                        details:
                            "2 Electrode sensor with organic gel electrolyte; 7-Series Format. ",
                        link:
                            "https://www.citytech.com/en-gb/PDF-Datasheets/ash32e1.pdf"
                    }
                ]
            },
            {
                name: "carbon-monoxide",
                chemicalId: "CO",
                devices: [
                    {
                        ordNum: 1,
                        gas: "carbon-monoxide",
                        manufacturer: "CITY",
                        type: "4 type",
                        SKU: "AB231-801",
                        productName: "2CF3 ",
                        "life ": "2 years in air ",
                        range: "0-1000ppm ",
                        details: "2 Electrode minature sensor ",
                        link:
                            "https://www.citytech.com/en-gb/PDF-Datasheets/2cf3.pdf"
                    },
                    {
                        ordNum: 1,
                        gas: "carbon-monoxide",
                        manufacturer: "CITY",
                        type: "3 type",
                        SKU: "AB001-J08",
                        productName: "2EF ",
                        "life ": "2 years in air ",
                        range: "0-500ppm ",
                        details:
                            "2 Electrode sensor with H2S filter - With side tag and PCB pin connections ",
                        link:
                            "https://www.citytech.com/en-gb/PDF-Datasheets/2ef.pdf"
                    },
                    {
                        ordNum: 1,
                        gas: "carbon-monoxide",
                        manufacturer: "CITY",
                        type: "3 type",
                        SKU: "AB001-008",
                        productName: "2EFS",
                        "life ": "2 years in air ",
                        range: "0-500ppm ",
                        details:
                            "2 Electrode sensor with H2S filter - With side tag connection",
                        link:
                            "https://www.citytech.com/en-gb/PDF-Datasheets/2ef.pdf"
                    },
                    {
                        ordNum: 1,
                        gas: "carbon-monoxide",
                        manufacturer: "CITY",
                        type: "3 type",
                        SKU: "AB004-J40",
                        productName: "3E ",
                        "life ": "3 years in air ",
                        range: "0-2000ppm ",
                        details:
                            "3 Electrode sensor - With side tag and PCB pin connections",
                        link:
                            "https://www.citytech.com/en-gb/PDF-Datasheets/3e.pdf"
                    },
                    {
                        ordNum: 1,
                        gas: "carbon-monoxide",
                        manufacturer: "CITY",
                        type: "3 type",
                        SKU: "AB004-040",
                        productName: "3E(S)",
                        "life ": "3 years in air ",
                        range: "0-2000ppm ",
                        details:
                            "3 Electrode sensor - With side tag connection",
                        link:
                            "https://www.citytech.com/en-gb/PDF-Datasheets/3e.pdf"
                    },
                    {
                        ordNum: 1,
                        gas: "carbon-monoxide",
                        manufacturer: "CITY",
                        type: "3 type",
                        SKU: "AB004-340",
                        productName: "3E(G)",
                        "life ": "3 years in air ",
                        range: "0-2000ppm ",
                        details:
                            "3 Electrode sensor - With gold-plated PCB pin connection",
                        link:
                            "https://www.citytech.com/en-gb/PDF-Datasheets/3e.pdf"
                    },
                    {
                        ordNum: 1,
                        gas: "carbon-monoxide",
                        manufacturer: "CITY",
                        type: "3 type",
                        SKU: "AB004-J08",
                        productName: "3EF ",
                        "life ": "3 years in air ",
                        range: "0-2000ppm ",
                        details:
                            "3 Electrode sensor with H2S filter - With side tag and PCB pin connections",
                        link:
                            "https://www.citytech.com/en-gb/PDF-Datasheets/3ef.pdf"
                    },
                    {
                        ordNum: 1,
                        gas: "carbon-monoxide",
                        manufacturer: "CITY",
                        type: "3 type",
                        SKU: "AB004-008",
                        productName: "3EF(S)",
                        "life ": "3 years in air ",
                        range: "0-2000ppm ",
                        details:
                            "3 Electrode sensor with H2S filter - With side tag connection",
                        link:
                            "https://www.citytech.com/en-gb/PDF-Datasheets/3ef.pdf"
                    },
                    {
                        ordNum: 1,
                        gas: "carbon-monoxide",
                        manufacturer: "CITY",
                        type: "3 type",
                        SKU: "AB004-308",
                        productName: "3EF(G)",
                        "life ": "3 years in air ",
                        range: "0-2000ppm ",
                        details:
                            "3 Electrode sensor with H2S filter - With gold-plated PCB pin connection",
                        link:
                            "https://www.citytech.com/en-gb/PDF-Datasheets/3ef.pdf"
                    },
                    {
                        ordNum: 1,
                        gas: "carbon-monoxide",
                        manufacturer: "CITY",
                        type: "3 type",
                        SKU: "AB006-J02",
                        productName: "3FD ",
                        "life ": "3 years in air ",
                        range: "0-20000ppm ",
                        details:
                            "3 Electrode sensor with high capacity SOx/NOx and H2S filter - With side tag and PCB pin connections",
                        link:
                            "https://www.citytech.com/en-gb/PDF-Datasheets/3fd.pdf"
                    },
                    {
                        ordNum: 1,
                        gas: "carbon-monoxide",
                        manufacturer: "CITY",
                        type: "3 type",
                        SKU: "AB006-002",
                        productName: "3FD(S)",
                        "life ": "3 years in air ",
                        range: "0-20000ppm ",
                        details:
                            "3 Electrode sensor with high capacity SOx/NOx and H2S filter  - With side tag connection",
                        link:
                            "https://www.citytech.com/en-gb/PDF-Datasheets/3fd.pdf"
                    },
                    {
                        ordNum: 1,
                        gas: "carbon-monoxide",
                        manufacturer: "CITY",
                        type: "3 type",
                        SKU: "ABG06-J08",
                        productName: "3FF",
                        "life ": "3 years in air ",
                        range: "0-20000ppm ",
                        details:
                            "3 Electrode sensor with SOx/NOx and H2S filter - With side tag and PCB pin connections",
                        link:
                            "https://www.citytech.com/en-gb/PDF-Datasheets/3ff.pdf"
                    },
                    {
                        ordNum: 1,
                        gas: "carbon-monoxide",
                        manufacturer: "CITY",
                        type: "3 type",
                        SKU: "ABG06-008",
                        productName: "3FF(S)",
                        "life ": "3 years in air ",
                        range: "0-20000ppm ",
                        details:
                            "3 Electrode sensor with SOx/NOx and H2S filter - With side tag connections",
                        link:
                            "https://www.citytech.com/en-gb/PDF-Datasheets/3ff.pdf"
                    },
                    {
                        ordNum: 1,
                        gas: "carbon-monoxide",
                        manufacturer: "CITY",
                        type: "3 type",
                        SKU: "ABG06-308",
                        productName: "3FF(G)",
                        "life ": "3 years in air ",
                        range: "0-20000ppm ",
                        details:
                            "3 Electrode sensor with SOx/NOx and H2S filter - With gold-plated PCB pin connection",
                        link:
                            "https://www.citytech.com/en-gb/PDF-Datasheets/3ff.pdf"
                    },
                    {
                        ordNum: 1,
                        gas: "carbon-monoxide",
                        manufacturer: "CITY",
                        type: "3 type",
                        SKU: "AB008-J30",
                        productName: "3M ",
                        "life ": "3 years in air ",
                        range: "0-100000ppm ",
                        details:
                            "3 Electrode sensor - high range- With side tag and PCB pin connections",
                        link:
                            "https://www.citytech.com/en-gb/PDF-Datasheets/3m.pdf"
                    },
                    {
                        ordNum: 1,
                        gas: "carbon-monoxide",
                        manufacturer: "CITY",
                        type: "3 type",
                        SKU: "AB008-030",
                        productName: "3M(S)",
                        "life ": "3 years in air ",
                        range: "0-100000ppm ",
                        details:
                            "3 Electrode sensor - high range - With side tag connections",
                        link:
                            "https://www.citytech.com/en-gb/PDF-Datasheets/3m.pdf"
                    },
                    {
                        ordNum: 1,
                        gas: "carbon-monoxide",
                        manufacturer: "CITY",
                        type: "3 type",
                        SKU: "AB008-330",
                        productName: "3M(G)",
                        "life ": "3 years in air ",
                        range: "0-100000ppm ",
                        details:
                            "3 Electrode sensor - high range- With gold-plated PCB pin connection",
                        link:
                            "https://www.citytech.com/en-gb/PDF-Datasheets/3m.pdf"
                    },
                    {
                        ordNum: 1,
                        gas: "carbon-monoxide",
                        manufacturer: "CITY",
                        type: "3 type",
                        SKU: "AB008-J38",
                        productName: "3MF ",
                        "life ": "3 years in air ",
                        range: "0-100000ppm ",
                        details:
                            "3 Electrode sensor - high range with SOx/NOx and H2S filter - With side tag and PCB pin connections",
                        link:
                            "https://www.citytech.com/en-gb/PDF-Datasheets/3mf.pdf"
                    },
                    {
                        ordNum: 1,
                        gas: "carbon-monoxide",
                        manufacturer: "CITY",
                        type: "3 type",
                        SKU: "AB008-038",
                        productName: "3MF(S)",
                        "life ": "3 years in air ",
                        range: "0-100000ppm ",
                        details:
                            "3 Electrode sensor - high range with SOx/NOx and H2S filter  - With side tag connections",
                        link:
                            "https://www.citytech.com/en-gb/PDF-Datasheets/3mf.pdf"
                    },
                    {
                        ordNum: 1,
                        gas: "carbon-monoxide",
                        manufacturer: "CITY",
                        type: "3 type",
                        SKU: "AB008-338",
                        productName: "3MF(G)",
                        "life ": "3 years in air ",
                        range: "0-100000ppm ",
                        details:
                            "3 Electrode sensor - high range with SOx/NOx and H2S filter - With gold-plated PCB pin connection",
                        link:
                            "https://www.citytech.com/en-gb/PDF-Datasheets/3mf.pdf"
                    },
                    {
                        ordNum: 1,
                        gas: "carbon-monoxide",
                        manufacturer: "CITY",
                        type: "3 type",
                        SKU: "MBE60-014",
                        productName: "3MEF - 1 mV/ppm",
                        "life ": "3 years in air ",
                        range: "0-2000ppm ",
                        details:
                            "3 Electrode sensor with H2S filter and mV output board - 1 mV/ppm",
                        link:
                            "https://www.citytech.com/en-gb/PDF-Datasheets/3mef.pdf"
                    },
                    {
                        ordNum: 1,
                        gas: "carbon-monoxide",
                        manufacturer: "CITY",
                        type: "3 type",
                        SKU: "MBE60-024",
                        productName: "3MEF - 10 mV/ppm",
                        "life ": "3 years in air ",
                        range: "0-2000ppm ",
                        details:
                            "3 Electrode sensor with H2S filter and mV output board - 10 mV/ppm",
                        link:
                            "https://www.citytech.com/en-gb/PDF-Datasheets/3mef.pdf"
                    },
                    {
                        ordNum: 1,
                        gas: "carbon-monoxide",
                        manufacturer: "CITY",
                        type: "CiTiceL® ",
                        "gas Type ": "CO",
                        SKU: "MBF6G-004",
                        productName: "3MF/F ",
                        "life ": "2 years in air ",
                        range: "0-20000ppm ",
                        details:
                            "carbon-monoxide (CO) gas Sensor with mV Output",
                        link:
                            "https://www.citytech.com/en-gb/PDF-Datasheets/3mff.pdf"
                    },
                    {
                        ordNum: 1,
                        gas: "carbon-monoxide",
                        manufacturer: "CITY",
                        type: "4 type",
                        SKU: "2112B2005 ",
                        productName: "4CF+ ",
                        "life ": "2 years in air ",
                        range: "0-500ppm ",
                        details: "3 – electrode miniature sensor ",
                        link:
                            "https://www.citytech.com/en-gb/PDF-Datasheets/4cf+.pdf"
                    },
                    {
                        ordNum: 1,
                        gas: "carbon-monoxide",
                        manufacturer: "CITY",
                        type: "4CM ",
                        SKU: "2112B2055R",
                        productName: "4CM ",
                        "life ": "2 years in air ",
                        range: "0-2000ppm ",
                        details:
                            "3 electrode miniature sensor with acid gas filter ",
                        link:
                            "https://www.citytech.com/en-gb/PDF-Datasheets/4cm.pdf"
                    },
                    {
                        ordNum: 1,
                        gas: "carbon-monoxide",
                        manufacturer: "CITY",
                        type: "4 type",
                        "gas Type ": "CO/H2S ",
                        SKU: "ABC05-800",
                        productName: "4COSH ",
                        "life ": "3 years in air ",
                        range: "0-1500ppm CO",
                        details:
                            "4 Electrode minature dual sensor for CO and H2S ",
                        link:
                            "https://www.citytech.com/en-gb/PDF-Datasheets/4cosh.pdf"
                    },
                    {
                        ordNum: 1,
                        gas: "carbon-monoxide",
                        manufacturer: "CITY",
                        type: "4 type",
                        "gas Type ": "CO",
                        SKU: "2112B2060R",
                        productName: "4F - single pot",
                        "life ": "3 years in air ",
                        range: "0-10000ppm ",
                        details:
                            "3 electrode electrochemical with filter to remove acid gases - (packed in single pots) ",
                        link:
                            "https://www.citytech.com/en-gb/PDF-Datasheets/4f.pdf"
                    },
                    {
                        ordNum: 1,
                        gas: "carbon-monoxide",
                        manufacturer: "CITY",
                        type: "4 type",
                        "gas Type ": "CO",
                        SKU: "2112B2060",
                        productName: "4F ",
                        "life ": "3 years in air ",
                        range: "0-10000ppm ",
                        details:
                            "3 electrode electrochemical with filter to remove acid gases - (packed up to 100 / tray)",
                        link:
                            "https://www.citytech.com/en-gb/PDF-Datasheets/4f.pdf"
                    },
                    {
                        ordNum: 1,
                        gas: "carbon-monoxide",
                        manufacturer: "CITY",
                        type: "4 type",
                        SKU: "2112B3008",
                        productName: "4LXH ",
                        "life ": "2 years in air ",
                        range: "0-200ppm ",
                        details:
                            "3 Electrode miniature sensor - high sensitivity with low cross sensitivity to hydrogen ",
                        link:
                            "https://www.citytech.com/en-gb/PDF-Datasheets/4lxh.pdf"
                    },
                    {
                        ordNum: 1,
                        gas: "carbon-monoxide",
                        manufacturer: "CITY",
                        type: "4 Series Toxic ",
                        "gas Type ": "CO",
                        SKU: "2112B2061",
                        productName: "4MF ",
                        "life ": "3 years in air ",
                        range: "0-40000ppm ",
                        details: "carbon-monoxide Sensor",
                        link:
                            "https://www.citytech.com/en-gb/PDF-Datasheets/4mf.pdf"
                    },
                    {
                        ordNum: 1,
                        gas: "carbon-monoxide",
                        manufacturer: "CITY",
                        type: "5 type",
                        SKU: "AB526-W0A",
                        productName: "5F ",
                        "life ": "3 years in air ",
                        range: "0-20000ppm ",
                        details:
                            "3 Electrode flue gas sensor with internal acid gas filter ",
                        link:
                            "https://www.citytech.com/en-gb/PDF-Datasheets/5f.pdf"
                    },
                    {
                        ordNum: 1,
                        gas: "carbon-monoxide",
                        manufacturer: "CITY",
                        type: "5 type",
                        SKU: "n.a.",
                        productName: "5MF ",
                        "life ": "3 years in air ",
                        range: "0-100000ppm ",
                        details:
                            "3 Electrode flue gas sensor - high range with internal acid gas filter ",
                        link:
                            "https://www.citytech.com/en-gb/PDF-Datasheets/5mf.pdf"
                    },
                    {
                        ordNum: 1,
                        gas: "carbon-monoxide",
                        manufacturer: "CITY",
                        type: "7 type",
                        SKU: "AB704-400",
                        productName: "7E ",
                        "life ": "3 years in air ",
                        range: "0-2000ppm ",
                        details: "3 Electrode compact sensor ",
                        link:
                            "https://www.citytech.com/en-gb/PDF-Datasheets/7e.pdf"
                    },
                    {
                        ordNum: 1,
                        gas: "carbon-monoxide",
                        manufacturer: "CITY",
                        type: "7 type",
                        SKU: "AB704-407",
                        productName: "7E/F ",
                        "life ": "3 years in air ",
                        range: "0-2000ppm ",
                        details:
                            "3 Electrode compact sensor with H2S and SO2 filter ",
                        link:
                            "https://www.citytech.com/en-gb/PDF-Datasheets/7ef.pdf"
                    },
                    {
                        ordNum: 1,
                        gas: "carbon-monoxide",
                        manufacturer: "CITY",
                        type: "3 type",
                        SKU: "AB012-J08",
                        productName: "A2E/F ",
                        "life ": "2 years in air ",
                        range: "0-1000ppm ",
                        details: "3 Electrode sensor with H2 compensation ",
                        link:
                            "https://www.citytech.com/en-gb/PDF-Datasheets/a2ef.pdf"
                    },
                    {
                        ordNum: 1,
                        gas: "carbon-monoxide",
                        manufacturer: "CITY",
                        type: "3 type",
                        SKU: "AB045-H00",
                        productName: "A3CO ",
                        "life ": "2 years in air ",
                        range: "0-1000ppm ",
                        details: "4 Electrode environmental monitoring sensor ",
                        link:
                            "https://www.citytech.com/en-gb/PDF-Datasheets/a3co.pdf"
                    },
                    {
                        ordNum: 1,
                        gas: "carbon-monoxide",
                        manufacturer: "CITY",
                        type: "3 type",
                        SKU: "AB005-C02",
                        productName: "A3E/D ",
                        "life ": "2 years in air ",
                        range: "0-4000ppm ",
                        details:
                            "4 Electrode sensor with high capacity SOx/NOx and H2S filter and hydrogen compensation ",
                        link:
                            "https://www.citytech.com/en-gb/PDF-Datasheets/a3ed.pdf"
                    },
                    {
                        ordNum: 1,
                        gas: "carbon-monoxide",
                        manufacturer: "CITY",
                        type: "3 type",
                        SKU: "AB005-C09",
                        productName: "A3E/F ",
                        "life ": "2 years in air ",
                        range: "0-4000ppm ",
                        details:
                            "4 Electrode sensor with SOx/NOx and H2S filter and hydrogen compensation ",
                        link:
                            "https://www.citytech.com/en-gb/PDF-Datasheets/a3ef.pdf"
                    },
                    {
                        ordNum: 1,
                        gas: "carbon-monoxide",
                        manufacturer: "CITY",
                        type: "3 type",
                        SKU: "MBR90-014",
                        productName: "A3ME/D ",
                        "life ": "2 years in air ",
                        range: "0-4000ppm ",
                        details:
                            "4 Electrode sensor with high capacity SOx/NOx and H2S filter and hydrogen compensation with mV output board ",
                        link:
                            "https://www.citytech.com/en-gb/PDF-Datasheets/a3med.pdf"
                    },
                    {
                        ordNum: 1,
                        gas: "carbon-monoxide",
                        manufacturer: "CITY",
                        type: "3 type",
                        SKU: "MBU90-014",
                        productName: "A3ME/F ",
                        "life ": "2 years in air ",
                        range: "0-4000ppm ",
                        details:
                            "4 Electrode sensor with SOx/NOx and H2S filter and hydrogen compensation with mV output board ",
                        link:
                            "https://www.citytech.com/en-gb/PDF-Datasheets/a3mef.pdf"
                    },
                    {
                        ordNum: 1,
                        gas: "carbon-monoxide",
                        manufacturer: "CITY",
                        type: "5 type",
                        SKU: "AB510-W0X",
                        productName: "A5F ",
                        "life ": "3 years in air ",
                        range: "0-4000ppm ",
                        details:
                            "4 Electrode flue gas sensor with internal acid gas filter and hydrogen compensation ",
                        link:
                            "https://www.citytech.com/en-gb/PDF-Datasheets/a5f.pdf"
                    },
                    {
                        ordNum: 1,
                        gas: "carbon-monoxide",
                        manufacturer: "CITY",
                        type: "5 Series Toxic ",
                        SKU: "AB511-W0X",
                        productName: "A5F+ ",
                        "life ": "3 years in air ",
                        range: "0-20,000ppm ",
                        details:
                            "4 Electrode flue gas sensor with internal acid gas filter and hydrogen compensation ",
                        link:
                            "https://www.citytech.com/en-gb/PDF-Datasheets/a5f+.pdf"
                    },
                    {
                        ordNum: 1,
                        gas: "carbon-monoxide",
                        manufacturer: "CITY",
                        type: "7 type",
                        SKU: "AB705-400",
                        productName: "A7E ",
                        "life ": "3 years in air ",
                        range: "0-2000ppm ",
                        details:
                            "4 Electrode compact sensor with H2 compensation ",
                        link:
                            "https://www.citytech.com/en-gb/PDF-Datasheets/a7e.pdf"
                    },
                    {
                        ordNum: 1,
                        gas: "carbon-monoxide",
                        manufacturer: "CITY",
                        type: "7 type",
                        SKU: "AB705-407",
                        productName: "A7E/F ",
                        "life ": "3 years in air ",
                        range: "0-2000ppm ",
                        details:
                            "4 Electrode compact sensor with H2S and SO2 filter and H2 compensation ",
                        link:
                            "https://www.citytech.com/en-gb/PDF-Datasheets/a7ef.pdf"
                    },
                    {
                        ordNum: 1,
                        gas: "carbon-monoxide",
                        manufacturer: "CITY",
                        type: "sensoric",
                        SKU: "0248-034-30009",
                        productName: "CO 3E 300 - Mini ",
                        "life ": ">4 years ",
                        range: "0-500ppm ",
                        details: "3 Electrode sensor; Mini Format",
                        link:
                            "https://www.citytech.com/en-gb/PDF-Datasheets/co3e300.pdf"
                    },
                    {
                        ordNum: 1,
                        gas: "carbon-monoxide",
                        manufacturer: "CITY",
                        type: "sensoric",
                        SKU: "0248-034-30069",
                        productName: "CO 3E 300 - Classic",
                        "life ": ">4 years ",
                        range: "0-500ppm ",
                        details: "3 Electrode sensor; Classic Format.",
                        link:
                            "https://www.citytech.com/en-gb/PDF-Datasheets/co3e300.pdf"
                    },
                    {
                        ordNum: 1,
                        gas: "carbon-monoxide",
                        manufacturer: "CITY",
                        type: "sensoric",
                        SKU: "0248-034-30049",
                        productName: "CO 3E 300 - 4-Series",
                        "life ": ">4 years ",
                        range: "0-500ppm ",
                        details: "3 Electrode sensor; 4-Series Format. ",
                        link:
                            "https://www.citytech.com/en-gb/PDF-Datasheets/co3e300.pdf"
                    },
                    {
                        ordNum: 1,
                        gas: "carbon-monoxide",
                        manufacturer: "CITY",
                        type: "sensoric",
                        SKU: "0248-034-30079",
                        productName: "CO 3E 300 -7-Series",
                        "life ": ">4 years ",
                        range: "0-500ppm ",
                        details: "3 Electrode sensor; 7-Series Format. ",
                        link:
                            "https://www.citytech.com/en-gb/PDF-Datasheets/co3e300.pdf"
                    },
                    {
                        ordNum: 1,
                        gas: "carbon-monoxide",
                        manufacturer: "CITY",
                        type: "4 type",
                        SKU: "2112B3000",
                        productName: "ECOSURE (2E)",
                        "life ": "6 years ",
                        range: "0-500ppm ",
                        details:
                            "2 Electrode, long life sensor designed for residential, fire detection and ventilation control applications. UL certified. ",
                        link:
                            "https://www.citytech.com/en-gb/PDF-Datasheets/ecosure.pdf"
                    },
                    {
                        ordNum: 1,
                        gas: "carbon-monoxide",
                        manufacturer: "CITY",
                        type: "MICROceL™ ",
                        SKU: "ABU01-U0W ",
                        productName: "MICROceL CF ",
                        "life ": "2 Years ",
                        range: "0-1500ppm ",
                        details:
                            "MICRO 3-electrode carbon monoxide sensor with inboard filter ",
                        link:
                            "https://www.citytech.com/en-gb/PDF-Datasheets/microcelcf.pdf"
                    },
                    {
                        ordNum: 1,
                        gas: "carbon-monoxide",
                        manufacturer: "CITY",
                        type: "3 type",
                        SKU: "TB7E-1A",
                        productName: "T3E/F - 0-50 ppm",
                        "life ": "2 years in air ",
                        range: "0-50 ppm ",
                        details:
                            "3 electrode sensor with standard 4-20mA board - Range 0-50 ppm",
                        link:
                            "https://www.citytech.com/en-gb/PDF-Datasheets/t3ef.pdf"
                    },
                    {
                        ordNum: 1,
                        gas: "carbon-monoxide",
                        manufacturer: "CITY",
                        type: "3 type",
                        SKU: "TB7F-1A",
                        productName: "T3E/F - 0-100 ppm",
                        "life ": "2 years in air ",
                        range: "0-100 ppm ",
                        details:
                            "3 electrode sensor with standard 4-20mA board - Range 0-100 ppm",
                        link:
                            "https://www.citytech.com/en-gb/PDF-Datasheets/t3ef.pdf"
                    },
                    {
                        ordNum: 1,
                        gas: "carbon-monoxide",
                        manufacturer: "CITY",
                        type: "3 type",
                        SKU: "TB7G-1A ",
                        productName: "T3E/F - 0-200 ppm",
                        "life ": "2 years in air ",
                        range: "0-200 ppm ",
                        details:
                            "3 electrode sensor with standard 4-20mA board - Range 0-200 ppm",
                        link:
                            "https://www.citytech.com/en-gb/PDF-Datasheets/t3ef.pdf"
                    },
                    {
                        ordNum: 1,
                        gas: "carbon-monoxide",
                        manufacturer: "CITY",
                        type: "3 type",
                        SKU: "TB7H-1A",
                        productName: "T3E/F - 0-300 ppm",
                        "life ": "2 years in air ",
                        range: "0-300 ppm ",
                        details:
                            "3 electrode sensor with standard 4-20mA board - Range 0-300 ppm",
                        link:
                            "https://www.citytech.com/en-gb/PDF-Datasheets/t3ef.pdf"
                    },
                    {
                        ordNum: 1,
                        gas: "carbon-monoxide",
                        manufacturer: "CITY",
                        type: "3 type",
                        SKU: "TB7I-1A",
                        productName: "T3E/F - 0-500 ppm",
                        "life ": "2 years in air ",
                        range: "0-500 ppm ",
                        details:
                            "3 electrode sensor with standard 4-20mA board - Range 0-500 ppm",
                        link:
                            "https://www.citytech.com/en-gb/PDF-Datasheets/t3ef.pdf"
                    },
                    {
                        ordNum: 1,
                        gas: "carbon-monoxide",
                        manufacturer: "CITY",
                        type: "3 type",
                        SKU: "TB7J-1A",
                        productName: "T3E/F - 0-1000 ppm",
                        "life ": "2 years in air ",
                        range: "0-1000 ppm ",
                        details:
                            "3 electrode sensor with standard 4-20mA board - Range 0-1000 ppm",
                        link:
                            "https://www.citytech.com/en-gb/PDF-Datasheets/t3ef.pdf"
                    },
                    {
                        ordNum: 1,
                        gas: "carbon-monoxide",
                        manufacturer: "CITY",
                        type: "3 type",
                        SKU: "TB7K-1A",
                        productName: "T3E/F - 0-2000 ppm",
                        "life ": "2 years in air ",
                        range: "0-2000 ppm ",
                        details:
                            "3 electrode sensor with standard 4-20mA board - Range 0-2000 ppm",
                        link:
                            "https://www.citytech.com/en-gb/PDF-Datasheets/t3ef.pdf"
                    },
                    {
                        ordNum: 1,
                        gas: "carbon-monoxide",
                        manufacturer: "CITY",
                        type: "3 type",
                        SKU: "TBAI-1A",
                        productName: "T3F/F - 0-500 ppm",
                        "life ": "2 years in air ",
                        range: "0-500 ppm ",
                        details:
                            "3 electrode sensor with standard 4-20mA board - Range 0-500 ppm",
                        link:
                            "https://www.citytech.com/en-gb/PDF-Datasheets/t3ff.pdf"
                    },
                    {
                        ordNum: 1,
                        gas: "carbon-monoxide",
                        manufacturer: "CITY",
                        type: "3 type",
                        SKU: "TBAJ-1A",
                        productName: "T3F/F - 0-1000 ppm",
                        "life ": "2 years in air ",
                        range: "0-1000 ppm ",
                        details:
                            "3 electrode sensor with standard 4-20mA board - Range 0-1000 ppm",
                        link:
                            "https://www.citytech.com/en-gb/PDF-Datasheets/t3ff.pdf"
                    },
                    {
                        ordNum: 1,
                        gas: "carbon-monoxide",
                        manufacturer: "CITY",
                        type: "3 type",
                        SKU: "TBAK-1A",
                        productName: "T3F/F - 0-2000 ppm",
                        "life ": "2 years in air ",
                        range: "0-2000 ppm ",
                        details:
                            "3 electrode sensor with standard 4-20mA board - Range 0-2000 ppm",
                        link:
                            "https://www.citytech.com/en-gb/PDF-Datasheets/t3ff.pdf"
                    },
                    {
                        ordNum: 1,
                        gas: "carbon-monoxide",
                        manufacturer: "CITY",
                        type: "3 type",
                        SKU: "TBAL-1A",
                        productName: "T3F/F - 0-3000 ppm",
                        "life ": "2 years in air ",
                        range: "0-3000 ppm ",
                        details:
                            "3 electrode sensor with standard 4-20mA board - Range 0-3000 ppm",
                        link:
                            "https://www.citytech.com/en-gb/PDF-Datasheets/t3ff.pdf"
                    },
                    {
                        ordNum: 1,
                        gas: "carbon-monoxide",
                        manufacturer: "CITY",
                        type: "3 type",
                        SKU: "TBAM-1A",
                        productName: "T3F/F ",
                        "life ": "2 years in air - 0-4000 ppm",
                        range: "0-4000 ppm ",
                        details:
                            "3 electrode sensor with standard 4-20mA board - Range 0-4000 ppm",
                        link:
                            "https://www.citytech.com/en-gb/PDF-Datasheets/t3ff.pdf"
                    },
                    {
                        ordNum: 1,
                        gas: "carbon-monoxide",
                        manufacturer: "CITY",
                        type: "3 type",
                        SKU: "TBAN-1A",
                        productName: "T3F/F - 0-10000 ppm",
                        "life ": "2 years in air",
                        range: "0-10000 ppm ",
                        details:
                            "3 electrode sensor with standard 4-20mA board - Range 0-10000 ppm",
                        link:
                            "https://www.citytech.com/en-gb/PDF-Datasheets/t3ff.pdf"
                    },
                    {
                        ordNum: 1,
                        gas: "carbon-monoxide",
                        manufacturer: "CITY",
                        type: "3 type",
                        SKU: "TBAO-1A",
                        productName: "T3F/F 0-20000 ppm",
                        "life ": "2 years in air",
                        range: "0-20000 ppm",
                        details:
                            "3 electrode sensor with standard 4-20mA board - Range 0-20000 ppm",
                        link:
                            "https://www.citytech.com/en-gb/PDF-Datasheets/t3ff.pdf"
                    },
                    {
                        ordNum: 1,
                        gas: "carbon-monoxide ",
                        manufacturer: "CITY",
                        type: "1 type",
                        "gas Type ": "CO",
                        SKU: "2023B1010",
                        productName: "1CO ",
                        "life ": "5 years in air ",
                        range: "0-1000ppm ",
                        details: "3 Electrode sensor ",
                        link:
                            "https://www.citytech.com/en-gb/PDF-Datasheets/1co.pdf"
                    },
                    {
                        ordNum: 1,
                        gas: "carbon-monoxide ",
                        manufacturer: "CITY",
                        type: "Solid Electrolyte ",
                        "gas Type ": "CO",
                        SKU: "032-0001-000",
                        productName: "CO SE ",
                        "life ": "2 years in air ",
                        range: "0-1000ppm ",
                        details:
                            "3 electrode, solid electrolyte CO sensor for use with surface mount connector ",
                        link:
                            "https://www.citytech.com/en-gb/PDF-Datasheets/cose.pdf"
                    }
                ]
            },
            {
                name: "carbon-dioxide",
                chemicalId: "CO2",
                devices: [
                    {
                        ordNum: 1,
                        gas: "carbon-dioxide",
                        manufacturer: "CITY",
                        type: "IRceL® ",
                        SKU: "IRCEL-CO2R",
                        productName: "IRceLCO2 ",
                        "life ": ">5 years ",
                        range: "0-5% ",
                        details:
                            "Miniature infrared sensor with on-board EEPROM and thermistor ",
                        link:
                            "https://www.citytech.com/en-gb/PDF-Datasheets/ircelco2.pdf"
                    }
                ]
            },
            {
                name: "chlorine",
                chemicalId: "Cl2",
                devices: [
                    {
                        ordNum: 1,
                        gas: "chlorine",
                        manufacturer: "CITY",
                        type: "3 type",
                        SKU: "AH002-J00",
                        productName: "3CLH ",
                        "life ": "2 years in air ",
                        range: "0-250ppm ",
                        details:
                            "3 Electrode sensor - With side tag and PCB pin connections",
                        link:
                            "https://www.citytech.com/en-gb/PDF-Datasheets/3clh.pdf"
                    },
                    {
                        ordNum: 1,
                        gas: "chlorine",
                        manufacturer: "CITY",
                        type: "3 type",
                        SKU: "AH002-000",
                        productName: "3CLH(S)",
                        "life ": "2 years in air ",
                        range: "0-250ppm ",
                        details:
                            "3 Electrode sensor - With side tag connection",
                        link:
                            "https://www.citytech.com/en-gb/PDF-Datasheets/3clh.pdf"
                    },
                    {
                        ordNum: 1,
                        gas: "chlorine",
                        manufacturer: "CITY",
                        type: "3 type",
                        SKU: "AH002-300",
                        productName: "3CLH(G)",
                        "life ": "2 years in air ",
                        range: "0-250ppm ",
                        details:
                            "3 Electrode sensor - With gold-plated PCB pin connection",
                        link:
                            "https://www.citytech.com/en-gb/PDF-Datasheets/3clh.pdf"
                    },
                    {
                        ordNum: 1,
                        gas: "chlorine",
                        manufacturer: "CITY",
                        type: "3 type",
                        SKU: "MHH60-014",
                        productName: "3MCLH - 1 mV/ppm ",
                        "life ": "2 years in air ",
                        range: "0-100ppm ",
                        details:
                            "3 Electrode sensor with mV output board - 1 mV/ppm",
                        link:
                            "https://www.citytech.com/en-gb/PDF-Datasheets/3mclh.pdf"
                    },
                    {
                        ordNum: 1,
                        gas: "chlorine",
                        manufacturer: "CITY",
                        type: "3 type",
                        SKU: "MHH60-024",
                        productName: "3MCLH - 10 mV/ppm",
                        "life ": "2 years in air ",
                        range: "0-100ppm ",
                        details:
                            "3 Electrode sensor with mV output board - 10 mV/ppm",
                        link:
                            "https://www.citytech.com/en-gb/PDF-Datasheets/3mclh.pdf"
                    },
                    {
                        ordNum: 1,
                        gas: "chlorine",
                        manufacturer: "CITY",
                        type: "4 type",
                        SKU: "AH200-800",
                        productName: "4CL ",
                        "life ": "2 years in air ",
                        range: "0-100ppm ",
                        details: "3 Electrode minature sensor ",
                        link:
                            "https://www.citytech.com/en-gb/PDF-Datasheets/4cl.pdf"
                    },
                    {
                        ordNum: 1,
                        gas: "chlorine",
                        manufacturer: "CITY",
                        type: "7 type",
                        SKU: "AH702-400",
                        productName: "7CLH ",
                        "life ": "2 years in air ",
                        range: "0-250ppm ",
                        details: "3 Electrode compact sensor ",
                        link:
                            "https://www.citytech.com/en-gb/PDF-Datasheets/7clh.pdf"
                    },
                    {
                        ordNum: 1,
                        gas: "chlorine",
                        manufacturer: "CITY",
                        type: "sensoric",
                        SKU: "0436-032-30009",
                        productName: "Cl2 3E 10 - Mini",
                        "life ": ">2 years ",
                        range: "0-10ppm ",
                        details: "3 Electrode sensor; Mini Format",
                        link:
                            "https://www.citytech.com/en-gb/PDF-Datasheets/cl23e10.pdf"
                    },
                    {
                        ordNum: 1,
                        gas: "chlorine",
                        manufacturer: "CITY",
                        type: "sensoric",
                        SKU: "0436-032-30069",
                        productName: "Cl2 3E 10 - Classic",
                        "life ": ">2 years ",
                        range: "0-10ppm ",
                        details: "3 Electrode sensor; Classic Format.",
                        link:
                            "https://www.citytech.com/en-gb/PDF-Datasheets/cl23e10.pdf"
                    },
                    {
                        ordNum: 1,
                        gas: "chlorine",
                        manufacturer: "CITY",
                        type: "sensoric",
                        SKU: "0436-032-30049",
                        productName: "Cl2 3E 10 - 4-Series",
                        "life ": ">2 years ",
                        range: "0-10ppm ",
                        details: "3 Electrode sensor; 4-Series Format. ",
                        link:
                            "https://www.citytech.com/en-gb/PDF-Datasheets/cl23e10.pdf"
                    },
                    {
                        ordNum: 1,
                        gas: "chlorine",
                        manufacturer: "CITY",
                        type: "sensoric",
                        SKU: "0436-032-30079",
                        productName: "Cl2 3E 10 - 7-Series ",
                        "life ": ">2 years ",
                        range: "0-10ppm ",
                        details: "3 Electrode sensor; 7-Series Format. ",
                        link:
                            "https://www.citytech.com/en-gb/PDF-Datasheets/cl23e10.pdf"
                    },
                    {
                        ordNum: 1,
                        gas: "chlorine",
                        manufacturer: "CITY",
                        type: "sensoric",
                        SKU: "0441-032-30009",
                        productName: "Cl2 3E 50 - Mini",
                        "life ": ">2 years ",
                        range: "0-50ppm ",
                        details: "3 Electrode sensor; Mini Format",
                        link:
                            "https://www.citytech.com/en-gb/PDF-Datasheets/cl23e50.pdf"
                    },
                    {
                        ordNum: 1,
                        gas: "chlorine",
                        manufacturer: "CITY",
                        type: "sensoric",
                        SKU: "0441-032-30069",
                        productName: "Cl2 3E 50 - Classic",
                        "life ": ">2 years ",
                        range: "0-50ppm ",
                        details: "3 Electrode sensor; Classic Format.",
                        link:
                            "https://www.citytech.com/en-gb/PDF-Datasheets/cl23e50.pdf"
                    },
                    {
                        ordNum: 1,
                        gas: "chlorine",
                        manufacturer: "CITY",
                        type: "sensoric",
                        SKU: "0441-032-30049",
                        productName: "Cl2 3E 50 - 4-Series",
                        "life ": ">2 years ",
                        range: "0-50ppm ",
                        details: "3 Electrode sensor; 4-Series Format. ",
                        link:
                            "https://www.citytech.com/en-gb/PDF-Datasheets/cl23e50.pdf"
                    },
                    {
                        ordNum: 1,
                        gas: "chlorine",
                        manufacturer: "CITY",
                        type: "sensoric",
                        SKU: "0441-032-30079",
                        productName: "Cl2 3E 50 - 7-Series ",
                        "life ": ">2 years ",
                        range: "0-50ppm ",
                        details: "3 Electrode sensor; 7-Series Format. ",
                        link:
                            "https://www.citytech.com/en-gb/PDF-Datasheets/cl23e50.pdf"
                    },
                    {
                        ordNum: 1,
                        gas: "chlorine",
                        manufacturer: "CITY",
                        type: "3 type",
                        SKU: "TH3A-1A",
                        productName: "T3CLH - 0-5 ppm",
                        "life ": "2 years in air ",
                        range: "0-5 ppm ",
                        details:
                            "3 Electrode sensor with transmitter board. Range 0-5 ppm",
                        link:
                            "https://www.citytech.com/en-gb/PDF-Datasheets/t3clh.pdf"
                    },
                    {
                        ordNum: 1,
                        gas: "chlorine",
                        manufacturer: "CITY",
                        type: "3 type",
                        SKU: "TH3B-1A",
                        productName: "T3CLH - 0-10 ppm",
                        "life ": "2 years in air ",
                        range: "0-10 ppm ",
                        details:
                            "3 Electrode sensor with transmitter board. Range 0-10 ppm",
                        link:
                            "https://www.citytech.com/en-gb/PDF-Datasheets/t3clh.pdf"
                    },
                    {
                        ordNum: 1,
                        gas: "chlorine",
                        manufacturer: "CITY",
                        type: "3 type",
                        SKU: "TH3C-1A",
                        productName: "T3CLH - 0-20 ppm ",
                        "life ": "2 years in air ",
                        range: "0-20 ppm ",
                        details:
                            "3 Electrode sensor with transmitter board. Range 0-20 ppm",
                        link:
                            "https://www.citytech.com/en-gb/PDF-Datasheets/t3clh.pdf"
                    },
                    {
                        ordNum: 1,
                        gas: "chlorine",
                        manufacturer: "CITY",
                        type: "3 type",
                        SKU: "TH3D-1A",
                        productName: "T3CLH - 0-30 ppm",
                        "life ": "2 years in air ",
                        range: "0-30 ppm",
                        details:
                            "3 Electrode sensor with transmitter board. Range 0-30 ppm",
                        link:
                            "https://www.citytech.com/en-gb/PDF-Datasheets/t3clh.pdf"
                    },
                    {
                        ordNum: 1,
                        gas: "chlorine",
                        manufacturer: "CITY",
                        type: "3 type",
                        SKU: "TH3E-1A",
                        productName: "T3CLH - 0-50 ppm",
                        "life ": "2 years in air ",
                        range: "0-50 ppm",
                        details:
                            "3 Electrode sensor with transmitter board. Range 0-50 ppm",
                        link:
                            "https://www.citytech.com/en-gb/PDF-Datasheets/t3clh.pdf"
                    },
                    {
                        ordNum: 1,
                        gas: "chlorine",
                        manufacturer: "CITY",
                        type: "3 type",
                        SKU: "TH3F-1A",
                        productName: "T3CLH - 0-100 ppm",
                        "life ": "2 years in air ",
                        range: "0-100 ppm",
                        details:
                            "3 Electrode sensor with transmitter board. Range 0-100 ppm",
                        link:
                            "https://www.citytech.com/en-gb/PDF-Datasheets/t3clh.pdf"
                    },
                    {
                        ordNum: 1,
                        gas: "chlorine",
                        manufacturer: "CITY",
                        type: "3 type",
                        SKU: "TH3G-1A",
                        productName: "T3CLH - 0-200 ppm",
                        "life ": "2 years in air ",
                        range: "0-200 ppm",
                        details:
                            "3 Electrode sensor with transmitter board. Range 0-200 ppm",
                        link:
                            "https://www.citytech.com/en-gb/PDF-Datasheets/t3clh.pdf"
                    }
                ]
            },
            {
                name: "chlorine-dioxide",
                chemicalId: "ClO2",
                devices: [
                    {
                        ordNum: 1,
                        gas: "chlorine-dioxide",
                        manufacturer: "CITY",
                        type: "sensoric",
                        SKU: "2731-331-30009",
                        productName: "ClO2 3E 1 O - Mini",
                        "life ": ">2 years ",
                        range: "0-1ppm ",
                        details:
                            "3 Electrode sensor with organic electrolyte; Mini Format",
                        link:
                            "https://www.citytech.com/en-gb/PDF-Datasheets/clo23e1o.pdf"
                    },
                    {
                        ordNum: 1,
                        gas: "chlorine-dioxide",
                        manufacturer: "CITY",
                        type: "sensoric",
                        SKU: "2731-331-30069",
                        productName: "ClO2 3E 1 O - Classic",
                        "life ": ">2 years ",
                        range: "0-1ppm ",
                        details:
                            "3 Electrode sensor with organic electrolyte; Classic Format.",
                        link:
                            "https://www.citytech.com/en-gb/PDF-Datasheets/clo23e1o.pdf"
                    },
                    {
                        ordNum: 1,
                        gas: "chlorine-dioxide",
                        manufacturer: "CITY",
                        type: "sensoric",
                        SKU: "2731-331-30049",
                        productName: "ClO2 3E 1 O - 4-Series",
                        "life ": ">2 years ",
                        range: "0-1ppm ",
                        details:
                            "3 Electrode sensor with organic electrolyte; 4-Series Format. ",
                        link:
                            "https://www.citytech.com/en-gb/PDF-Datasheets/clo23e1o.pdf"
                    },
                    {
                        ordNum: 1,
                        gas: "chlorine-dioxide",
                        manufacturer: "CITY",
                        type: "sensoric",
                        SKU: "2731-331-30079",
                        productName: "ClO2 3E 1 O - 7-Series",
                        "life ": ">2 years ",
                        range: "0-1ppm ",
                        details:
                            "3 Electrode sensor with organic electrolyte; 7-Series Format. ",
                        link:
                            "https://www.citytech.com/en-gb/PDF-Datasheets/clo23e1o.pdf"
                    }
                ]
            },
            {
                name: "combustible-gases",
                devices: [
                    {
                        ordNum: 1,
                        gas: "combustible-gases",
                        manufacturer: "CITY",
                        type: "1 type",
                        SKU: "PM979-600",
                        productName: "1LEL75 ",
                        "life ": "5 years ",
                        range: "0-100% LEL ",
                        details:
                            "Miniature CiTipeL, resistant to H2S & silicone poisoning – ATEX, UL & CSA certified ",
                        link:
                            "https://www.citytech.com/en-gb/PDF-Datasheets/1lel75.pdf"
                    },
                    {
                        ordNum: 1,
                        gas: "combustible-gases",
                        manufacturer: "CITY",
                        type: "1 type",
                        SKU: "PM989-600",
                        productName: "1LEL75C ",
                        "life ": "5 years ",
                        range: "0-100% LEL ",
                        details:
                            "Miniature CiTipeL, H2S and enhanced silicone poison resistance – ATEX, UL & CSA certified ",
                        link:
                            "https://www.citytech.com/en-gb/PDF-Datasheets/1lel75c.pdf"
                    },
                    {
                        ordNum: 1,
                        gas: "combustible-gases",
                        manufacturer: "CITY",
                        type: "1 type",
                        SKU: "PM999-600",
                        productName: "1LEL75M ",
                        "life ": "5 years ",
                        range: "0-100% LEL ",
                        details:
                            "Miniature CiTipeL for use in mining applications. Suitable for detection of hydrogen and methane - ATEX, UL & CSA certified ",
                        link:
                            "https://www.citytech.com/en-gb/PDF-Datasheets/1lel75m.pdf"
                    }
                ]
            },
            {
                name: "diborane",
                chemicalId: "B2H6",
                devices: [
                    {
                        ordNum: 1,
                        gas: "diborane",
                        manufacturer: "CITY",
                        type: "sensoric",
                        "gas Type ": "B2H6 ",
                        SKU: "0831-337-30009",
                        productName: "B2H6 3E 1 LT - Mini",
                        "life ": "2 years ",
                        range: "0-1ppm ",
                        details:
                            "3 Electrode sensor with ionic liquid electrolyte; Mini Format.  ",
                        link:
                            "https://www.citytech.com/en-gb/PDF-Datasheets/b2h63e1lt.pdf"
                    },
                    {
                        ordNum: 1,
                        gas: "diborane",
                        manufacturer: "CITY",
                        type: "sensoric",
                        "gas Type ": "B2H6 ",
                        SKU: "0831-337-30069",
                        productName: "B2H6 3E 1 LT - Classic",
                        "life ": "2 years ",
                        range: "0-1ppm ",
                        details:
                            "3 Electrode sensor with ionic liquid electrolyte; Classic Format.  ",
                        link:
                            "https://www.citytech.com/en-gb/PDF-Datasheets/b2h63e1lt.pdf"
                    },
                    {
                        ordNum: 1,
                        gas: "diborane",
                        manufacturer: "CITY",
                        type: "sensoric",
                        "gas Type ": "B2H6 ",
                        SKU: "0831-337-30049",
                        productName: "B2H6 3E 1 LT - 4-Series",
                        "life ": "2 years ",
                        range: "0-1ppm ",
                        details:
                            "3 Electrode sensor with ionic liquid electrolyte; 4-Series Format.  ",
                        link:
                            "https://www.citytech.com/en-gb/PDF-Datasheets/b2h63e1lt.pdf"
                    },
                    {
                        ordNum: 1,
                        gas: "diborane",
                        manufacturer: "CITY",
                        type: "sensoric",
                        "gas Type ": "B2H6 ",
                        SKU: "0831-337-30079",
                        productName: "B2H6 3E 1 LT - 7-Series",
                        "life ": "2 years ",
                        range: "0-1ppm ",
                        details:
                            "3 Electrode sensor with ionic liquid electrolyte; 7-Series Format.  ",
                        link:
                            "https://www.citytech.com/en-gb/PDF-Datasheets/b2h63e1lt.pdf"
                    },
                    {
                        ordNum: 1,
                        gas: "diborane",
                        manufacturer: "CITY",
                        type: "sensoric",
                        "gas Type ": "B2H6 ",
                        SKU: "0831-337-30259",
                        productName: "B2H6 3E 1 LT - Smart",
                        "life ": "2 years ",
                        range: "0-1ppm ",
                        details:
                            "3 Electrode sensor with ionic liquid electrolyte; Smart Format.  ",
                        link:
                            "https://www.citytech.com/en-gb/PDF-Datasheets/b2h63e1lt.pdf"
                    },
                    {
                        ordNum: 1,
                        gas: "diborane",
                        manufacturer: "CITY",
                        type: "sensoric",
                        "gas Type ": "B2H6 ",
                        SKU: "0831-337-30659",
                        productName: "B2H6 3E 1 LT - Transmitter",
                        "life ": "2 years ",
                        range: "0-1ppm ",
                        details:
                            "3 Electrode sensor with ionic liquid electrolyte; Transmitter Format.  ",
                        link:
                            "https://www.citytech.com/en-gb/PDF-Datasheets/b2h63e1lt.pdf"
                    }
                ]
            },
            {
                name: "ethylene-oxide",
                chemicalId: "C2H4O",
                devices: [
                    {
                        ordNum: 1,
                        gas: "ethylene-oxide",
                        manufacturer: "CITY",
                        type: "3 type",
                        "gas Type ": "C2H4O ",
                        SKU: "AT004-J00",
                        productName: "3ETO ",
                        "life ": "2 years in air ",
                        range: "0-100ppm ",
                        details: "3 Electrode sensor ",
                        link:
                            "https://www.citytech.com/en-gb/PDF-Datasheets/3eto.pdf"
                    },
                    {
                        ordNum: 1,
                        gas: "ethylene-oxide",
                        manufacturer: "CITY",
                        type: "4 type",
                        "gas Type ": "C2H4O ",
                        SKU: "AT204-800",
                        productName: "4ETO ",
                        "life ": "2 years in air ",
                        range: "0-100ppm ",
                        details: "3 Electrode minature sensor ",
                        link:
                            "https://www.citytech.com/en-gb/PDF-Datasheets/4eto.pdf"
                    },
                    {
                        ordNum: 1,
                        gas: "ethylene-oxide",
                        manufacturer: "CITY",
                        type: "7 type",
                        "gas Type ": "C2H4O ",
                        SKU: "AT704-400",
                        productName: "7ETO - without bais",
                        "life ": "2 years in air ",
                        range: "0-100ppm ",
                        details:
                            "3 Electrode compact sensor (without bais board)",
                        link:
                            "https://www.citytech.com/en-gb/PDF-Datasheets/7eto.pdf"
                    },
                    {
                        ordNum: 1,
                        gas: "ethylene-oxide",
                        manufacturer: "CITY",
                        type: "7 type",
                        "gas Type ": "C2H4O ",
                        SKU: "AT707-400",
                        productName: "7ETO - with bias",
                        "life ": "2 years in air ",
                        range: "0-100ppm ",
                        details: "4 Electrode compact sensor (with bias board)",
                        link:
                            "https://www.citytech.com/en-gb/PDF-Datasheets/7eto.pdf"
                    }
                ]
            },
            {
                name: "fluorine",
                chemicalId: "F",
                devices: [
                    {
                        ordNum: 1,
                        gas: "fluorine",
                        manufacturer: "CITY",
                        type: "sensoric",
                        "gas Type ": "F2 ",
                        SKU: "1431-031-30009",
                        productName: "F2 3E 1 - Mini",
                        "life ": ">18 months ",
                        range: "0-1ppm ",
                        details:
                            "3 Electrode sensor with organic electrolyte; Mini Format",
                        link:
                            "https://www.citytech.com/en-gb/PDF-Datasheets/f23e1.pdf"
                    },
                    {
                        ordNum: 1,
                        gas: "fluorine",
                        manufacturer: "CITY",
                        type: "sensoric",
                        "gas Type ": "F2 ",
                        SKU: "1431-031-30069",
                        productName: "F2 3E 1 - Classic",
                        "life ": ">18 months ",
                        range: "0-1ppm ",
                        details:
                            "3 Electrode sensor with organic electrolyte; Classic Format.",
                        link:
                            "https://www.citytech.com/en-gb/PDF-Datasheets/f23e1.pdf"
                    },
                    {
                        ordNum: 1,
                        gas: "fluorine",
                        manufacturer: "CITY",
                        type: "sensoric",
                        "gas Type ": "F2 ",
                        SKU: "1431-031-30049",
                        productName: "F2 3E 1 - 4-Series",
                        "life ": ">18 months ",
                        range: "0-1ppm ",
                        details:
                            "3 Electrode sensor with organic electrolyte; 4-Series Format. ",
                        link:
                            "https://www.citytech.com/en-gb/PDF-Datasheets/f23e1.pdf"
                    },
                    {
                        ordNum: 1,
                        gas: "fluorine",
                        manufacturer: "CITY",
                        type: "sensoric",
                        "gas Type ": "F2 ",
                        SKU: "1431-031-30079",
                        productName: "F2 3E 1 - 7-Series",
                        "life ": ">18 months ",
                        range: "0-1ppm ",
                        details:
                            "3 Electrode sensor with organic electrolyte; 7-Series Format. ",
                        link:
                            "https://www.citytech.com/en-gb/PDF-Datasheets/f23e1.pdf"
                    }
                ]
            },
            {
                name: "hydrogen",
                chemicalId: "H",
                devices: [
                    {
                        ordNum: 1,
                        gas: "hydrogen",
                        manufacturer: "CITY",
                        type: "3 type",
                        "gas Type ": "H2 ",
                        SKU: "AE006-J30",
                        productName: "3HYE ",
                        "life ": "2 years in air ",
                        range: "0-20000ppm ",
                        details:
                            "3 Electrode sensor - With side tag and PCB pin connections",
                        link:
                            "https://www.citytech.com/en-gb/PDF-Datasheets/3hye.pdf"
                    },
                    {
                        ordNum: 1,
                        gas: "hydrogen",
                        manufacturer: "CITY",
                        type: "3 type",
                        "gas Type ": "H2 ",
                        SKU: "AE006-030",
                        productName: "3HYE(S)",
                        "life ": "2 years in air ",
                        range: "0-20000ppm ",
                        details:
                            "3 Electrode sensor - With side tag connection",
                        link:
                            "https://www.citytech.com/en-gb/PDF-Datasheets/3hye.pdf"
                    },
                    {
                        ordNum: 1,
                        gas: "hydrogen",
                        manufacturer: "CITY",
                        type: "3 type",
                        "gas Type ": "H2 ",
                        SKU: "AE006-330",
                        productName: "3HYE(G)",
                        "life ": "2 years in air ",
                        range: "0-20000ppm ",
                        details:
                            "3 Electrode sensor - With gold-plated PCB pin connection",
                        link:
                            "https://www.citytech.com/en-gb/PDF-Datasheets/3hye.pdf"
                    },
                    {
                        ordNum: 1,
                        gas: "hydrogen",
                        manufacturer: "CITY",
                        type: "3 type",
                        "gas Type ": "H2 ",
                        SKU: "AE004-J33",
                        productName: "3HYT ",
                        "life ": "2 years in air ",
                        range: "0-2000ppm ",
                        details:
                            "3 Electrode sensor - With side tag and PCB pin connections",
                        link:
                            "https://www.citytech.com/en-gb/PDF-Datasheets/3hyt.pdf"
                    },
                    {
                        ordNum: 1,
                        gas: "hydrogen",
                        manufacturer: "CITY",
                        type: "3 type",
                        "gas Type ": "H2 ",
                        SKU: "AE004-033",
                        productName: "3HYT(S)",
                        "life ": "2 years in air ",
                        range: "0-2000ppm ",
                        details:
                            "3 Electrode sensor - With side tag connection",
                        link:
                            "https://www.citytech.com/en-gb/PDF-Datasheets/3hyt.pdf"
                    },
                    {
                        ordNum: 1,
                        gas: "hydrogen",
                        manufacturer: "CITY",
                        type: "3 type",
                        "gas Type ": "H2 ",
                        SKU: "AE004-333",
                        productName: "3HYT(G)",
                        "life ": "2 years in air ",
                        range: "0-2000ppm ",
                        details:
                            "3 Electrode sensor - With gold-plated PCB pin connection",
                        link:
                            "https://www.citytech.com/en-gb/PDF-Datasheets/3hyt.pdf"
                    },
                    {
                        ordNum: 1,
                        gas: "hydrogen",
                        manufacturer: "CITY",
                        type: "CiTiceL® ",
                        "gas Type ": "H2 ",
                        SKU: "MEE60-004",
                        productName: "3MHYE ",
                        "life ": "2 years in air ",
                        range: "0-20000ppm ",
                        link:
                            "https://www.citytech.com/en-gb/PDF-Datasheets/3mhye.pdf"
                    },
                    {
                        ordNum: 1,
                        gas: "hydrogen",
                        manufacturer: "CITY",
                        type: "3 type",
                        "gas Type ": "H2 ",
                        SKU: "MET60-014",
                        productName: "3MHYT ",
                        "life ": "2 years in air ",
                        range: "0-2000ppm ",
                        details: "3 Electrode sensor with mV output board ",
                        link:
                            "https://www.citytech.com/en-gb/PDF-Datasheets/3mhyt.pdf"
                    },
                    {
                        ordNum: 1,
                        gas: "hydrogen",
                        manufacturer: "CITY",
                        type: "4 type",
                        "gas Type ": "H2 ",
                        SKU: "AE204-803",
                        productName: "4HYT ",
                        "life ": "2 years in air ",
                        range: "0-2000ppm ",
                        details: "3 Electrode minature sensor ",
                        link:
                            "https://www.citytech.com/en-gb/PDF-Datasheets/4hyt.pdf"
                    },
                    {
                        ordNum: 1,
                        gas: "hydrogen",
                        manufacturer: "CITY",
                        type: "7 type",
                        "gas Type ": "H2 ",
                        SKU: "AE707-400",
                        productName: "7HYE ",
                        "life ": "2 years in air ",
                        range: "0-20000ppm ",
                        details: "3 Electrode compact sensor ",
                        link:
                            "https://www.citytech.com/en-gb/PDF-Datasheets/7hye.pdf"
                    },
                    {
                        ordNum: 1,
                        gas: "hydrogen",
                        manufacturer: "CITY",
                        type: "7 type",
                        "gas Type ": "H2 ",
                        SKU: "AE702-404 ",
                        productName: "7HYT ",
                        "life ": "2 years in air ",
                        range: "0-2000ppm ",
                        details: "3 Electrode compact sensor ",
                        link:
                            "https://www.citytech.com/en-gb/PDF-Datasheets/7hyt.pdf"
                    },
                    {
                        ordNum: 1,
                        gas: "hydrogen",
                        manufacturer: "CITY",
                        type: "sensoric",
                        "gas Type ": "H2 ",
                        SKU: "0361-034-30009",
                        productName: "H2 3E 1% ",
                        "life ": "2 years in air ",
                        range: "0-1% ",
                        details:
                            "3 Electrode sensor; available in Mini Format. ",
                        link:
                            "https://www.citytech.com/en-gb/PDF-Datasheets/h23e1.pdf"
                    },
                    {
                        ordNum: 1,
                        gas: "hydrogen",
                        manufacturer: "CITY",
                        type: "sensoric",
                        "gas Type ": "H2 ",
                        SKU: "0361-034-30069",
                        productName: "H2 3E 1% ",
                        "life ": "2 years in air ",
                        range: "0-1% ",
                        details:
                            "3 Electrode sensor; available in Classic Format. ",
                        link:
                            "https://www.citytech.com/en-gb/PDF-Datasheets/h23e1.pdf"
                    },
                    {
                        ordNum: 1,
                        gas: "hydrogen",
                        manufacturer: "CITY",
                        type: "sensoric",
                        "gas Type ": "H2 ",
                        SKU: "0361-034-30049",
                        productName: "H2 3E 1% ",
                        "life ": "2 years in air ",
                        range: "0-1% ",
                        details:
                            "3 Electrode sensor; available in 4-Series Format. ",
                        link:
                            "https://www.citytech.com/en-gb/PDF-Datasheets/h23e1.pdf"
                    },
                    {
                        ordNum: 1,
                        gas: "hydrogen",
                        manufacturer: "CITY",
                        type: "sensoric",
                        "gas Type ": "H2 ",
                        SKU: "0361-034-30079",
                        productName: "H2 3E 1% ",
                        "life ": "2 years in air ",
                        range: "0-1% ",
                        details:
                            "3 Electrode sensor; available in 7-Series Format. ",
                        link:
                            "https://www.citytech.com/en-gb/PDF-Datasheets/h23e1.pdf"
                    },
                    {
                        ordNum: 1,
                        gas: "hydrogen",
                        manufacturer: "CITY",
                        type: "sensoric",
                        "gas Type ": "H2 ",
                        SKU: "0364-034-30009",
                        productName: "H2 3E 4% ",
                        "life ": "2 years in air ",
                        range: "0-4% ",
                        details:
                            "3 Electrode sensor; available in Mini Format. ",
                        link:
                            "https://www.citytech.com/en-gb/PDF-Datasheets/h23e4.pdf"
                    },
                    {
                        ordNum: 1,
                        gas: "hydrogen",
                        manufacturer: "CITY",
                        type: "sensoric",
                        "gas Type ": "H2 ",
                        SKU: "0364-034-30069",
                        productName: "H2 3E 4% ",
                        "life ": "2 years in air ",
                        range: "0-4% ",
                        details:
                            "3 Electrode sensor; available in Classic Format. ",
                        link:
                            "https://www.citytech.com/en-gb/PDF-Datasheets/h23e4.pdf"
                    },
                    {
                        ordNum: 1,
                        gas: "hydrogen",
                        manufacturer: "CITY",
                        type: "sensoric",
                        "gas Type ": "H2 ",
                        SKU: "0364-034-30049",
                        productName: "H2 3E 4% ",
                        "life ": "2 years in air ",
                        range: "0-4% ",
                        details:
                            "3 Electrode sensor; available in 4-Series Format. ",
                        link:
                            "https://www.citytech.com/en-gb/PDF-Datasheets/h23e4.pdf"
                    },
                    {
                        ordNum: 1,
                        gas: "hydrogen",
                        manufacturer: "CITY",
                        type: "sensoric",
                        "gas Type ": "H2 ",
                        SKU: "0364-034-30079",
                        productName: "H2 3E 4% ",
                        "life ": "2 years in air ",
                        range: "0-4% ",
                        details:
                            "3 Electrode sensor; available in 7-Series Format. ",
                        link:
                            "https://www.citytech.com/en-gb/PDF-Datasheets/h23e4.pdf"
                    },
                    {
                        ordNum: 1,
                        gas: "hydrogen",
                        manufacturer: "CITY",
                        type: "3 type",
                        "gas Type ": "H2 ",
                        SKU: "TE2O-1A",
                        productName: "T3HYE ",
                        "life ": "2 years in air ",
                        range: "0-5% ",
                        details:
                            "3 electrode sensor with standard 4-20mA board - 0-20,000 ppm",
                        link:
                            "https://www.citytech.com/en-gb/PDF-Datasheets/t3hye.pdf"
                    },
                    {
                        ordNum: 1,
                        gas: "hydrogen",
                        manufacturer: "CITY",
                        type: "3 type",
                        "gas Type ": "H2 ",
                        SKU: "TE2Q-1A",
                        productName: "T3HYE ",
                        "life ": "2 years in air ",
                        range: "0-5% ",
                        details:
                            "3 electrode sensor with standard 4-20mA board - 0-50,000 ppm",
                        link:
                            "https://www.citytech.com/en-gb/PDF-Datasheets/t3hye.pdf"
                    },
                    {
                        ordNum: 1,
                        gas: "hydrogen",
                        manufacturer: "CITY",
                        type: "3 type",
                        "gas Type ": "H2 ",
                        SKU: "TE1G-1A",
                        productName: "T3HYT ",
                        "life ": "2 years in air ",
                        range: "0-200 ppm ",
                        details:
                            "3 electrode sensor with standard 4-20mA board - 0-200 ppm",
                        link:
                            "https://www.citytech.com/en-gb/PDF-Datasheets/t3hyt.pdf"
                    },
                    {
                        ordNum: 1,
                        gas: "hydrogen",
                        manufacturer: "CITY",
                        type: "3 type",
                        "gas Type ": "H2 ",
                        SKU: "TE1H-1A",
                        productName: "T3HYT ",
                        "life ": "2 years in air ",
                        range: "0-300 ppm ",
                        details:
                            "3 electrode sensor with standard 4-20mA board - 0-300 ppm",
                        link:
                            "https://www.citytech.com/en-gb/PDF-Datasheets/t3hyt.pdf"
                    },
                    {
                        ordNum: 1,
                        gas: "hydrogen",
                        manufacturer: "CITY",
                        type: "3 type",
                        "gas Type ": "H2 ",
                        SKU: "TE1I-1A",
                        productName: "T3HYT ",
                        "life ": "2 years in air ",
                        range: "0-500 ppm ",
                        details:
                            "3 electrode sensor with standard 4-20mA board - 0-500 ppm",
                        link:
                            "https://www.citytech.com/en-gb/PDF-Datasheets/t3hyt.pdf"
                    },
                    {
                        ordNum: 1,
                        gas: "hydrogen",
                        manufacturer: "CITY",
                        type: "3 type",
                        "gas Type ": "H2 ",
                        SKU: "TE1J-1A",
                        productName: "T3HYT ",
                        "life ": "2 years in air ",
                        range: "0-1000 ppm ",
                        details:
                            "3 electrode sensor with standard 4-20mA board - 0-1000 ppm",
                        link:
                            "https://www.citytech.com/en-gb/PDF-Datasheets/t3hyt.pdf"
                    },
                    {
                        ordNum: 1,
                        gas: "hydrogen",
                        manufacturer: "CITY",
                        type: "3 type",
                        "gas Type ": "H2 ",
                        SKU: "TE1K-1A",
                        productName: "T3HYT ",
                        "life ": "2 years in air ",
                        range: "0-2000 ppm ",
                        details:
                            "3 electrode sensor with standard 4-20mA board - 0-2000 ppm",
                        link:
                            "https://www.citytech.com/en-gb/PDF-Datasheets/t3hyt.pdf"
                    }
                ]
            },
            {
                name: "hydrogen-chloride",
                chemicalId: "HCL",
                devices: [
                    {
                        ordNum: 1,
                        gas: "hydrogen-chloride",
                        manufacturer: "CITY",
                        type: "3 type",
                        "gas Type ": "HCl ",
                        SKU: "AL004-J00",
                        productName: "3HL ",
                        "life ": "2 years in air ",
                        range: "0-100ppm ",
                        details:
                            "3 Electrode sensor - With side tag and PCB pin connections",
                        link:
                            "https://www.citytech.com/en-gb/PDF-Datasheets/3hl.pdf"
                    },
                    {
                        ordNum: 1,
                        gas: "hydrogen-chloride",
                        manufacturer: "CITY",
                        type: "3 type",
                        "gas Type ": "HCl ",
                        SKU: "AL004-000",
                        productName: "3HL(S)",
                        "life ": "2 years in air ",
                        range: "0-100ppm ",
                        details:
                            "3 Electrode sensor - With side tag connection",
                        link:
                            "https://www.citytech.com/en-gb/PDF-Datasheets/3hl.pdf"
                    },
                    {
                        ordNum: 1,
                        gas: "hydrogen-chloride",
                        manufacturer: "CITY",
                        type: "3 type",
                        "gas Type ": "HCl ",
                        SKU: "AL004-J00",
                        productName: "3HL(G)",
                        "life ": "2 years in air ",
                        range: "0-100ppm ",
                        details:
                            "3 Electrode sensor - With gold-plated PCB pin connection",
                        link:
                            "https://www.citytech.com/en-gb/PDF-Datasheets/3hl.pdf"
                    },
                    {
                        ordNum: 1,
                        gas: "hydrogen-chloride",
                        manufacturer: "CITY",
                        type: "3 type",
                        "gas Type ": "HCl ",
                        SKU: "MLT60-014",
                        productName: "3MHL ",
                        "life ": "2 years in air ",
                        range: "0-100ppm ",
                        details:
                            "3 Electrode sensor with mV output board - 1 mV/ppm",
                        link:
                            "https://www.citytech.com/en-gb/PDF-Datasheets/3mhl.pdf"
                    },
                    {
                        ordNum: 1,
                        gas: "hydrogen-chloride",
                        manufacturer: "CITY",
                        type: "3 type",
                        "gas Type ": "HCl ",
                        SKU: "MLT60-024",
                        productName: "3MHL ",
                        "life ": "2 years in air ",
                        range: "0-100ppm ",
                        details:
                            "3 Electrode sensor with mV output board - 10 mV/ppm",
                        link:
                            "https://www.citytech.com/en-gb/PDF-Datasheets/3mhl.pdf"
                    },
                    {
                        ordNum: 1,
                        gas: "hydrogen-chloride",
                        manufacturer: "CITY",
                        type: "7 type",
                        "gas Type ": "HCl ",
                        SKU: "AL704-400 ",
                        productName: "7HL ",
                        "life ": "1 years in air ",
                        range: "0-100ppm ",
                        details: "3 Electrode sensor",
                        link:
                            "https://www.citytech.com/en-gb/PDF-Datasheets/7hl.pdf"
                    },
                    {
                        ordNum: 1,
                        gas: "hydrogen-chloride",
                        manufacturer: "CITY",
                        type: "sensoric",
                        "gas Type ": "HCl ",
                        SKU: "1139-034-30009",
                        productName: "HCl/HBr 3E 30 ",
                        "life ": ">2 years ",
                        range: "0-30ppm ",
                        details:
                            "3 Electrode sensor; available in Mini Format. ",
                        link:
                            "https://www.citytech.com/en-gb/PDF-Datasheets/hclhbr3e30.pdf"
                    },
                    {
                        ordNum: 1,
                        gas: "hydrogen-chloride",
                        manufacturer: "CITY",
                        type: "sensoric",
                        "gas Type ": "HCl ",
                        SKU: "1139-034-30069",
                        productName: "HCl/HBr 3E 30 ",
                        "life ": ">2 years ",
                        range: "0-30ppm ",
                        details:
                            "3 Electrode sensor; available in Classic Format. ",
                        link:
                            "https://www.citytech.com/en-gb/PDF-Datasheets/hclhbr3e30.pdf"
                    },
                    {
                        ordNum: 1,
                        gas: "hydrogen-chloride",
                        manufacturer: "CITY",
                        type: "sensoric",
                        "gas Type ": "HCl ",
                        SKU: "1139-034-30049",
                        productName: "HCl/HBr 3E 30 ",
                        "life ": ">2 years ",
                        range: "0-30ppm ",
                        details:
                            "3 Electrode sensor; available in 4-Series Format. ",
                        link:
                            "https://www.citytech.com/en-gb/PDF-Datasheets/hclhbr3e30.pdf"
                    },
                    {
                        ordNum: 1,
                        gas: "hydrogen-chloride",
                        manufacturer: "CITY",
                        type: "sensoric",
                        "gas Type ": "HCl ",
                        SKU: "1139-034-30079",
                        productName: "HCl/HBr 3E 30 ",
                        "life ": ">2 years ",
                        range: "0-30ppm ",
                        details:
                            "3 Electrode sensor; available in 7-Series Format. ",
                        link:
                            "https://www.citytech.com/en-gb/PDF-Datasheets/hclhbr3e30.pdf"
                    },
                    {
                        ordNum: 1,
                        gas: "hydrogen-chloride",
                        manufacturer: "CITY",
                        type: "3 type",
                        "gas Type ": "HCI ",
                        SKU: "TL1B-1A",
                        productName: "T3HL ",
                        "life ": "2 years in air ",
                        range: "0-10 ppm ",
                        details:
                            "3 electrode sensor with standard 4-20mA board - 0-10 ppm ",
                        link:
                            "https://www.citytech.com/en-gb/PDF-Datasheets/t3hl.pdf"
                    },
                    {
                        ordNum: 1,
                        gas: "hydrogen-chloride",
                        manufacturer: "CITY",
                        type: "3 type",
                        "gas Type ": "HCI ",
                        SKU: "TL1C-1A",
                        productName: "T3HL ",
                        "life ": "2 years in air ",
                        range: "0-20 ppm ",
                        details:
                            "3 electrode sensor with standard 4-20mA board - 0-20 ppm ",
                        link:
                            "https://www.citytech.com/en-gb/PDF-Datasheets/t3hl.pdf"
                    },
                    {
                        ordNum: 1,
                        gas: "hydrogen-chloride",
                        manufacturer: "CITY",
                        type: "3 type",
                        "gas Type ": "HCI ",
                        SKU: "TL1E-1A",
                        productName: "T3HL ",
                        "life ": "2 years in air ",
                        range: "0-50 ppm ",
                        details:
                            "3 electrode sensor with standard 4-20mA board - 0-50 ppm ",
                        link:
                            "https://www.citytech.com/en-gb/PDF-Datasheets/t3hl.pdf"
                    },
                    {
                        ordNum: 1,
                        gas: "hydrogen-chloride",
                        manufacturer: "CITY",
                        type: "3 type",
                        "gas Type ": "HCI ",
                        SKU: "TL1F-1A",
                        productName: "T3HL ",
                        "life ": "2 years in air ",
                        range: "0-100 ppm ",
                        details:
                            "3 electrode sensor with standard 4-20mA board - 0-100 ppm ",
                        link:
                            "https://www.citytech.com/en-gb/PDF-Datasheets/t3hl.pdf"
                    },
                    {
                        ordNum: 1,
                        gas: "hydrogen-chloride",
                        manufacturer: "CITY",
                        type: "3 type",
                        "gas Type ": "HCI ",
                        SKU: "TL1G-1A",
                        productName: "T3HL ",
                        "life ": "2 years in air ",
                        range: "0-200 ppm ",
                        details:
                            "3 electrode sensor with standard 4-20mA board - 0-200 ppm ",
                        link:
                            "https://www.citytech.com/en-gb/PDF-Datasheets/t3hl.pdf"
                    }
                ]
            },
            {
                name: "hydrogen-cyanide",
                chemicalId: "HCN",
                devices: [
                    {
                        ordNum: 1,
                        gas: "hydrogen-cyanide",
                        manufacturer: "CITY",
                        type: "3 type",
                        "gas Type ": "HCN ",
                        SKU: "AJ002-J00",
                        productName: "3HCN ",
                        "life ": "2 years in air ",
                        range: "0-200ppm ",
                        details:
                            "3 Electrode sensor - With side tag and PCB pin connections",
                        link:
                            "https://www.citytech.com/en-gb/PDF-Datasheets/3hcn.pdf"
                    },
                    {
                        ordNum: 1,
                        gas: "hydrogen-cyanide",
                        manufacturer: "CITY",
                        type: "3 type",
                        "gas Type ": "HCN ",
                        SKU: "AJ002-000",
                        productName: "3HCN(S)",
                        "life ": "2 years in air ",
                        range: "0-200ppm ",
                        details:
                            "3 Electrode sensor - With side tag connection",
                        link:
                            "https://www.citytech.com/en-gb/PDF-Datasheets/3hcn.pdf"
                    },
                    {
                        ordNum: 1,
                        gas: "hydrogen-cyanide",
                        manufacturer: "CITY",
                        type: "3 type",
                        "gas Type ": "HCN ",
                        SKU: "AJ002-300",
                        productName: "3HCN(G)",
                        "life ": "2 years in air ",
                        range: "0-200ppm ",
                        details:
                            "3 Electrode sensor - With gold-plated PCB pin connection",
                        link:
                            "https://www.citytech.com/en-gb/PDF-Datasheets/3hcn.pdf"
                    },
                    {
                        ordNum: 1,
                        gas: "hydrogen-cyanide",
                        manufacturer: "CITY",
                        type: "4 type",
                        "gas Type ": "HCN ",
                        SKU: " AJ200-800",
                        productName: "4HN ",
                        "life ": "2 years in air ",
                        range: "0-50ppm ",
                        details: "3 Electrode minature sensor ",
                        link:
                            "https://www.citytech.com/en-gb/PDF-Datasheets/4hn.pdf"
                    },
                    {
                        ordNum: 1,
                        gas: "hydrogen-cyanide",
                        manufacturer: "CITY",
                        type: "7 type",
                        "gas Type ": "HCN ",
                        SKU: " AJ702-400 ",
                        productName: "7HCN ",
                        "life ": "1 years in air ",
                        range: "0-100ppm ",
                        details: "3 Electrode compact sensor ",
                        link:
                            "https://www.citytech.com/en-gb/PDF-Datasheets/7hcn.pdf"
                    },
                    {
                        ordNum: 1,
                        gas: "hydrogen-cyanide",
                        manufacturer: "CITY",
                        type: "sensoric",
                        "gas Type ": "HCN ",
                        SKU: "1639-221-30009",
                        productName: "HCN 2E 30 F ",
                        "life ": ">18 months ",
                        range: "0-30ppm ",
                        details:
                            "2 Electrode sensor with organic electrolyte; available in Mini,Format. ",
                        link:
                            "https://www.citytech.com/en-gb/PDF-Datasheets/hcn2e30f.pdf"
                    },
                    {
                        ordNum: 1,
                        gas: "hydrogen-cyanide",
                        manufacturer: "CITY",
                        type: "sensoric",
                        "gas Type ": "HCN ",
                        SKU: "1639-221-30069",
                        productName: "HCN 2E 30 F ",
                        "life ": ">18 months ",
                        range: "0-30ppm ",
                        details:
                            "2 Electrode sensor with organic electrolyte; available in Classic Format. ",
                        link:
                            "https://www.citytech.com/en-gb/PDF-Datasheets/hcn2e30f.pdf"
                    },
                    {
                        ordNum: 1,
                        gas: "hydrogen-cyanide",
                        manufacturer: "CITY",
                        type: "sensoric",
                        "gas Type ": "HCN ",
                        SKU: "1639-221-30049",
                        productName: "HCN 2E 30 F ",
                        "life ": ">18 months ",
                        range: "0-30ppm ",
                        details:
                            "2 Electrode sensor with organic electrolyte; available in 4-Series Format. ",
                        link:
                            "https://www.citytech.com/en-gb/PDF-Datasheets/hcn2e30f.pdf"
                    },
                    {
                        ordNum: 1,
                        gas: "hydrogen-cyanide",
                        manufacturer: "CITY",
                        type: "sensoric",
                        "gas Type ": "HCN ",
                        SKU: "1639-221-30079",
                        productName: "HCN 2E 30 F ",
                        "life ": ">18 months ",
                        range: "0-30ppm ",
                        details:
                            "2 Electrode sensor with organic electrolyte; available in 7-Series Format. ",
                        link:
                            "https://www.citytech.com/en-gb/PDF-Datasheets/hcn2e30f.pdf"
                    },
                    {
                        ordNum: 1,
                        gas: "hydrogen-cyanide",
                        manufacturer: "CITY",
                        type: "sensoric",
                        "gas Type ": "HCN ",
                        SKU: "1639-231-30009",
                        productName: "HCN 3E 30 F ",
                        "life ": ">18 months ",
                        range: "0-30ppm ",
                        details:
                            "3 Electrode sensor with organic electrolyte; available in Mini,Format. ",
                        link:
                            "https://www.citytech.com/en-gb/PDF-Datasheets/hcn3e30f.pdf"
                    },
                    {
                        ordNum: 1,
                        gas: "hydrogen-cyanide",
                        manufacturer: "CITY",
                        type: "sensoric",
                        "gas Type ": "HCN ",
                        SKU: "1639-231-30069",
                        productName: "HCN 3E 30 F ",
                        "life ": ">18 months ",
                        range: "0-30ppm ",
                        details:
                            "3 Electrode sensor with organic electrolyte; available in Classic Format. ",
                        link:
                            "https://www.citytech.com/en-gb/PDF-Datasheets/hcn3e30f.pdf"
                    },
                    {
                        ordNum: 1,
                        gas: "hydrogen-cyanide",
                        manufacturer: "CITY",
                        type: "sensoric",
                        "gas Type ": "HCN ",
                        SKU: "1639-231-30049",
                        productName: "HCN 3E 30 F ",
                        "life ": ">18 months ",
                        range: "0-30ppm ",
                        details:
                            "3 Electrode sensor with organic electrolyte; available in 4-Series Format. ",
                        link:
                            "https://www.citytech.com/en-gb/PDF-Datasheets/hcn3e30f.pdf"
                    },
                    {
                        ordNum: 1,
                        gas: "hydrogen-cyanide",
                        manufacturer: "CITY",
                        type: "sensoric",
                        "gas Type ": "HCN ",
                        SKU: "1639-231-30079",
                        productName: "HCN 3E 30 F ",
                        "life ": ">18 months ",
                        range: "0-30ppm ",
                        details:
                            "3 Electrode sensor with organic electrolyte; available in 7-Series Format. ",
                        link:
                            "https://www.citytech.com/en-gb/PDF-Datasheets/hcn3e30f.pdf"
                    }
                ]
            },
            {
                name: "hydrogen-sulphide",
                chemicalId: "H2S",
                devices: [
                    {
                        ordNum: 1,
                        gas: "hydrogen-sulphide",
                        manufacturer: "CITY",
                        type: "1 type",
                        "gas Type ": "H2S ",
                        SKU: "2023B1020",
                        productName: "1HS ",
                        "life ": "5 years in air ",
                        range: "0-200ppm ",
                        details: "3 Electrode sensor ",
                        link:
                            "https://www.citytech.com/en-gb/PDF-Datasheets/1hs.pdf"
                    },
                    {
                        ordNum: 1,
                        gas: "hydrogen-sulphide",
                        manufacturer: "CITY",
                        type: "Sensoric  ",
                        "gas Type ": "H2S ",
                        SKU: "75-0155-134-30009",
                        productName: "H2S 3E 2000 S ",
                        "life ": ">15 months  ",
                        range: "0-2000ppm ",
                        details:
                            "3 Electrode sensor; available in Mini Format. ",
                        link:
                            "https://www.citytech.com/en-gb/PDF-Datasheets/h2s3e2000s.pdf"
                    },
                    {
                        ordNum: 1,
                        gas: "hydrogen-sulphide",
                        manufacturer: "CITY",
                        type: "Sensoric  ",
                        "gas Type ": "H2S ",
                        SKU: "75-0155-134-30069",
                        productName: "H2S 3E 2000 S ",
                        "life ": ">15 months  ",
                        range: "0-2000ppm ",
                        details:
                            "3 Electrode sensor; available in Classic Format. ",
                        link:
                            "https://www.citytech.com/en-gb/PDF-Datasheets/h2s3e2000s.pdf"
                    },
                    {
                        ordNum: 1,
                        gas: "hydrogen-sulphide",
                        manufacturer: "CITY",
                        type: "Sensoric  ",
                        "gas Type ": "H2S ",
                        SKU: "75-0155-134-32259",
                        productName: "H2S 3E 2000 S ",
                        "life ": ">15 months  ",
                        range: "0-2000ppm ",
                        details:
                            "3 Electrode sensor; available in Smart Format. ",
                        link:
                            "https://www.citytech.com/en-gb/PDF-Datasheets/h2s3e2000s.pdf"
                    },
                    {
                        ordNum: 1,
                        gas: "hydrogen-sulphide",
                        manufacturer: "CITY",
                        type: "Sensoric  ",
                        "gas Type ": "H2S ",
                        SKU: "75-0155-134-30049",
                        productName: "H2S 3E 2000 S ",
                        "life ": ">15 months  ",
                        range: "0-2000ppm ",
                        details:
                            "3 Electrode sensor; available in 4-Series Format. ",
                        link:
                            "https://www.citytech.com/en-gb/PDF-Datasheets/h2s3e2000s.pdf"
                    },
                    {
                        ordNum: 1,
                        gas: "hydrogen-sulphide",
                        manufacturer: "CITY",
                        type: "Sensoric  ",
                        "gas Type ": "H2S ",
                        SKU: "75-0155-134-30079",
                        productName: "H2S 3E 2000 S ",
                        "life ": ">15 months  ",
                        range: "0-2000ppm ",
                        details:
                            "3 Electrode sensor; available in 7-Series Format. ",
                        link:
                            "https://www.citytech.com/en-gb/PDF-Datasheets/h2s3e2000s.pdf"
                    },
                    {
                        ordNum: 1,
                        gas: "hydrogen-sulphide",
                        manufacturer: "CITY",
                        type: "sensoric",
                        "gas Type ": "H2S ",
                        SKU: "75-0155-134-30659 ",
                        productName: "H2S 3E 2000 S Transmitter ",
                        "life ": ">15 months ",
                        range: "0-2000ppm ",
                        details:
                            "3 Electrode sensor; available in Mini Format with 4-20mA PCB  ",
                        link:
                            "https://www.citytech.com/en-gb/PDF-Datasheets/h2s3e2000stransmitter.pdf"
                    }
                ]
            },
            {
                name: "hydrazine",
                chemicalId: "N2H4",
                devices: [
                    {
                        ordNum: 1,
                        gas: "hydrazine",
                        manufacturer: "CITY",
                        type: "sensoric",
                        "gas Type ": "N2H4 ",
                        SKU: "2131-021-30009",
                        productName: "N2H4 2E 1 - Mini",
                        "life ": ">1 year ",
                        range: "0-1ppm ",
                        details:
                            "2 Electrode sensor with organic gel electrolyte; Mini Format",
                        link:
                            "https://www.citytech.com/en-gb/PDF-Datasheets/n2h42e1.pdf"
                    },
                    {
                        ordNum: 1,
                        gas: "hydrazine",
                        manufacturer: "CITY",
                        type: "sensoric",
                        "gas Type ": "N2H4 ",
                        SKU: "2131-021-30069",
                        productName: "N2H4 2E 1 - Classic",
                        "life ": ">1 year ",
                        range: "0-1ppm ",
                        details:
                            "2 Electrode sensor with organic gel electrolyte; Classic Format.",
                        link:
                            "https://www.citytech.com/en-gb/PDF-Datasheets/n2h42e1.pdf"
                    },
                    {
                        ordNum: 1,
                        gas: "hydrazine",
                        manufacturer: "CITY",
                        type: "sensoric",
                        "gas Type ": "N2H4 ",
                        SKU: "2131-021-30049",
                        productName: "N2H4 2E 1 - 4-Series",
                        "life ": ">1 year ",
                        range: "0-1ppm ",
                        details:
                            "2 Electrode sensor with organic gel electrolyte; 4-Series Format. ",
                        link:
                            "https://www.citytech.com/en-gb/PDF-Datasheets/n2h42e1.pdf"
                    },
                    {
                        ordNum: 1,
                        gas: "hydrazine",
                        manufacturer: "CITY",
                        type: "sensoric",
                        "gas Type ": "N2H4 ",
                        SKU: "2131-021-30079",
                        productName: "N2H4 2E 1 - 7-Series",
                        "life ": ">1 year ",
                        range: "0-1ppm ",
                        details:
                            "2 Electrode sensor with organic gel electrolyte; 7-Series Format. ",
                        link:
                            "https://www.citytech.com/en-gb/PDF-Datasheets/n2h42e1.pdf"
                    }
                ]
            },
            {
                name: "hydroden-selenide",
                chemicalId: "SeH2",
                devices: [
                    {
                        ordNum: 1,
                        gas: "hydroden-selenide",
                        manufacturer: "CITY",
                        type: "sensoric",
                        "gas Type ": "SeH2 ",
                        SKU: "3035-337-30009",
                        productName: "SeH2 3E 5 LT - Mini",
                        "life ": "2 years ",
                        range: "0-5ppm ",
                        details:
                            "3 Electrode sensor with ionic liquid electrolyte; Mini Format. ",
                        link:
                            "https://www.citytech.com/en-gb/PDF-Datasheets/seh23e5flt.pdf"
                    },
                    {
                        ordNum: 1,
                        gas: "hydroden-selenide",
                        manufacturer: "CITY",
                        type: "sensoric",
                        "gas Type ": "SeH2 ",
                        SKU: "3035-337-30049",
                        productName: "SeH2 3E 5 LT - 4-Series",
                        "life ": "2 years ",
                        range: "0-5ppm ",
                        details:
                            "3 Electrode sensor with ionic liquid electrolyte; 4-Series Format. ",
                        link:
                            "https://www.citytech.com/en-gb/PDF-Datasheets/seh23e5flt.pdf"
                    },
                    {
                        ordNum: 1,
                        gas: "hydroden-selenide",
                        manufacturer: "CITY",
                        type: "sensoric",
                        "gas Type ": "SeH2 ",
                        SKU: "3035-337-30079",
                        productName: "SeH2 3E 5 LT - 7-Series",
                        "life ": "2 years ",
                        range: "0-5ppm ",
                        details:
                            "3 Electrode sensor with ionic liquid electrolyte; 7-Series Format. ",
                        link:
                            "https://www.citytech.com/en-gb/PDF-Datasheets/seh23e5flt.pdf"
                    },
                    {
                        ordNum: 1,
                        gas: "hydroden-selenide",
                        manufacturer: "CITY",
                        type: "sensoric",
                        "gas Type ": "SeH2 ",
                        SKU: "3035-337-30069",
                        productName: "SeH2 3E 5 LT - Classic",
                        "life ": "2 years ",
                        range: "0-5ppm ",
                        details:
                            "3 Electrode sensor with ionic liquid electrolyte; Classic Format. ",
                        link:
                            "https://www.citytech.com/en-gb/PDF-Datasheets/seh23e5flt.pdf"
                    },
                    {
                        ordNum: 1,
                        gas: "hydroden-selenide",
                        manufacturer: "CITY",
                        type: "sensoric",
                        "gas Type ": "SeH2 ",
                        SKU: "3035-337-30259",
                        productName: "SeH2 3E 5 LT - Smart",
                        "life ": "2 years ",
                        range: "0-5ppm ",
                        details:
                            "3 Electrode sensor with ionic liquid electrolyte; Smart Format. ",
                        link:
                            "https://www.citytech.com/en-gb/PDF-Datasheets/seh23e5flt.pdf"
                    },
                    {
                        ordNum: 1,
                        gas: "hydroden-selenide",
                        manufacturer: "CITY",
                        type: "sensoric",
                        "gas Type ": "SeH2 ",
                        SKU: "3035-337-30659",
                        productName: "SeH2 3E 5 LT - Transmitter",
                        "life ": "2 years ",
                        range: "0-5ppm ",
                        details:
                            "3 Electrode sensor with ionic liquid electrolyte; Transmitter. ",
                        link:
                            "https://www.citytech.com/en-gb/PDF-Datasheets/seh23e5flt.pdf"
                    }
                ]
            },
            {
                name: "hydroden-flouride",
                chemicalId: "HF",
                devices: [
                    {
                        ordNum: 1,
                        gas: "hydroden-flouride",
                        manufacturer: "CITY",
                        type: "sensoric",
                        "gas Type ": "HF ",
                        SKU: "1336-932-30009",
                        productName: "HF 3E 10 SE - Mini",
                        "life ": ">18 months ",
                        range: "0-10ppm ",
                        details:
                            "3 Electrode sensor; available in Mini Format. ",
                        link:
                            "https://www.citytech.com/en-gb/PDF-Datasheets/hf3e10se.pdf"
                    },
                    {
                        ordNum: 1,
                        gas: "hydroden-flouride",
                        manufacturer: "CITY",
                        type: "sensoric",
                        "gas Type ": "HF ",
                        SKU: "1336-932-30069",
                        productName: "HF 3E 10 SE - Classic",
                        "life ": ">18 months ",
                        range: "0-10ppm ",
                        details:
                            "3 Electrode sensor; available in Classic Format. ",
                        link:
                            "https://www.citytech.com/en-gb/PDF-Datasheets/hf3e10se.pdf"
                    },
                    {
                        ordNum: 1,
                        gas: "hydroden-flouride",
                        manufacturer: "CITY",
                        type: "sensoric",
                        "gas Type ": "HF ",
                        SKU: "1336-932-32259",
                        productName: "HF 3E 10 SE - Smart",
                        "life ": ">18 months ",
                        range: "0-10ppm ",
                        details:
                            "3 Electrode sensor; available in Smart Format (8 pin socket)",
                        link:
                            "https://www.citytech.com/en-gb/PDF-Datasheets/hf3e10se.pdf"
                    },
                    {
                        ordNum: 1,
                        gas: "hydroden-flouride",
                        manufacturer: "CITY",
                        type: "sensoric",
                        "gas Type ": "HF ",
                        SKU: "1336-932-30049",
                        productName: "HF 3E 10 SE - 4-Series",
                        "life ": ">18 months ",
                        range: "0-10ppm ",
                        details:
                            "3 Electrode sensor; available in 4-Series Format. ",
                        link:
                            "https://www.citytech.com/en-gb/PDF-Datasheets/hf3e10se.pdf"
                    },
                    {
                        ordNum: 1,
                        gas: "hydroden-flouride",
                        manufacturer: "CITY",
                        type: "sensoric",
                        "gas Type ": "HF ",
                        SKU: "1336-932-30079",
                        productName: "HF 3E 10 SE - 7-Series",
                        "life ": ">18 months ",
                        range: "0-10ppm ",
                        details:
                            "3 Electrode sensor; available in 7-Series Format. ",
                        link:
                            "https://www.citytech.com/en-gb/PDF-Datasheets/hf3e10se.pdf"
                    },
                    {
                        ordNum: 1,
                        gas: "hydroden-flouride",
                        manufacturer: "CITY",
                        type: "sensoric",
                        "gas Type ": "HF ",
                        SKU: "1336-932-30659",
                        productName: "HF 3E 10 SE - Mini PCB ",
                        "life ": ">18 months ",
                        range: "0-10ppm ",
                        details:
                            "3 Electrode sensor; available in Mini Format with 4-20mA PCB  ",
                        link:
                            "https://www.citytech.com/en-gb/PDF-Datasheets/hf3e10se.pdf"
                    }
                ]
            },
            {
                name: "mercaptan",
                chemicalId: "CH4S",
                devices: [
                    {
                        ordNum: 1,
                        gas: "mercaptan",
                        manufacturer: "CITY",
                        type: "sensoric",
                        "gas Type ": "CH4S",
                        SKU: "2441-021-03069",
                        productName: "TBM 2E - Classic",
                        "life ": ">1 year ",
                        range: "0-50mg/m3 ",
                        details:
                            "2 Electrode sensor; available in Classic Format. ",
                        link:
                            "https://www.citytech.com/en-gb/PDF-Datasheets/tbm2e.pdf"
                    },
                    {
                        ordNum: 1,
                        gas: "mercaptan",
                        manufacturer: "CITY",
                        type: "sensoric",
                        "gas Type ": "CH4S",
                        SKU: "2441-021-04049",
                        productName: "TBM 2E - 4-Series",
                        "life ": ">1 year ",
                        range: "0-50mg/m3 ",
                        details:
                            "2 Electrode sensor; available in 4-Series Format. ",
                        link:
                            "https://www.citytech.com/en-gb/PDF-Datasheets/tbm2e.pdf"
                    },
                    {
                        ordNum: 1,
                        gas: "mercaptan",
                        manufacturer: "CITY",
                        type: "sensoric",
                        "gas Type ": "CH4S",
                        SKU: "2441-021-07079",
                        productName: "TBM 2E - 7-Series",
                        "life ": ">1 year ",
                        range: "0-50mg/m3 ",
                        details:
                            "2 Electrode sensor; available in 7-Series Format. ",
                        link:
                            "https://www.citytech.com/en-gb/PDF-Datasheets/tbm2e.pdf"
                    }
                ]
            },
            {
                name: "nitric-dioxide",
                chemicalId: "NO2",
                devices: [
                    {
                        ordNum: 1,
                        gas: "nitric-dioxide",
                        manufacturer: "CITY",
                        type: "3 type",
                        "gas Type ": "NO2 ",
                        SKU: "MGH60-014",
                        productName: "3MNDH - 1 mV/ppm",
                        "life ": "2 years in air ",
                        range: "0-200ppm ",
                        details:
                            "3 Electrode sensor with mV output board - 1 mV/ppm",
                        link:
                            "https://www.citytech.com/en-gb/PDF-Datasheets/3mndh.pdf"
                    },
                    {
                        ordNum: 1,
                        gas: "nitric-dioxide",
                        manufacturer: "CITY",
                        type: "3 type",
                        "gas Type ": "NO2 ",
                        SKU: "MGH60-024",
                        productName: "3MNDH - 10 mV/ppm",
                        "life ": "2 years in air ",
                        range: "0-200ppm ",
                        details:
                            "3 Electrode sensor with mV output board - 10 mV/ppm",
                        link:
                            "https://www.citytech.com/en-gb/PDF-Datasheets/3mndh.pdf"
                    },
                    {
                        ordNum: 1,
                        gas: "nitric-dioxide",
                        manufacturer: "CITY",
                        type: "3 type",
                        "gas Type ": "NO2 ",
                        SKU: "AG004-J00",
                        productName: "3ND ",
                        "life ": "2 years in air ",
                        range: "0-1000ppm ",
                        details:
                            "3 Electrode sensor - With side tag and PCB pin connections",
                        link:
                            "https://www.citytech.com/en-gb/PDF-Datasheets/3nd.pdf"
                    },
                    {
                        ordNum: 1,
                        gas: "nitric-dioxide",
                        manufacturer: "CITY",
                        type: "3 type",
                        "gas Type ": "NO2 ",
                        SKU: "AG004-000",
                        productName: "3ND(S)",
                        "life ": "2 years in air ",
                        range: "0-1000ppm ",
                        details:
                            "3 Electrode sensor - With side tag connection",
                        link:
                            "https://www.citytech.com/en-gb/PDF-Datasheets/3nd.pdf"
                    },
                    {
                        ordNum: 1,
                        gas: "nitric-dioxide",
                        manufacturer: "CITY",
                        type: "3 type",
                        "gas Type ": "NO2 ",
                        SKU: "AG004-300",
                        productName: "3ND(G)",
                        "life ": "2 years in air ",
                        range: "0-1000ppm ",
                        details:
                            "3 Electrode sensor - With gold-plated PCB pin connection",
                        link:
                            "https://www.citytech.com/en-gb/PDF-Datasheets/3nd.pdf"
                    },
                    {
                        ordNum: 1,
                        gas: "nitric-dioxide",
                        manufacturer: "CITY",
                        type: "3 type",
                        "gas Type ": "NO2 ",
                        SKU: "AG002-J00",
                        productName: "3NDH ",
                        "life ": "2 years in air ",
                        range: "0-200ppm ",
                        details:
                            "3 Electrode sensor - With side tag and PCB pin connections",
                        link:
                            "https://www.citytech.com/en-gb/PDF-Datasheets/3ndh.pdf"
                    },
                    {
                        ordNum: 1,
                        gas: "nitric-dioxide",
                        manufacturer: "CITY",
                        type: "3 type",
                        "gas Type ": "NO2 ",
                        SKU: "AG002-000",
                        productName: "3NDH(S)",
                        "life ": "2 years in air ",
                        range: "0-200ppm ",
                        details:
                            "3 Electrode sensor - With side tag connection",
                        link:
                            "https://www.citytech.com/en-gb/PDF-Datasheets/3ndh.pdf"
                    },
                    {
                        ordNum: 1,
                        gas: "nitric-dioxide",
                        manufacturer: "CITY",
                        type: "3 type",
                        "gas Type ": "NO2 ",
                        SKU: "AG002-300",
                        productName: "3NDH(G)",
                        "life ": "2 years in air ",
                        range: "0-200ppm ",
                        details:
                            "3 Electrode sensor - With gold-plated PCB pin connection",
                        link:
                            "https://www.citytech.com/en-gb/PDF-Datasheets/3ndh.pdf"
                    },
                    {
                        ordNum: 1,
                        gas: "nitric-dioxide",
                        manufacturer: "CITY",
                        type: "4 type",
                        "gas Type ": "NO2 ",
                        SKU: "AG200-800",
                        productName: "4ND ",
                        "life ": "2 years in air ",
                        range: "0-150ppm ",
                        details: "3 Electrode minature sensor ",
                        link:
                            "https://www.citytech.com/en-gb/PDF-Datasheets/4nd.pdf"
                    },
                    {
                        ordNum: 1,
                        gas: "nitric-dioxide",
                        manufacturer: "CITY",
                        type: "5 type",
                        "gas Type ": "NO2 ",
                        SKU: "AG526-W00",
                        productName: "5ND ",
                        "life ": "2 years in air ",
                        range: "0-1000ppm ",
                        details: "3 Electrode flue gas sensor ",
                        link:
                            "https://www.citytech.com/en-gb/PDF-Datasheets/5nd.pdf"
                    },
                    {
                        ordNum: 1,
                        gas: "nitric-dioxide",
                        manufacturer: "CITY",
                        type: "7 type",
                        "gas Type ": "NO2 ",
                        SKU: "AG702-400 ",
                        productName: "7NDH ",
                        "life ": "2 years in air ",
                        range: "0-200ppm ",
                        details: "3 Electrode compact sensor ",
                        link:
                            "https://www.citytech.com/en-gb/PDF-Datasheets/7ndh.pdf"
                    },
                    {
                        ordNum: 1,
                        gas: "nitric-dioxide",
                        manufacturer: "CITY",
                        type: "3 type",
                        "gas Type ": "NO2 ",
                        SKU: "AG0F4-H00",
                        productName: "MND-1 ",
                        "life ": "1 year in air ",
                        range: "0-200ppm ",
                        details: "4 Electrode sensor ",
                        link:
                            "https://www.citytech.com/en-gb/PDF-Datasheets/mnd1.pdf"
                    },
                    {
                        ordNum: 1,
                        gas: "nitric-dioxide",
                        manufacturer: "CITY",
                        type: "7 type",
                        "gas Type ": "NO2 ",
                        SKU: "AG7F4-400",
                        productName: "MND-2 ",
                        "life ": "1 year in air ",
                        range: "0-200ppm ",
                        details: "4 Electrode sensor ",
                        link:
                            "https://www.citytech.com/en-gb/PDF-Datasheets/mnd2.pdf"
                    },
                    {
                        ordNum: 1,
                        gas: "nitric-dioxide",
                        manufacturer: "CITY",
                        type: "sensoric",
                        "gas Type ": "NO2 ",
                        SKU: "2241-032-30009",
                        productName: "NO2 3E 50 - Mini",
                        "life ": ">2 years ",
                        range: "0-50ppm ",
                        details:
                            "3 Electrode sensor with organic electrolyte; Mini Format",
                        link:
                            "https://www.citytech.com/en-gb/PDF-Datasheets/no23e50.pdf"
                    },
                    {
                        ordNum: 1,
                        gas: "nitric-dioxide",
                        manufacturer: "CITY",
                        type: "sensoric",
                        "gas Type ": "NO2 ",
                        SKU: "2241-032-30069",
                        productName: "NO2 3E 50 - Classic",
                        "life ": ">2 years ",
                        range: "0-50ppm ",
                        details:
                            "3 Electrode sensor with organic electrolyte; Classic Format.",
                        link:
                            "https://www.citytech.com/en-gb/PDF-Datasheets/no23e50.pdf"
                    },
                    {
                        ordNum: 1,
                        gas: "nitric-dioxide",
                        manufacturer: "CITY",
                        type: "sensoric",
                        "gas Type ": "NO2 ",
                        SKU: "2241-032-30049",
                        productName: "NO2 3E 50 - 4-Series",
                        "life ": ">2 years ",
                        range: "0-50ppm ",
                        details:
                            "3 Electrode sensor with organic electrolyte; 4-Series Format. ",
                        link:
                            "https://www.citytech.com/en-gb/PDF-Datasheets/no23e50.pdf"
                    },
                    {
                        ordNum: 1,
                        gas: "nitric-dioxide",
                        manufacturer: "CITY",
                        type: "sensoric",
                        "gas Type ": "NO2 ",
                        SKU: "2241-032-30079",
                        productName: "NO2 3E 50 - 7-Series",
                        "life ": ">2 years ",
                        range: "0-50ppm ",
                        details:
                            "3 Electrode sensor with organic electrolyte; 7-Series Format. ",
                        link:
                            "https://www.citytech.com/en-gb/PDF-Datasheets/no23e50.pdf"
                    },
                    {
                        ordNum: 1,
                        gas: "nitric-dioxide",
                        manufacturer: "CITY",
                        type: "3 type",
                        "gas Type ": "NO2 ",
                        SKU: "TG2H-1A",
                        productName: "T3ND ",
                        "life ": "2 years in air ",
                        range: "0-300 ppm",
                        details: "3 Electrode Sensor with transmitter board ",
                        link:
                            "https://www.citytech.com/en-gb/PDF-Datasheets/t3nd.pdf"
                    },
                    {
                        ordNum: 1,
                        gas: "nitric-dioxide",
                        manufacturer: "CITY",
                        type: "3 type",
                        "gas Type ": "NO2 ",
                        SKU: "TG3A-1A",
                        productName: "T3NDH - 0-5 ppm",
                        "life ": "2 years in air ",
                        range: "0-5 ppm ",
                        details:
                            "3 electrode sensor with standard 4-20mA board - 0-5 ppm",
                        link:
                            "https://www.citytech.com/en-gb/PDF-Datasheets/t3ndh.pdf"
                    },
                    {
                        ordNum: 1,
                        gas: "nitric-dioxide",
                        manufacturer: "CITY",
                        type: "3 type",
                        "gas Type ": "NO2 ",
                        SKU: "TG3B-1A",
                        productName: "T3NDH - 0-10 ppm",
                        "life ": "2 years in air ",
                        range: "0-10 ppm ",
                        details:
                            "3 electrode sensor with standard 4-20mA board - 0-10 ppm",
                        link:
                            "https://www.citytech.com/en-gb/PDF-Datasheets/t3ndh.pdf"
                    },
                    {
                        ordNum: 1,
                        gas: "nitric-dioxide",
                        manufacturer: "CITY",
                        type: "3 type",
                        "gas Type ": "NO2 ",
                        SKU: "TG3C-1A",
                        productName: "T3NDH - 0-20 ppm",
                        "life ": "2 years in air ",
                        range: "0-20 ppm ",
                        details:
                            "3 electrode sensor with standard 4-20mA board - 0-20 ppm",
                        link:
                            "https://www.citytech.com/en-gb/PDF-Datasheets/t3ndh.pdf"
                    },
                    {
                        ordNum: 1,
                        gas: "nitric-dioxide",
                        manufacturer: "CITY",
                        type: "3 type",
                        "gas Type ": "NO2 ",
                        SKU: "TG3D-1A",
                        productName: "T3NDH - 0-30 ppm",
                        "life ": "2 years in air ",
                        range: "0-30 ppm ",
                        details:
                            "3 electrode sensor with standard 4-20mA board - 0-30 ppm",
                        link:
                            "https://www.citytech.com/en-gb/PDF-Datasheets/t3ndh.pdf"
                    },
                    {
                        ordNum: 1,
                        gas: "nitric-dioxide",
                        manufacturer: "CITY",
                        type: "3 type",
                        "gas Type ": "NO2 ",
                        SKU: "TG3E-1A",
                        productName: "T3NDH ",
                        "life ": "2 years in air - 0-50 ppm",
                        range: "0-50 ppm ",
                        details:
                            "3 electrode sensor with standard 4-20mA board - 0-50 ppm",
                        link:
                            "https://www.citytech.com/en-gb/PDF-Datasheets/t3ndh.pdf"
                    },
                    {
                        ordNum: 1,
                        gas: "nitric-dioxide",
                        manufacturer: "CITY",
                        type: "3 type",
                        "gas Type ": "NO2 ",
                        SKU: "TG3F-1A",
                        productName: "T3NDH - 0-100 ppm",
                        "life ": "2 years in air ",
                        range: "0-100 ppm ",
                        details:
                            "3 electrode sensor with standard 4-20mA board - 0-100 ppm",
                        link:
                            "https://www.citytech.com/en-gb/PDF-Datasheets/t3ndh.pdf"
                    },
                    {
                        ordNum: 1,
                        gas: "nitric-dioxide",
                        manufacturer: "CITY",
                        type: "3 type",
                        "gas Type ": "NO2 ",
                        SKU: "TG3G-1A",
                        productName: "T3NDH - 0-200 ppm",
                        "life ": "2 years in air ",
                        range: "0-200 ppm ",
                        details:
                            "3 electrode sensor with standard 4-20mA board - 0-200 ppm",
                        link:
                            "https://www.citytech.com/en-gb/PDF-Datasheets/t3ndh.pdf"
                    },
                    {
                        ordNum: 1,
                        gas: "nitric-dioxide",
                        manufacturer: "CITY",
                        type: "3 type",
                        "gas Type ": "NO2 ",
                        SKU: "TG3H-1A",
                        productName: "T3NDH - 0-300 ppm",
                        "life ": "2 years in air ",
                        range: "0-300 ppm ",
                        details:
                            "3 electrode sensor with standard 4-20mA board - 0-300 ppm",
                        link:
                            "https://www.citytech.com/en-gb/PDF-Datasheets/t3ndh.pdf"
                    }
                ]
            },
            {
                name: "nitric-oxide",
                chemicalId: "NO",
                devices: [
                    {
                        ordNum: 1,
                        gas: "nitric-oxide",
                        manufacturer: "CITY",
                        type: "3 type",
                        "gas Type ": "NO ",
                        SKU: "MFF60-014",
                        productName: "3MNF/F ",
                        "life ": "3 years in air ",
                        range: "0-5000ppm ",
                        details:
                            "3 Electrode sensor with SO2 filter and mV outputboard ",
                        link:
                            "https://www.citytech.com/en-gb/PDF-Datasheets/3mnff.pdf"
                    },
                    {
                        ordNum: 1,
                        gas: "nitric-oxide",
                        manufacturer: "CITY",
                        type: "CiTiceL® ",
                        "gas Type ": "NO ",
                        SKU: "MFT60-014",
                        productName: "3MNT ",
                        "life ": "3 years in air ",
                        range: "0-1000ppm ",
                        details: "nitric-oxide Sensor with mV Output",
                        link:
                            "https://www.citytech.com/en-gb/PDF-Datasheets/3mnt.pdf"
                    },
                    {
                        ordNum: 1,
                        gas: "nitric-oxide",
                        manufacturer: "CITY",
                        type: "3 type",
                        "gas Type ": "NO ",
                        SKU: "AF006-J06",
                        productName: "3NF/F ",
                        "life ": "3 years in air ",
                        range: "0-5000ppm ",
                        details:
                            "3 Electrode sensor with SO2 filter - With side tag and PCB pin connections",
                        link:
                            "https://www.citytech.com/en-gb/PDF-Datasheets/3nff.pdf"
                    },
                    {
                        ordNum: 1,
                        gas: "nitric-oxide",
                        manufacturer: "CITY",
                        type: "3 type",
                        "gas Type ": "NO ",
                        SKU: "AF006-006",
                        productName: "3NF/F(S)",
                        "life ": "3 years in air ",
                        range: "0-5000ppm ",
                        details:
                            "3 Electrode sensor with SO2 filter - With side tag connection",
                        link:
                            "https://www.citytech.com/en-gb/PDF-Datasheets/3nff.pdf"
                    },
                    {
                        ordNum: 1,
                        gas: "nitric-oxide",
                        manufacturer: "CITY",
                        type: "3 type",
                        "gas Type ": "NO ",
                        SKU: "AF006-306",
                        productName: "3NF/F(G)",
                        "life ": "3 years in air ",
                        range: "0-5000ppm ",
                        details:
                            "3 Electrode sensor with SO2 filter - With gold plated PCB pin connection",
                        link:
                            "https://www.citytech.com/en-gb/PDF-Datasheets/3nff.pdf"
                    },
                    {
                        ordNum: 1,
                        gas: "nitric-oxide",
                        manufacturer: "CITY",
                        type: "3 type",
                        "gas Type ": "NO ",
                        SKU: "AF007-J06",
                        productName: "3BNF/F ",
                        "life ": "3 years in air ",
                        range: "0-5000ppm ",
                        details:
                            "3 Electrode sensor with SO2 filter - 3NFF with bias board",
                        link:
                            "https://www.citytech.com/en-gb/PDF-Datasheets/3nff.pdf"
                    },
                    {
                        ordNum: 1,
                        gas: "nitric-oxide",
                        manufacturer: "CITY",
                        type: "3 type",
                        "gas Type ": "NO ",
                        SKU: "AF004-J00",
                        productName: "3NT ",
                        "life ": "3 years in air ",
                        range: "0-300ppm ",
                        details:
                            "3 Electrode sensor - With side tag and PCB pin connections",
                        link:
                            "https://www.citytech.com/en-gb/PDF-Datasheets/3nt.pdf"
                    },
                    {
                        ordNum: 1,
                        gas: "nitric-oxide",
                        manufacturer: "CITY",
                        type: "3 type",
                        "gas Type ": "NO ",
                        SKU: "AF004-300",
                        productName: "3NT ",
                        "life ": "3 years in air ",
                        range: "0-300ppm ",
                        details:
                            "3 Electrode sensor - With side tag connection",
                        link:
                            "https://www.citytech.com/en-gb/PDF-Datasheets/3nt.pdf"
                    },
                    {
                        ordNum: 1,
                        gas: "nitric-oxide",
                        manufacturer: "CITY",
                        type: "3 type",
                        "gas Type ": "NO ",
                        SKU: "AF004-000",
                        productName: "3NT ",
                        "life ": "3 years in air ",
                        range: "0-300ppm ",
                        details:
                            "3 Electrode sensor - With gold-plated PCB pin connection",
                        link:
                            "https://www.citytech.com/en-gb/PDF-Datasheets/3nt.pdf"
                    },
                    {
                        ordNum: 1,
                        gas: "nitric-oxide",
                        manufacturer: "CITY",
                        type: "4 type",
                        "gas Type ": "NO ",
                        SKU: "AF4NT-800",
                        productName: "4NT ",
                        "life ": "2 years in air ",
                        range: "0-1000ppm ",
                        details: "3 Electrode minature sensor ",
                        link:
                            "https://www.citytech.com/en-gb/PDF-Datasheets/4nt.pdf"
                    },
                    {
                        ordNum: 1,
                        gas: "nitric-oxide",
                        manufacturer: "CITY",
                        type: "5 type",
                        "gas Type ": "NO ",
                        SKU: "AF508-W0C",
                        productName: "5NF ",
                        "life ": "3 years in air ",
                        range: "0-5000ppm ",
                        details:
                            "4 Electrode flue gas sensor with internal SO2 filter - (without bias board)",
                        link:
                            "https://www.citytech.com/en-gb/PDF-Datasheets/5nf.pdf"
                    },
                    {
                        ordNum: 1,
                        gas: "nitric-oxide",
                        manufacturer: "CITY",
                        type: "5 type",
                        "gas Type ": "NO ",
                        SKU: "AF509-W0C",
                        productName: "5BNF ",
                        "life ": "3 years in air ",
                        range: "0-5000ppm ",
                        details:
                            "4 Electrode flue gas sensor with internal SO2 filter - (with bias board)",
                        link:
                            "https://www.citytech.com/en-gb/PDF-Datasheets/5nf.pdf"
                    },
                    {
                        ordNum: 1,
                        gas: "nitric-oxide",
                        manufacturer: "CITY",
                        type: "7 type",
                        "gas Type ": "NO ",
                        SKU: "AF704-400 ",
                        productName: "7NT ",
                        "life ": "3 years in air ",
                        range: "0-1500ppm ",
                        details: "3 Electrode compact sensor ",
                        link:
                            "https://www.citytech.com/en-gb/PDF-Datasheets/7nt.pdf"
                    },
                    {
                        ordNum: 1,
                        gas: "nitric-oxide",
                        manufacturer: "CITY",
                        type: "3 type",
                        "gas Type ": "NO ",
                        SKU: "AF0F4-H00",
                        productName: "MNO-1 ",
                        "life ": "1 year in air ",
                        range: "0-1500ppm ",
                        details: "4 Electrode sensor (standard)",
                        link:
                            "https://www.citytech.com/en-gb/PDF-Datasheets/mno1.pdf"
                    },
                    {
                        ordNum: 1,
                        gas: "nitric-oxide",
                        manufacturer: "CITY",
                        type: "3 type",
                        "gas Type ": "NO ",
                        SKU: "AF0F7-H00",
                        productName: "MNO-1B",
                        "life ": "1 year in air ",
                        range: "0-1500ppm ",
                        details: "4 Electrode sensor (with bias board)",
                        link:
                            "https://www.citytech.com/en-gb/PDF-Datasheets/mno1.pdf"
                    },
                    {
                        ordNum: 1,
                        gas: "nitric-oxide",
                        manufacturer: "CITY",
                        type: "7 type",
                        "gas Type ": "NO ",
                        SKU: "AF7F4-400",
                        productName: "MNO-2 ",
                        "life ": "1 year in air ",
                        range: "0-1500ppm ",
                        details: "4 Electrode sensor (standard)",
                        link:
                            "https://www.citytech.com/en-gb/PDF-Datasheets/mno2.pdf"
                    },
                    {
                        ordNum: 1,
                        gas: "nitric-oxide",
                        manufacturer: "CITY",
                        type: "7 type",
                        "gas Type ": "NO ",
                        SKU: "AF7F7-400",
                        productName: "MNO-2B",
                        "life ": "1 year in air ",
                        range: "0-1500ppm ",
                        details: "4 Electrode sensor (with bias board)",
                        link:
                            "https://www.citytech.com/en-gb/PDF-Datasheets/mno2.pdf"
                    },
                    {
                        ordNum: 1,
                        gas: "nitric-oxide",
                        manufacturer: "CITY",
                        type: "sensoric",
                        "gas Type ": "NO ",
                        SKU: "1945-034-30009",
                        productName: "NO 3E 100 - Mini",
                        "life ": ">2 years ",
                        range: "0-100ppm ",
                        details:
                            "3 Electrode sensor with organic electrolyte; Mini Format",
                        link:
                            "https://www.citytech.com/en-gb/PDF-Datasheets/no3e100.pdf"
                    },
                    {
                        ordNum: 1,
                        gas: "nitric-oxide",
                        manufacturer: "CITY",
                        type: "sensoric",
                        "gas Type ": "NO ",
                        SKU: "1945-034-30069",
                        productName: "NO 3E 100 - Classic",
                        "life ": ">2 years ",
                        range: "0-100ppm ",
                        details:
                            "3 Electrode sensor with organic electrolyte; Classic Format.",
                        link:
                            "https://www.citytech.com/en-gb/PDF-Datasheets/no3e100.pdf"
                    },
                    {
                        ordNum: 1,
                        gas: "nitric-oxide",
                        manufacturer: "CITY",
                        type: "sensoric",
                        "gas Type ": "NO ",
                        SKU: "1945-034-30049",
                        productName: "NO 3E 100 - 4-Series",
                        "life ": ">2 years ",
                        range: "0-100ppm ",
                        details:
                            "3 Electrode sensor with organic electrolyte; 4-Series Format. ",
                        link:
                            "https://www.citytech.com/en-gb/PDF-Datasheets/no3e100.pdf"
                    },
                    {
                        ordNum: 1,
                        gas: "nitric-oxide",
                        manufacturer: "CITY",
                        type: "sensoric",
                        "gas Type ": "NO ",
                        SKU: "1945-034-30079",
                        productName: "NO 3E 100 - 7-Series",
                        "life ": ">2 years ",
                        range: "0-100ppm ",
                        details:
                            "3 Electrode sensor with organic electrolyte; 7-Series Format. ",
                        link:
                            "https://www.citytech.com/en-gb/PDF-Datasheets/no3e100.pdf"
                    },
                    {
                        ordNum: 1,
                        gas: "nitric-oxide",
                        manufacturer: "CITY",
                        type: "AutoNO® ",
                        "gas Type ": "NO ",
                        SKU: "AF747-B05",
                        productName: "NX1 ",
                        "life ": "2 years in air ",
                        range: "0-5000ppm ",
                        details: "Automotive sensor with inboard filter ",
                        link:
                            "https://www.citytech.com/en-gb/PDF-Datasheets/nx1.pdf"
                    },
                    {
                        ordNum: 1,
                        gas: "nitric-oxide",
                        manufacturer: "CITY",
                        type: "3 type",
                        "gas Type ": "NO ",
                        SKU: "TF2F-1A",
                        productName: "T3NF/F - 0-100 ppm",
                        "life ": "2 years in air ",
                        range: "0-100 ppm",
                        details:
                            "3 electrode sensor with standard 4-20mA board ",
                        link:
                            "https://www.citytech.com/en-gb/PDF-Datasheets/t3nff.pdf"
                    },
                    {
                        ordNum: 1,
                        gas: "nitric-oxide",
                        manufacturer: "CITY",
                        type: "3 type",
                        "gas Type ": "NO ",
                        SKU: "TF2G-1A",
                        productName: "T3NF/F - 0-200 ppm",
                        "life ": "2 years in air ",
                        range: "0-200 ppm ",
                        details:
                            "3 electrode sensor with standard 4-20mA board ",
                        link:
                            "https://www.citytech.com/en-gb/PDF-Datasheets/t3nff.pdf"
                    },
                    {
                        ordNum: 1,
                        gas: "nitric-oxide",
                        manufacturer: "CITY",
                        type: "3 type",
                        "gas Type ": "NO ",
                        SKU: "TF2I-1A",
                        productName: "T3NF/F - 0-500 ppm",
                        "life ": "2 years in air ",
                        range: "0-500 ppm",
                        details:
                            "3 electrode sensor with standard 4-20mA board ",
                        link:
                            "https://www.citytech.com/en-gb/PDF-Datasheets/t3nff.pdf"
                    },
                    {
                        ordNum: 1,
                        gas: "nitric-oxide",
                        manufacturer: "CITY",
                        type: "3 type",
                        "gas Type ": "NO ",
                        SKU: "TF2J-1A",
                        productName: "T3NF/F - 0-1000 ppm",
                        "life ": "2 years in air ",
                        range: "0-1000 ppm",
                        details:
                            "3 electrode sensor with standard 4-20mA board ",
                        link:
                            "https://www.citytech.com/en-gb/PDF-Datasheets/t3nff.pdf"
                    },
                    {
                        ordNum: 1,
                        gas: "nitric-oxide",
                        manufacturer: "CITY",
                        type: "3 type",
                        "gas Type ": "NO ",
                        SKU: "TF2K-1A",
                        productName: "T3NF/F - 0-2000 ppm",
                        "life ": "2 years in air ",
                        range: "0-2000 ppm ",
                        details:
                            "3 electrode sensor with standard 4-20mA board ",
                        link:
                            "https://www.citytech.com/en-gb/PDF-Datasheets/t3nff.pdf"
                    },
                    {
                        ordNum: 1,
                        gas: "nitric-oxide",
                        manufacturer: "CITY",
                        type: "3 type",
                        "gas Type ": "NO ",
                        SKU: "TF3C-1A",
                        productName: "T3NT - 0-20 ppm",
                        "life ": "3 years in air ",
                        range: "0-20 ppm ",
                        details: "3 Electrode sensor with transmitter board ",
                        link:
                            "https://www.citytech.com/en-gb/PDF-Datasheets/t3nt.pdf"
                    },
                    {
                        ordNum: 1,
                        gas: "nitric-oxide",
                        manufacturer: "CITY",
                        type: "3 type",
                        "gas Type ": "NO ",
                        SKU: "TF3D-1A",
                        productName: "T3NT - 0-30 ppm",
                        "life ": "3 years in air ",
                        range: "0-30 ppm ",
                        details: "3 Electrode sensor with transmitter board ",
                        link:
                            "https://www.citytech.com/en-gb/PDF-Datasheets/t3nt.pdf"
                    },
                    {
                        ordNum: 1,
                        gas: "nitric-oxide",
                        manufacturer: "CITY",
                        type: "3 type",
                        "gas Type ": "NO ",
                        SKU: "TF3E-1A",
                        productName: "T3NT - 0-50 ppm",
                        "life ": "3 years in air ",
                        range: "0-50 ppm ",
                        details: "3 Electrode sensor with transmitter board ",
                        link:
                            "https://www.citytech.com/en-gb/PDF-Datasheets/t3nt.pdf"
                    },
                    {
                        ordNum: 1,
                        gas: "nitric-oxide",
                        manufacturer: "CITY",
                        type: "3 type",
                        "gas Type ": "NO ",
                        SKU: "TF3F-1A",
                        productName: "T3NT 0-100 ppm",
                        "life ": "3 years in air ",
                        range: "0-100 ppm ",
                        details: "3 Electrode sensor with transmitter board ",
                        link:
                            "https://www.citytech.com/en-gb/PDF-Datasheets/t3nt.pdf"
                    },
                    {
                        ordNum: 1,
                        gas: "nitric-oxide",
                        manufacturer: "CITY",
                        type: "3 type",
                        "gas Type ": "NO ",
                        SKU: "TF3G-1A",
                        productName: "T3NT - 0-200 ppm ",
                        "life ": "3 years in air ",
                        range: "0-200ppm ",
                        details: "3 Electrode sensor with transmitter board ",
                        link:
                            "https://www.citytech.com/en-gb/PDF-Datasheets/t3nt.pdf"
                    },
                    {
                        ordNum: 1,
                        gas: "nitric-oxide",
                        manufacturer: "CITY",
                        type: "3 type",
                        "gas Type ": "NO ",
                        SKU: "TF3H-1A",
                        productName: "T3NT - 0-300ppm ",
                        "life ": "3 years in air ",
                        range: "0-300ppm ",
                        details: "3 Electrode sensor with transmitter board ",
                        link:
                            "https://www.citytech.com/en-gb/PDF-Datasheets/t3nt.pdf"
                    }
                ]
            },
            {
                name: "oxygen",
                chemicalId: "NO",
                devices: [
                    {
                        ordNum: 1,
                        gas: "oxygen",
                        manufacturer: "CITY",
                        type: "CiTiceL® ",
                        "gas Type ": "O2 ",
                        SKU: "AA625-180",
                        productName: "2FO - Standard",
                        "life ": "2 years in air ",
                        range: "0-30% ",
                        details: "Plastic can sensor - Standard",
                        link:
                            "https://www.citytech.com/en-gb/PDF-Datasheets/2fo.pdf"
                    },
                    {
                        ordNum: 1,
                        gas: "oxygen",
                        manufacturer: "CITY",
                        type: "CiTiceL® ",
                        "gas Type ": "O2 ",
                        SKU: "AA625-230",
                        productName: "2FO - 300mm filying leads",
                        "life ": "2 years in air",
                        range: "0-30% ",
                        details: "Plastic can sensor - 300mm filying leads",
                        link:
                            "https://www.citytech.com/en-gb/PDF-Datasheets/2fo.pdf"
                    },
                    {
                        ordNum: 1,
                        gas: "oxygen",
                        manufacturer: "CITY",
                        type: "CiTiceL® ",
                        "gas Type ": "O2 ",
                        SKU: "AA643-180",
                        productName: "2FO-N",
                        "life ": "2 years in air",
                        range: "0-30% ",
                        details: "Plastic can sensor with capillary nose ",
                        link:
                            "https://www.citytech.com/en-gb/\\PDF-Datasheets/2fon.pdf"
                    },
                    {
                        ordNum: 1,
                        gas: "oxygen",
                        manufacturer: "CITY",
                        type: "oxygen Sensor ",
                        "gas Type ": "O2 ",
                        SKU: "AA783-33K",
                        productName: "4OXLL (Emissions) ",
                        "life ": "7 years in air ",
                        range: "0-30% ",
                        details: "Lead free oxygen CiTiceL ",
                        link:
                            "https://www.citytech.com/en-gb/PDF-Datasheets/4oxllemissions.pdf"
                    },
                    {
                        ordNum: 1,
                        gas: "oxygen",
                        manufacturer: "CITY",
                        type: "oxygen Sensor ",
                        "gas Type ": "O2 ",
                        SKU: "AA783-33H",
                        productName: "4OXLL (Industrial Safety) ",
                        "life ": "5 years in air ",
                        range: "0-30% ",
                        details: "Lead free oxygen CiTiceL ",
                        link:
                            "https://www.citytech.com/en-gb/PDF-Datasheets/4oxllindustrialsafety.pdf"
                    },
                    {
                        ordNum: 1,
                        gas: "oxygen",
                        manufacturer: "CITY",
                        type: "CiTiceL® ",
                        "gas Type ": "O2 ",
                        SKU: "AAY80-390",
                        productName: "4OXV ",
                        "life ": "2 years in air ",
                        range: "0-25% ",
                        details: "oxygen (O2) gas Sensor",
                        link:
                            "https://www.citytech.com/en-gb/PDF-Datasheets/4oxv.pdf"
                    },
                    {
                        ordNum: 1,
                        gas: "oxygen",
                        manufacturer: "CITY",
                        type: "5 type",
                        "gas Type ": "O2 ",
                        SKU: "AAA32-400",
                        productName: "5FO ",
                        "life ": "2 years in air",
                        range: "0-30% ",
                        details: "Flue gas sensor ",
                        link:
                            "https://www.citytech.com/en-gb/PDF-Datasheets/5fo.pdf"
                    },
                    {
                        ordNum: 1,
                        gas: "oxygen",
                        manufacturer: "CITY",
                        type: "oxygen Sensor ",
                        "gas Type ": "O2 ",
                        SKU: "AA783-33J",
                        productName: "5OXLL (Emissions) ",
                        "life ": "7 years in air ",
                        range: "0-30% ",
                        details: "Lead free oxygen CiTiceL ",
                        link:
                            "https://www.citytech.com/en-gb/PDF-Datasheets/5oxllemissions.pdf"
                    },
                    {
                        ordNum: 1,
                        gas: "oxygen",
                        manufacturer: "CITY",
                        type: "7 type",
                        "gas Type ": "O2 ",
                        SKU: "AAV66-380",
                        productName: "7OX-V ",
                        "life ": "2 years in air ",
                        range: "0-30% ",
                        details:
                            "Compact sensor - plastic can. For use in extreme environments ",
                        link:
                            "https://www.citytech.com/en-gb/PDF-Datasheets/7oxv.pdf"
                    },
                    {
                        ordNum: 1,
                        gas: "oxygen",
                        manufacturer: "CITY",
                        type: "utoO2® ",
                        "gas Type ": "O2 ",
                        SKU: "AA428-210",
                        productName: "AO2 ",
                        "life ": "2 years in air ",
                        range: "0-100% ",
                        details:
                            "Automotive sensor with molex connector - BAR97/PTB Approved ",
                        link:
                            "https://www.citytech.com/en-gb/PDF-Datasheets/ao2.pdf"
                    },
                    {
                        ordNum: 1,
                        gas: "oxygen",
                        manufacturer: "CITY",
                        type: "AutoO2® ",
                        "gas Type ": "O2 ",
                        SKU: "AA429-210",
                        productName: "AO3 ",
                        "life ": "2 years in air ",
                        range: "0-100% ",
                        details:
                            'Automotive sensor with 0.141" miniature phone jack socket ',
                        link:
                            "https://www.citytech.com/en-gb/PDF-Datasheets/ao3.pdf"
                    },
                    {
                        ordNum: 1,
                        gas: "oxygen",
                        manufacturer: "CITY",
                        type: "CiTiceL® ",
                        "gas Type ": "O2 ",
                        SKU: "AA100-000",
                        productName: "C/2 ",
                        "life ": "18 months in air ",
                        range: "0-30% ",
                        details: "Half size metal can sensor ",
                        link:
                            "https://www.citytech.com/en-gb/PDF-Datasheets/c2.pdf"
                    },
                    {
                        ordNum: 1,
                        gas: "oxygen",
                        manufacturer: "CITY",
                        type: "CiTiceL® ",
                        "gas Type ": "O2 ",
                        SKU: "n.a.",
                        productName: "C/2PN ",
                        "life ": "1 yr in air ",
                        range: "0-30% ",
                        details: "Metal can sensor with capillary nose ",
                        link:
                            "https://www.citytech.com/en-gb/PDF-Datasheets/c2pn.pdf"
                    },
                    {
                        ordNum: 1,
                        gas: "oxygen",
                        manufacturer: "CITY",
                        type: "CiTiceL® ",
                        "gas Type ": "O2 ",
                        SKU: "AA009-000 ",
                        productName: "C/N ",
                        "life ": "9 months in air ",
                        range: "0-30% ",
                        details: "Metal can sensor with capillary nose ",
                        link:
                            "https://www.citytech.com/en-gb/PDF-Datasheets/cn.pdf"
                    },
                    {
                        ordNum: 1,
                        gas: "oxygen",
                        manufacturer: "CITY",
                        type: "CiTiceL® ",
                        "gas Type ": "O2 ",
                        SKU: "AA015-000",
                        productName: "C/NLH ",
                        "life ": "Proportional ",
                        range: "0-1000ppm ",
                        details:
                            "Metal can sensor for trace O2 with low H2 cross sensitivity ",
                        link:
                            "https://www.citytech.com/en-gb/PDF-Datasheets/cnlh.pdf"
                    },
                    {
                        ordNum: 1,
                        gas: "oxygen",
                        manufacturer: "CITY",
                        type: "CiTiceL® ",
                        "gas Type ": "O2 ",
                        SKU: "AA016-000",
                        productName: "C/NLL ",
                        "life ": "Proportional ",
                        range: "0-1000ppm ",
                        details: "Metal can sensor for trace O2 - high output ",
                        link:
                            "https://www.citytech.com/en-gb/PDF-Datasheets/cnll.pdf"
                    },
                    {
                        ordNum: 1,
                        gas: "oxygen",
                        manufacturer: "CITY",
                        type: "Metal Can ",
                        "gas Type ": "O2 ",
                        SKU: "AA016-002",
                        productName: "C/NLL ET ",
                        "life ": "See Datasheet ",
                        range: "0-2ppm ",
                        details: "C/NLL ET ",
                        link:
                            "https://www.citytech.com/en-gb/PDF-Datasheets/cnllet.pdf"
                    },
                    {
                        ordNum: 1,
                        gas: "oxygen",
                        manufacturer: "CITY",
                        type: "CiTiceL® ",
                        "gas Type ": "O2 ",
                        SKU: "n.a.",
                        productName: "C/S ",
                        "life ": "9 months in air ",
                        range: "0-30% ",
                        details: "Metal can sensor ",
                        link:
                            "https://www.citytech.com/en-gb/PDF-Datasheets/cs.pdf"
                    },
                    {
                        ordNum: 1,
                        gas: "oxygen",
                        manufacturer: "CITY",
                        type: "CiTiceL® ",
                        "gas Type ": "O2 ",
                        SKU: "AA004-000 ",
                        productName: "C/Y ",
                        "life ": "1 year in air ",
                        range: "0-30% ",
                        details: "General purpose metal can sensor ",
                        link:
                            "https://www.citytech.com/en-gb/PDF-Datasheets/cy.pdf"
                    },
                    {
                        ordNum: 1,
                        gas: "oxygen",
                        manufacturer: "CITY",
                        type: "MediceL® ",
                        "gas Type ": "O2 ",
                        SKU: "AAF43-210",
                        productName: "Divecel 3 ",
                        "life ": "2 years in air ",
                        range: "0-100% ",
                        details:
                            "Standard output semsor, Molex connector, M16 thread ",
                        link:
                            "https://www.citytech.com/en-gb/PDF-Datasheets/divecel3.pdf"
                    },
                    {
                        ordNum: 1,
                        gas: "oxygen",
                        manufacturer: "CITY",
                        type: "MediceL® ",
                        "gas Type ": "O2 ",
                        SKU: "AA437-210",
                        productName: "DO2 ",
                        "life ": "2 years in air ",
                        range: "0-100% ",
                        details:
                            "Double output sensor, Molex connector, M16 thread ",
                        link:
                            "https://www.citytech.com/en-gb/PDF-Datasheets/do2.pdf"
                    },
                    {
                        ordNum: 1,
                        gas: "oxygen",
                        manufacturer: "CITY",
                        type: "MediceL® ",
                        "gas Type ": "O2 ",
                        SKU: "AA844-210",
                        productName: "In-Q-OX ",
                        "life ": "2 years in 50% O2 ",
                        range: "0-100% ",
                        details:
                            "Neonatal incubator sensor, Molex connector, M16 thread ",
                        link:
                            "https://www.citytech.com/en-gb/PDF-Datasheets/inqox.pdf"
                    },
                    {
                        ordNum: 1,
                        gas: "oxygen",
                        manufacturer: "CITY",
                        type: "MediceL® ",
                        "gas Type ": "O2 ",
                        SKU: "AA829-210",
                        productName: "MOX-1 ",
                        "life ": "20 Months in 100% O2 ",
                        range: "0-100% ",
                        details: "Sensor with Molex connector, M16 thread ",
                        link:
                            "https://www.citytech.com/en-gb/PDF-Datasheets/mox1.pdf"
                    },
                    {
                        ordNum: 1,
                        gas: "oxygen",
                        manufacturer: "CITY",
                        type: "MediceL® ",
                        "gas Type ": "O2 ",
                        SKU: "AA829-220",
                        productName: "MOX-2 ",
                        "life ": "20 Months in 100% O2 ",
                        range: "0-100% ",
                        details:
                            "Sensor with jack socket connector, M16 thread ",
                        link:
                            "https://www.citytech.com/en-gb/PDF-Datasheets/mox2.pdf"
                    },
                    {
                        ordNum: 1,
                        gas: "oxygen",
                        manufacturer: "CITY",
                        type: "MediceL® ",
                        "gas Type ": "O2 ",
                        SKU: "AAE29-210",
                        productName: "MOX-20 ",
                        "life ": "2 years in air ",
                        range: "0-100% ",
                        details:
                            "Fast response sensor, Molex connector, M16 thread ",
                        link:
                            "https://www.citytech.com/en-gb/PDF-Datasheets/mox20.pdf"
                    },
                    {
                        ordNum: 1,
                        gas: "oxygen",
                        manufacturer: "CITY",
                        type: "MediceL® ",
                        "gas Type ": "O2 ",
                        SKU: "AA829-M10",
                        productName: "MOX-3 ",
                        "life ": "20 Months in 100% O2 ",
                        range: "0-100% ",
                        details: "Sensor with UK telephone socket, M16 thread ",
                        link:
                            "https://www.citytech.com/en-gb/PDF-Datasheets/mox3.pdf"
                    },
                    {
                        ordNum: 1,
                        gas: "oxygen",
                        manufacturer: "CITY",
                        type: "MediceL® ",
                        "gas Type ": "O2 ",
                        SKU: "AA829-M20",
                        productName: "MOX-4 ",
                        "life ": "20 Months in 100% O2 ",
                        range: "0-100% ",
                        details: "Teledyne T-7 compatible sensor ",
                        link:
                            "https://www.citytech.com/en-gb/PDF-Datasheets/mox4.pdf"
                    },
                    {
                        ordNum: 1,
                        gas: "oxygen",
                        manufacturer: "CITY",
                        type: "MediceL® ",
                        "gas Type ": "O2 ",
                        SKU: "AA929-M40",
                        productName: "MOX-6 ",
                        "life ": "14 Months in 100% 2 ",
                        range: "0-100% ",
                        details:
                            "Single cathode Draeger compatible sensor, slip rings ",
                        link:
                            "https://www.citytech.com/en-gb/PDF-Datasheets/mox6.pdf"
                    },
                    {
                        ordNum: 1,
                        gas: "oxygen",
                        manufacturer: "CITY",
                        type: "MediceL® ",
                        "gas Type ": "O2 ",
                        SKU: "AAD29-210",
                        productName: "MOX-9 ",
                        "life ": "14 Months in 100% O2 ",
                        range: "0-100% ",
                        details:
                            "Sensor with Molex Connector, M16 Thread, Siemens compatible ",
                        link:
                            "https://www.citytech.com/en-gb/PDF-Datasheets/mox9.pdf"
                    },
                    {
                        ordNum: 1,
                        gas: "oxygen",
                        manufacturer: "CITY",
                        type: "7 type",
                        "gas Type ": "O2 ",
                        SKU: "TA2R-1A",
                        productName: "T7OX-V ",
                        "life ": "2 years in air ",
                        range: "0-25% ",
                        details:
                            "Compact sensor - plastic can with transmitter board ",
                        link:
                            "https://www.citytech.com/en-gb/PDF-Datasheets/t7oxv.pdf"
                    },
                    {
                        ordNum: 1,
                        gas: "oxygen ",
                        manufacturer: "CITY",
                        type: "1 type",
                        "gas Type ": "O2 ",
                        SKU: "2023B1000",
                        productName: "1OX ",
                        "life ": "5 years in air ",
                        range: "0-30% ",
                        details: "Lead free oxygen CiTiceL ",
                        link:
                            "https://www.citytech.com/en-gb/PDF-Datasheets/1ox.pdf"
                    }
                ]
            },
            {
                name: "ozone",
                chemicalId: "O3",
                devices: [
                    {
                        ordNum: 1,
                        gas: "ozone",
                        manufacturer: "CITY",
                        type: "3 type",
                        "gas Type ": "O3 ",
                        SKU: "AS004-J00",
                        productName: "3OZ ",
                        "life ": "2 years in air ",
                        range: "0-5ppm ",
                        details: "3 Electrode sensor ",
                        link:
                            "https://www.citytech.com/en-gb/PDF-Datasheets/3oz.pdf"
                    },
                    {
                        ordNum: 1,
                        gas: "ozone",
                        manufacturer: "CITY",
                        type: "7 type",
                        "gas Type ": "O3 ",
                        SKU: "AS704-400",
                        productName: "7OZ ",
                        "life ": "2 years in air ",
                        range: "0-5ppm ",
                        details: "3 Electrode compact sensor ",
                        link:
                            "https://www.citytech.com/en-gb/PDF-Datasheets/7oz.pdf"
                    },
                    {
                        ordNum: 1,
                        gas: "ozone",
                        manufacturer: "CITY",
                        type: "3 type",
                        "gas Type ": "O3 ",
                        SKU: "AS044-H00",
                        productName: "A3OZ ",
                        "life ": "2 years in air ",
                        range: "0-100ppm ",
                        details: "4 Electrode environmental monitoring sensor ",
                        link:
                            "https://www.citytech.com/en-gb/PDF-Datasheets/a3oz.pdf"
                    },
                    {
                        ordNum: 1,
                        gas: "ozone",
                        manufacturer: "CITY",
                        type: "sensoric",
                        "gas Type ": "O3 ",
                        SKU: "1531-031-30009",
                        productName: "O3 3E 1 - Mini",
                        "life ": ">18 months ",
                        range: "0-1ppm ",
                        details:
                            "3 Electrode sensor with organic electrolyte; Mini Format",
                        link:
                            "https://www.citytech.com/en-gb/PDF-Datasheets/o33e1.pdf"
                    },
                    {
                        ordNum: 1,
                        gas: "ozone",
                        manufacturer: "CITY",
                        type: "sensoric",
                        "gas Type ": "O3 ",
                        SKU: "1531-031-30069",
                        productName: "O3 3E 1 - Classic",
                        "life ": ">18 months ",
                        range: "0-1ppm ",
                        details:
                            "3 Electrode sensor with organic electrolyte; Classic Format.",
                        link:
                            "https://www.citytech.com/en-gb/PDF-Datasheets/o33e1.pdf"
                    },
                    {
                        ordNum: 1,
                        gas: "ozone",
                        manufacturer: "CITY",
                        type: "sensoric",
                        "gas Type ": "O3 ",
                        SKU: "1531-031-30069",
                        productName: "O3 3E 1 - 4-Series",
                        "life ": ">18 months ",
                        range: "0-1ppm ",
                        details:
                            "3 Electrode sensor with organic electrolyte; 4-Series Format. ",
                        link:
                            "https://www.citytech.com/en-gb/PDF-Datasheets/o33e1.pdf"
                    },
                    {
                        ordNum: 1,
                        gas: "ozone",
                        manufacturer: "CITY",
                        type: "sensoric",
                        "gas Type ": "O3 ",
                        SKU: "1531-031-30079",
                        productName: "O3 3E 1 - 7-Series",
                        "life ": ">18 months ",
                        range: "0-1ppm ",
                        details:
                            "3 Electrode sensor with organic electrolyte; 7-Series Format. ",
                        link:
                            "https://www.citytech.com/en-gb/PDF-Datasheets/o33e1.pdf"
                    },
                    {
                        ordNum: 1,
                        gas: "ozone",
                        manufacturer: "CITY",
                        type: "sensoric",
                        "gas Type ": "O3 ",
                        SKU: "1531-231-30009",
                        productName: "O3 3E 1 F - Mini",
                        "life ": ">18 months ",
                        range: "0-1ppm ",
                        details:
                            "3 Electrode sensor with organic electrolyte; Mini Format",
                        link:
                            "https://www.citytech.com/en-gb/PDF-Datasheets/o33e1f.pdf"
                    },
                    {
                        ordNum: 1,
                        gas: "ozone",
                        manufacturer: "CITY",
                        type: "sensoric",
                        "gas Type ": "O3 ",
                        SKU: "1531-231-30069",
                        productName: "O3 3E 1 F - Classic",
                        "life ": ">18 months ",
                        range: "0-1ppm ",
                        details:
                            "3 Electrode sensor with organic electrolyte; Classic Format.",
                        link:
                            "https://www.citytech.com/en-gb/PDF-Datasheets/o33e1f.pdf"
                    },
                    {
                        ordNum: 1,
                        gas: "ozone",
                        manufacturer: "CITY",
                        type: "sensoric",
                        "gas Type ": "O3 ",
                        SKU: "1531-231-30049",
                        productName: "O3 3E 1 F - 4-Series",
                        "life ": ">18 months ",
                        range: "0-1ppm ",
                        details:
                            "3 Electrode sensor with organic electrolyte; 4-Series Format. ",
                        link:
                            "https://www.citytech.com/en-gb/PDF-Datasheets/o33e1f.pdf"
                    },
                    {
                        ordNum: 1,
                        gas: "ozone",
                        manufacturer: "CITY",
                        type: "sensoric",
                        "gas Type ": "O3 ",
                        SKU: "1531-231-30079",
                        productName: "O3 3E 1 F - 7-Series",
                        "life ": ">18 months ",
                        range: "0-1ppm ",
                        details:
                            "3 Electrode sensor with organic electrolyte; 7-Series Format. ",
                        link:
                            "https://www.citytech.com/en-gb/PDF-Datasheets/o33e1f.pdf"
                    }
                ]
            },
            {
                name: "phosgene",
                chemicalId: "COCl2",
                devices: [
                    {
                        ordNum: 1,
                        gas: "phosgene",
                        manufacturer: "CITY",
                        type: "sensoric",
                        "gas Type ": "COCl2 - Classic",
                        SKU: "1731-031-11069",
                        productName: "COCl2 3E 1  ",
                        "life ": ">1 year ",
                        range: "0-1ppm ",
                        details:
                            "3 Electrode sensor with organic electrolyte; Classic Format.",
                        link:
                            "https://www.citytech.com/en-gb/PDF-Datasheets/cocl23e1.pdf"
                    },
                    {
                        ordNum: 1,
                        gas: "phosgene",
                        manufacturer: "CITY",
                        type: "sensoric",
                        "gas Type ": "COCl2",
                        SKU: "1731-031-14049",
                        productName: "COCl2 3E 1  - 4-Series",
                        "life ": ">1 year ",
                        range: "0-1ppm ",
                        details:
                            "3 Electrode sensor with organic electrolyte; 4-Series Format. ",
                        link:
                            "https://www.citytech.com/en-gb/PDF-Datasheets/cocl23e1.pdf"
                    },
                    {
                        ordNum: 1,
                        gas: "phosgene",
                        manufacturer: "CITY",
                        type: "sensoric",
                        "gas Type ": "COCl2 ",
                        SKU: "1731-031-17079",
                        productName: "COCl2 3E 1 - 7-Series",
                        "life ": ">1 year ",
                        range: "0-1ppm ",
                        details:
                            "3 Electrode sensor with organic electrolyte; 7-Series Format. ",
                        link:
                            "https://www.citytech.com/en-gb/PDF-Datasheets/cocl23e1.pdf"
                    },
                    {
                        ordNum: 1,
                        gas: "phosgene",
                        manufacturer: "CITY",
                        type: "4 type",
                        "gas Type ": "PH3 ",
                        SKU: " AP210-800",
                        productName: "4PH-Fast ",
                        "life ": "2 years in air ",
                        range: "0-20ppm ",
                        details:
                            "3 Electrode minature sensor for phosgene with improved response time ",
                        link:
                            "https://www.citytech.com/en-gb/PDF-Datasheets/4phfast.pdf"
                    },
                    {
                        ordNum: 1,
                        gas: "phosgene",
                        manufacturer: "CITY",
                        type: "sensoric",
                        "gas Type ": "PH3 ",
                        SKU: "0635-237-30009",
                        productName: "PH3 3E 5 F LT - Mini",
                        "life ": "2 years ",
                        range: "0-5ppm ",
                        details:
                            "3 Electrode sensor with ionic liquid electrolyte and 200ppm hour H2S filter; Mini Format. ",
                        link:
                            "https://www.citytech.com/en-gb/PDF-Datasheets/ph33e5flt.pdf"
                    },
                    {
                        ordNum: 1,
                        gas: "phosgene",
                        manufacturer: "CITY",
                        type: "sensoric",
                        "gas Type ": "PH3 ",
                        SKU: "0635-237-30069",
                        productName: "PH3 3E 5 F LT - Classic",
                        "life ": "2 years ",
                        range: "0-5ppm ",
                        details:
                            "3 Electrode sensor with ionic liquid electrolyte and 200ppm hour H2S filter; Classic Format. ",
                        link:
                            "https://www.citytech.com/en-gb/PDF-Datasheets/ph33e5flt.pdf"
                    },
                    {
                        ordNum: 1,
                        gas: "phosgene",
                        manufacturer: "CITY",
                        type: "sensoric",
                        "gas Type ": "PH3 ",
                        SKU: "0635-237-30049",
                        productName: "PH3 3E 5 F LT - 4-Series",
                        "life ": "2 years ",
                        range: "0-5ppm ",
                        details:
                            "3 Electrode sensor with ionic liquid electrolyte and 200ppm hour H2S filter; 4-Series Format. ",
                        link:
                            "https://www.citytech.com/en-gb/PDF-Datasheets/ph33e5flt.pdf"
                    },
                    {
                        ordNum: 1,
                        gas: "phosgene",
                        manufacturer: "CITY",
                        type: "sensoric",
                        "gas Type ": "PH3 ",
                        SKU: "0635-237-30079",
                        productName: "PH3 3E 5 F LT - 7-Series",
                        "life ": "2 years ",
                        range: "0-5ppm ",
                        details:
                            "3 Electrode sensor with ionic liquid electrolyte and 200ppm hour H2S filter; 7-Series Format. ",
                        link:
                            "https://www.citytech.com/en-gb/PDF-Datasheets/ph33e5flt.pdf"
                    },
                    {
                        ordNum: 1,
                        gas: "phosgene",
                        manufacturer: "CITY",
                        type: "sensoric",
                        "gas Type ": "PH3 ",
                        SKU: "0635-237-30259",
                        productName: "PH3 3E 5 F LT - Smart",
                        "life ": "2 years ",
                        range: "0-5ppm ",
                        details:
                            "3 Electrode sensor with ionic liquid electrolyte and 200ppm hour H2S filter; Smart Format. ",
                        link:
                            "https://www.citytech.com/en-gb/PDF-Datasheets/ph33e5flt.pdf"
                    },
                    {
                        ordNum: 1,
                        gas: "phosgene",
                        manufacturer: "CITY",
                        type: "sensoric",
                        "gas Type ": "PH3 ",
                        SKU: "0635-237-30659",
                        productName: "PH3 3E 5 F LT - Transmitter",
                        "life ": "2 years ",
                        range: "0-5ppm ",
                        details:
                            "3 Electrode sensor with ionic liquid electrolyte and 200ppm hour H2S filter; Transmitter. ",
                        link:
                            "https://www.citytech.com/en-gb/PDF-Datasheets/ph33e5flt.pdf"
                    },
                    {
                        ordNum: 1,
                        gas: "phosgene",
                        manufacturer: "CITY",
                        type: "sensoric",
                        "gas Type ": "PH3 ",
                        SKU: "0635-337-30009",
                        productName: "PH3 3E 5 LT - Mini",
                        "life ": "2 years ",
                        range: "0-5ppm ",
                        details:
                            "3 Electrode sensor with ionic liquid electrolyte and 200ppm hour H2S filter; Mini Format. ",
                        link:
                            "https://www.citytech.com/en-gb/PDF-Datasheets/ph33e5lt.pdf"
                    },
                    {
                        ordNum: 1,
                        gas: "phosgene",
                        manufacturer: "CITY",
                        type: "sensoric",
                        "gas Type ": "PH3 ",
                        SKU: "0635-337-30069",
                        productName: "PH3 3E 5 LT - Classic",
                        "life ": "2 years ",
                        range: "0-5ppm ",
                        details:
                            "3 Electrode sensor with ionic liquid electrolyte and 200ppm hour H2S filter; Classic Format. ",
                        link:
                            "https://www.citytech.com/en-gb/PDF-Datasheets/ph33e5lt.pdf"
                    },
                    {
                        ordNum: 1,
                        gas: "phosgene",
                        manufacturer: "CITY",
                        type: "sensoric",
                        "gas Type ": "PH3 ",
                        SKU: "0635-337-30049",
                        productName: "PH3 3E 5 LT - 4-Series",
                        "life ": "2 years ",
                        range: "0-5ppm ",
                        details:
                            "3 Electrode sensor with ionic liquid electrolyte and 200ppm hour H2S filter; 4-Series Format. ",
                        link:
                            "https://www.citytech.com/en-gb/PDF-Datasheets/ph33e5lt.pdf"
                    },
                    {
                        ordNum: 1,
                        gas: "phosgene",
                        manufacturer: "CITY",
                        type: "sensoric",
                        "gas Type ": "PH3 ",
                        SKU: "0635-337-30079",
                        productName: "PH3 3E 5 LT - 7-Series",
                        "life ": "2 years ",
                        range: "0-5ppm ",
                        details:
                            "3 Electrode sensor with ionic liquid electrolyte and 200ppm hour H2S filter; 7-Series Format. ",
                        link:
                            "https://www.citytech.com/en-gb/PDF-Datasheets/ph33e5lt.pdf"
                    },
                    {
                        ordNum: 1,
                        gas: "phosgene",
                        manufacturer: "CITY",
                        type: "sensoric",
                        "gas Type ": "PH3 ",
                        SKU: "0635-337-30259",
                        productName: "PH3 3E 5 LT - Smart",
                        "life ": "2 years ",
                        range: "0-5ppm ",
                        details:
                            "3 Electrode sensor with ionic liquid electrolyte and 200ppm hour H2S filter; Smart Format. ",
                        link:
                            "https://www.citytech.com/en-gb/PDF-Datasheets/ph33e5lt.pdf"
                    },
                    {
                        ordNum: 1,
                        gas: "phosgene",
                        manufacturer: "CITY",
                        type: "sensoric",
                        "gas Type ": "PH3 ",
                        SKU: "0635-337-30659",
                        productName: "PH3 3E 5 LT - Transmitter",
                        "life ": "2 years ",
                        range: "0-5ppm ",
                        details:
                            "3 Electrode sensor with ionic liquid electrolyte and 200ppm hour H2S filter; Transmitter. ",
                        link:
                            "https://www.citytech.com/en-gb/PDF-Datasheets/ph33e5lt.pdf"
                    }
                ]
            },
            {
                name: "silane",
                chemicalId: "SiH4 ",
                devices: [
                    {
                        ordNum: 1,
                        gas: "silane",
                        manufacturer: "CITY",
                        type: "sensoric",
                        "gas Type ": "SiH4 ",
                        SKU: "0941-337-30009",
                        productName: "SiH4 3E 50 LT - Mini",
                        "life ": "2 years ",
                        range: "0-50ppm ",
                        details:
                            "3 Electrode sensor with ionic liquid electrolyte and 200ppm hour H2S filter; Mini Format. ",
                        link:
                            "https://www.citytech.com/en-gb/PDF-Datasheets/sih43e50lt.pdf"
                    },
                    {
                        ordNum: 1,
                        gas: "silane",
                        manufacturer: "CITY",
                        type: "Sensoric ",
                        "gas Type ": "SiH4 ",
                        SKU: "0941-337-30079",
                        productName: "SiH4 3E 50 LT - Classic",
                        "life ": "2 years ",
                        range: "0-50ppm ",
                        details:
                            "3 Electrode sensor with ionic liquid electrolyte and 200ppm hour H2S filter; Classic Format. ",
                        link:
                            "https://www.citytech.com/en-gb/PDF-Datasheets/sih43e50lt.pdf"
                    },
                    {
                        ordNum: 1,
                        gas: "silane",
                        manufacturer: "CITY",
                        type: "sensoric",
                        "gas Type ": "SiH4 ",
                        SKU: "0941-337-30049",
                        productName: "SiH4 3E 50 LT - 4-Series",
                        "life ": "2 years ",
                        range: "0-50ppm ",
                        details:
                            "3 Electrode sensor with ionic liquid electrolyte and 200ppm hour H2S filter; 4-Series Format. ",
                        link:
                            "https://www.citytech.com/en-gb/PDF-Datasheets/sih43e50lt.pdf"
                    },
                    {
                        ordNum: 1,
                        gas: "silane",
                        manufacturer: "CITY",
                        type: "sensoric",
                        "gas Type ": "SiH4 ",
                        SKU: "0941-337-30079",
                        productName: "SiH4 3E 50 LT - 7-Series",
                        "life ": "2 years ",
                        range: "0-50ppm ",
                        details:
                            "3 Electrode sensor with ionic liquid electrolyte and 200ppm hour H2S filter; 7-Series Format. ",
                        link:
                            "https://www.citytech.com/en-gb/PDF-Datasheets/sih43e50lt.pdf"
                    },
                    {
                        ordNum: 1,
                        gas: "silane",
                        manufacturer: "CITY",
                        type: "sensoric",
                        "gas Type ": "SiH4 ",
                        SKU: "0941-337-30259",
                        productName: "SiH4 3E 50 LT - Smart",
                        "life ": "2 years ",
                        range: "0-50ppm ",
                        details:
                            "3 Electrode sensor with ionic liquid electrolyte and 200ppm hour H2S filter; Smart Format. ",
                        link:
                            "https://www.citytech.com/en-gb/PDF-Datasheets/sih43e50lt.pdf"
                    },
                    {
                        ordNum: 1,
                        gas: "silane",
                        manufacturer: "CITY",
                        type: "sensoric",
                        "gas Type ": "SiH4 ",
                        SKU: "0941-337-30659",
                        productName: "SiH4 3E 50 LT - Transmitter",
                        "life ": "2 years ",
                        range: "0-50ppm ",
                        details:
                            "3 Electrode sensor with ionic liquid electrolyte and 200ppm hour H2S filter; Transmitter. ",
                        link:
                            "https://www.citytech.com/en-gb/PDF-Datasheets/sih43e50lt.pdf"
                    }
                ]
            },
            {
                name: "sulphur-dioxide",
                chemicalId: "SO2",
                devices: [
                    {
                        ordNum: 1,
                        gas: "sulphur-dioxide",
                        manufacturer: "CITY",
                        type: "3 type",
                        "gas Type ": "SO2",
                        SKU: "TD9A-1A",
                        productName: "T3SH - 0-5 ppm",
                        "life ": "2 years in air ",
                        range: "0-5 ppm ",
                        details:
                            "3 electrode sensor with standard 4-20mA board ",
                        link:
                            "https://www.citytech.com/en-gb/PDF-Datasheets/t3sh.pdf"
                    },
                    {
                        ordNum: 1,
                        gas: "sulphur-dioxide",
                        manufacturer: "CITY",
                        type: "3 type",
                        "gas Type ": "SO2",
                        SKU: "TD9B-1A",
                        productName: "T3SH - 0-10 ppm",
                        "life ": "2 years in air ",
                        range: "0-10 ppm ",
                        details:
                            "3 electrode sensor with standard 4-20mA board ",
                        link:
                            "https://www.citytech.com/en-gb/PDF-Datasheets/t3sh.pdf"
                    },
                    {
                        ordNum: 1,
                        gas: "sulphur-dioxide",
                        manufacturer: "CITY",
                        type: "3 type",
                        "gas Type ": "SO2",
                        SKU: "TD9C-1A",
                        productName: "T3SH - 0-20 ppm",
                        "life ": "2 years in air ",
                        range: "0-20 ppm ",
                        details:
                            "3 electrode sensor with standard 4-20mA board ",
                        link:
                            "https://www.citytech.com/en-gb/PDF-Datasheets/t3sh.pdf"
                    },
                    {
                        ordNum: 1,
                        gas: "sulphur-dioxide",
                        manufacturer: "CITY",
                        type: "3 type",
                        "gas Type ": "SO2",
                        SKU: "TD9D-1A",
                        productName: "T3SH - 0-30 ppm",
                        "life ": "2 years in air ",
                        range: "0-30 ppm ",
                        details:
                            "3 electrode sensor with standard 4-20mA board ",
                        link:
                            "https://www.citytech.com/en-gb/PDF-Datasheets/t3sh.pdf"
                    },
                    {
                        ordNum: 1,
                        gas: "sulphur-dioxide",
                        manufacturer: "CITY",
                        type: "3 type",
                        "gas Type ": "SO2",
                        SKU: "TD9F-1A",
                        productName: "T3SH - 0-100 ppm",
                        "life ": "2 years in air ",
                        range: "0-100 ppm ",
                        details:
                            "3 electrode sensor with standard 4-20mA board ",
                        link:
                            "https://www.citytech.com/en-gb/PDF-Datasheets/t3sh.pdf"
                    },
                    {
                        ordNum: 1,
                        gas: "sulphur-dioxide",
                        manufacturer: "CITY",
                        type: "CiTiceL® ",
                        "gas Type ": "SO2",
                        SKU: "MDT60-014",
                        productName: "3MST/F - 1 mV/ppm",
                        "life ": "2 years in air",
                        range: "0-200ppm ",
                        details:
                            "Range: Options for 200ppm and 500ppm - 1 mV/ppm",
                        link:
                            "https://www.citytech.com/en-gb/PDF-Datasheets/3mstf.pdf"
                    },
                    {
                        ordNum: 1,
                        gas: "sulphur-dioxide",
                        manufacturer: "CITY",
                        type: "CiTiceL® ",
                        "gas Type ": "SO2",
                        SKU: "MDT60-024",
                        productName: "3MST/F - 10 mV/ppm",
                        "life ": "2 years in air ",
                        range: "0-200ppm",
                        details:
                            "Range: Options for 200ppm and 500ppm - 10 mV/ppm",
                        link:
                            "https://www.citytech.com/en-gb/PDF-Datasheets/3mstf.pdf"
                    },
                    {
                        ordNum: 1,
                        gas: "sulphur-dioxide",
                        manufacturer: "CITY",
                        type: "3 type",
                        "gas Type ": "SO2",
                        SKU: "AD002-J00",
                        productName: "3SH",
                        "life ": "2 years in air ",
                        range: "0-100ppm",
                        details:
                            "3 Electrode sensor - With side tag and PCB pin connections",
                        link:
                            "https://www.citytech.com/en-gb/PDF-Datasheets/3sh.pdf"
                    },
                    {
                        ordNum: 1,
                        gas: "sulphur-dioxide",
                        manufacturer: "CITY",
                        type: "3 type",
                        "gas Type ": "SO2",
                        SKU: "AD002-000",
                        productName: "3SH(S)",
                        "life ": "2 years in air ",
                        range: "0-100ppm ",
                        details:
                            "3 Electrode sensor - With side tag connection",
                        link:
                            "https://www.citytech.com/en-gb/PDF-Datasheets/3sh.pdf"
                    },
                    {
                        ordNum: 1,
                        gas: "sulphur-dioxide",
                        manufacturer: "CITY",
                        type: "3 type",
                        "gas Type ": "SO2",
                        SKU: "AD002-300",
                        productName: "3SH(G)",
                        "life ": "2 years in air ",
                        range: "0-100ppm ",
                        details:
                            "3 Electrode sensor - With gold-plated PCB pin connection",
                        link:
                            "https://www.citytech.com/en-gb/PDF-Datasheets/3sh.pdf"
                    },
                    {
                        ordNum: 1,
                        gas: "sulphur-dioxide",
                        manufacturer: "CITY",
                        type: "3 type",
                        "gas Type ": "SO2",
                        SKU: "AD004-J04",
                        productName: "3ST/F ",
                        "life ": "2 years in air ",
                        range: "0-500ppm ",
                        details:
                            "3 Electrode sensor with SO2 filter - With side tag and PCB pin connections",
                        link:
                            "https://www.citytech.com/en-gb/PDF-Datasheets/3stf.pdf"
                    },
                    {
                        ordNum: 1,
                        gas: "sulphur-dioxide",
                        manufacturer: "CITY",
                        type: "3 type",
                        "gas Type ": "SO2",
                        SKU: "AD004-004",
                        productName: "3ST/F(S)",
                        "life ": "2 years in air ",
                        range: "0-500ppm ",
                        details:
                            "3 Electrode sensor with SO2 filter - With side tag connection",
                        link:
                            "https://www.citytech.com/en-gb/PDF-Datasheets/3stf.pdf"
                    },
                    {
                        ordNum: 1,
                        gas: "sulphur-dioxide",
                        manufacturer: "CITY",
                        type: "3 type",
                        "gas Type ": "SO2",
                        SKU: "AD004-304",
                        productName: "3ST/F(G)",
                        "life ": "2 years in air ",
                        range: "0-500ppm ",
                        details:
                            "3 Electrode sensor with SO2 filter - With gold plated PCB pin connection",
                        link:
                            "https://www.citytech.com/en-gb/PDF-Datasheets/3stf.pdf"
                    },
                    {
                        ordNum: 1,
                        gas: "sulphur-dioxide",
                        manufacturer: "CITY",
                        type: "4 type",
                        "gas Type ": "SO2",
                        SKU: "2112B2015R",
                        productName: "4S Rev. 2 ",
                        "life ": "2 year in air ",
                        range: "0-150ppm ",
                        details:
                            "NEW 3 Electrode miniature sensor with H2S filter ",
                        link:
                            "https://www.citytech.com/en-gb/PDF-Datasheets/4srev.2.pdf"
                    },
                    {
                        ordNum: 1,
                        gas: "sulphur-dioxide",
                        manufacturer: "CITY",
                        type: "7 type",
                        "gas Type ": "SO2",
                        SKU: "AD702-400",
                        productName: "7SH ",
                        "life ": "2 years in air ",
                        range: "0-100ppm ",
                        details: "3 Electrode compact sensor ",
                        link:
                            "https://www.citytech.com/en-gb/PDF-Datasheets/7sh.pdf"
                    },
                    {
                        ordNum: 1,
                        gas: "sulphur-dioxide",
                        manufacturer: "CITY",
                        type: "7 type",
                        "gas Type ": "SO2",
                        SKU: "AD704-404",
                        productName: "7ST/F ",
                        "life ": "2 years in air ",
                        range: "0-500ppm ",
                        details: "3 Electrode compact sensor with H2S filter ",
                        link:
                            "https://www.citytech.com/en-gb/PDF-Datasheets/7stf.pdf"
                    },
                    {
                        ordNum: 1,
                        gas: "sulphur-dioxide",
                        manufacturer: "CITY",
                        type: "3 type",
                        "gas Type ": "SO2",
                        SKU: "TD3G-1A",
                        productName: "T3S/F - 0-200 ppm ",
                        "life ": "2 years in air ",
                        range: "0-200 ppm ",
                        details:
                            "3 electrode sensor with standard 4-20mA board ",
                        link:
                            "http://www.citytech.com/en-gb/PDF-Datasheets/t3sf.pdf"
                    },
                    {
                        ordNum: 1,
                        gas: "sulphur-dioxide",
                        manufacturer: "CITY",
                        type: "3 type",
                        "gas Type ": "SO2",
                        SKU: "TD3H-1A",
                        productName: "T3S/F - 0-300 ppm",
                        "life ": "2 years in air ",
                        range: "0-300 ppm",
                        details:
                            "3 electrode sensor with standard 4-20mA board ",
                        link:
                            "http://www.citytech.com/en-gb/PDF-Datasheets/t3sf.pdf"
                    },
                    {
                        ordNum: 1,
                        gas: "sulphur-dioxide",
                        manufacturer: "CITY",
                        type: "3 type",
                        "gas Type ": "SO2",
                        SKU: "TD3I-1A",
                        productName: "T3S/F - 0-500 ppm",
                        "life ": "2 years in air ",
                        range: "0-500 ppm",
                        details:
                            "3 electrode sensor with standard 4-20mA board ",
                        link:
                            "http://www.citytech.com/en-gb/PDF-Datasheets/t3sf.pdf"
                    },
                    {
                        ordNum: 1,
                        gas: "sulphur-dioxide",
                        manufacturer: "CITY",
                        type: "3 type",
                        "gas Type ": "SO2",
                        SKU: "TD3J-1A",
                        productName: "T3S/F - 0-1000 ppm",
                        "life ": "2 years in air ",
                        range: "0-1000 ppm",
                        details:
                            "3 electrode sensor with standard 4-20mA board ",
                        link:
                            "http://www.citytech.com/en-gb/PDF-Datasheets/t3sf.pdf"
                    },
                    {
                        ordNum: 1,
                        gas: "sulphur-dioxide",
                        manufacturer: "CITY",
                        type: "3 type",
                        "gas Type ": "SO2",
                        SKU: "TD3K-1A",
                        productName: "T3S/F - 0-2000 ppm",
                        "life ": "2 years in air ",
                        range: "0-2000 ppm",
                        details:
                            "3 electrode sensor with standard 4-20mA board ",
                        link:
                            "http://www.citytech.com/en-gb/PDF-Datasheets/t3sf.pdf"
                    },
                    {
                        ordNum: 1,
                        gas: "sulphur-dioxide",
                        manufacturer: "CITY",
                        type: "3 type",
                        "gas Type ": "SO2",
                        SKU: "TD2B-1A",
                        productName: "T3ST/F - 0-10 ppm",
                        "life ": "2 years in air ",
                        range: "0-10 ppm",
                        details:
                            "3 electrode sensor with standard 4-20mA board ",
                        link:
                            "http://www.citytech.com/en-gb/PDF-Datasheets/t3stf.pdf"
                    },
                    {
                        ordNum: 1,
                        gas: "sulphur-dioxide",
                        manufacturer: "CITY",
                        type: "3 type",
                        "gas Type ": "SO2",
                        SKU: "TD2C-1A",
                        productName: "T3ST/F - 0-20 ppm",
                        "life ": "2 years in air",
                        range: "0-20 ppm",
                        details:
                            "3 electrode sensor with standard 4-20mA board ",
                        link:
                            "http://www.citytech.com/en-gb/PDF-Datasheets/t3stf.pdf"
                    },
                    {
                        ordNum: 1,
                        gas: "sulphur-dioxide",
                        manufacturer: "CITY",
                        type: "3 type",
                        "gas Type ": "SO2",
                        SKU: "TD2D-1A",
                        productName: "T3ST/F - 0-30 ppm",
                        "life ": "2 years in air",
                        range: "0-30 ppm",
                        details:
                            "3 electrode sensor with standard 4-20mA board ",
                        link:
                            "http://www.citytech.com/en-gb/PDF-Datasheets/t3stf.pdf"
                    },
                    {
                        ordNum: 1,
                        gas: "sulphur-dioxide",
                        manufacturer: "CITY",
                        type: "3 type",
                        "gas Type ": "SO2",
                        SKU: "TD2E-1A",
                        productName: "T3ST/F - 0-50 ppm ",
                        "life ": "2 years in air ",
                        range: "0-50 ppm ",
                        details:
                            "3 electrode sensor with standard 4-20mA board ",
                        link:
                            "http://www.citytech.com/en-gb/PDF-Datasheets/t3stf.pdf"
                    },
                    {
                        ordNum: 1,
                        gas: "sulphur-dioxide",
                        manufacturer: "CITY",
                        type: "3 type",
                        "gas Type ": "SO2",
                        SKU: "TD2F-1A",
                        productName: "T3ST/F - 0-100 ppm",
                        "life ": "2 years in air ",
                        range: "0-100 ppm",
                        details:
                            "3 electrode sensor with standard 4-20mA board ",
                        link:
                            "http://www.citytech.com/en-gb/PDF-Datasheets/t3stf.pdf"
                    },
                    {
                        ordNum: 1,
                        gas: "sulphur-dioxide",
                        manufacturer: "CITY",
                        type: "3 type",
                        "gas Type ": "SO2",
                        SKU: "TD2G-1A",
                        productName: "T3ST/F - 0-200 ppm",
                        "life ": "2 years in air ",
                        range: "0-200 ppm",
                        details:
                            "3 electrode sensor with standard 4-20mA board ",
                        link:
                            "http://www.citytech.com/en-gb/PDF-Datasheets/t3stf.pdf"
                    },
                    {
                        ordNum: 1,
                        gas: "sulphur-dioxide ",
                        manufacturer: "CITY",
                        type: "3 type",
                        "gas Type ": "SO2",
                        SKU: "AD007-000",
                        productName: "3SC ",
                        "life ": "2 Years ",
                        range: "0-2000ppm ",
                        details: "3 electrode sensor ",
                        link:
                            "https://www.citytech.com/en-gb/PDF-Datasheets/3sc.pdf"
                    },
                    {
                        ordNum: 1,
                        gas: "sulphur-dioxide ",
                        manufacturer: "CITY",
                        type: "5SC ",
                        "gas Type ": "SO2",
                        SKU: "AD528-W00",
                        productName: "5SC ",
                        "life ": "2 years ",
                        range: "0-2000ppm ",
                        details: "3 electrode sensor ",
                        link:
                            "https://www.citytech.com/en-gb/PDF-Datasheets/5sc.pdf"
                    }
                ]
            },
            {
                name: "tetrahydrothiophene",
                chemicalId: "C4H8S",
                devices: [
                    {
                        ordNum: 1,
                        gas: "tetrahydrothiophene",
                        manufacturer: "CITY",
                        type: "sensoric",
                        SKU: "2345-034-11069",
                        productName: "THT 3E - Classic",
                        "life ": ">18 months ",
                        range: "0-50mg/m3 ",
                        details:
                            "3 Electrode sensor with organic electrolyte; Classic Format.",
                        link:
                            "https://www.citytech.com/en-gb/PDF-Datasheets/tht3e.pdf"
                    },
                    {
                        ordNum: 1,
                        gas: "tetrahydrothiophene",
                        manufacturer: "CITY",
                        type: "sensoric",
                        SKU: "2345-034-14049",
                        productName: "THT 3E - 4-Series",
                        "life ": ">18 months ",
                        range: "0-50mg/m3 ",
                        details:
                            "3 Electrode sensor with organic electrolyte; 4-Series Format. ",
                        link:
                            "https://www.citytech.com/en-gb/PDF-Datasheets/tht3e.pdf"
                    },
                    {
                        ordNum: 1,
                        gas: "tetrahydrothiophene",
                        manufacturer: "CITY",
                        type: "sensoric",
                        SKU: "2345-034-17079",
                        productName: "THT 3E  7-Series",
                        "life ": ">18 months ",
                        range: "0-50mg/m3 ",
                        details:
                            "3 Electrode sensor with organic electrolyte; 7-Series Format. ",
                        link:
                            "https://www.citytech.com/en-gb/PDF-Datasheets/tht3e.pdf"
                    }
                ]
            }
        ],
        inCart: [],
        gasCylindersEnquiry: "",
        sirical: [
            {
                productName: "Sircal Rare Gas Purifier MP2000 - 110V",
                SKU: "P3171",
                class: "Instrument",
                series: "Sircal",
                ordNum: 1
            },
            {
                productName: "Sircal Rare Gas Purifier MP2000 - 220V",
                SKU: "P3170",
                class: "Instrument",
                series: "Sircal",
                ordNum: 1
            },
            {
                productName: "Sircal - Titanium Tube",
                SKU: "P4003",
                class: "Accessory",
                series: "Sircal",
                ordNum: 1
            },
            {
                productName: "Sircal - Copper oxide tube",
                SKU: "P4004",
                class: "Accessory",
                series: "Sircal",
                ordNum: 1
            },
            {
                productName: "Sircal - Molecular sieve tube",
                SKU: "P4005",
                class: "Accessory",
                series: "Sircal",
                ordNum: 1
            },
            {
                productName: "Sircal - Pressure sensor (factory fitted)",
                SKU: "P4030",
                class: "Accessory",
                series: "Sircal",
                ordNum: 1
            },
            {
                productName: "Sircal - Particle filter",
                SKU: "P4031",
                class: "Accessory",
                series: "Sircal",
                ordNum: 1
            },
            {
                productName: "Sircal - Wall mounting bracket for MP2000",
                SKU: "P1670",
                class: "Accessory",
                series: "Sircal",
                ordNum: 1
            },
            {
                productName:
                    "Sircal - Gas side entry kit type C - 1/4 inch connector",
                SKU: "P4021",
                class: "Accessory",
                series: "Sircal",
                ordNum: 1
            },
            {
                productName:
                    "Sircal - Gas side entry kit type C - 6 mm connector",
                SKU: "P4023",
                class: "Accessory",
                series: "Sircal",
                ordNum: 1
            },
            {
                productName: "Sircal - Furnace heater 110V",
                SKU: "P3056",
                class: "Accessory",
                series: "Sircal",
                ordNum: 1
            },
            {
                productName: "Sircal - Furnace heater 220V",
                SKU: "P3057",
                class: "Accessory",
                series: "Sircal",
                ordNum: 1
            },
            {
                productName: "Sircal - Control panel assembly 110V",
                SKU: "P4010",
                class: "Accessory",
                series: "Sircal",
                ordNum: 1
            },
            {
                productName: "Sircal - Control panel assembly 230V",
                SKU: "P4002",
                class: "Accessory",
                series: "Sircal",
                ordNum: 1
            },
            {
                productName: "Sircal - Band heater (2 pieces required)",
                SKU: "P3042",
                class: "Accessory",
                series: "Sircal",
                ordNum: 1
            },
            {
                productName: "Sircal - Thermocouple (2 pieces required)",
                SKU: "P3066",
                class: "Accessory",
                series: "Sircal",
                ordNum: 1
            }
        ],
        sourceOptions: []
    },

    getters: {
        sourceOptions: state => state.sourceOptions,
        products: state => state.products,
        sirical: state => state.sirical,

        genie: state => state.genie,
        gasCylindersEnquiry: state => state.gasCylindersEnquiry,
        inCart: state => state.inCart,
        added: state => state.added
    },
    mutations: {
        ADD_TO_CART(state, payload) {
            let inCartItem = state.inCart.find(inCartItem => {
                return inCartItem.productName === payload.productName;
            });
            if (inCartItem) {
                if (
                    (payload.class == "instrument" &&
                        inCartItem.gas !== payload.gas) ||
                    inCartItem.details !== payload.details
                ) {
                    state.inCart.push(payload);
                } else if (
                    payload.productName == inCartItem.productName &&
                    payload.class == "instrument" &&
                    payload.source == inCart.source
                ) {
                    inCartItem.ordNum++;
                }
            } else {
                console.log("else");
                state.inCart.push(payload);
            }
            console.log(state);
            state.added = true;
        },
        REMOVE_FROM_CART(state, payload) {
            console.log(payload);
            let product = state.products.find(productItem => {
                return productItem.name == payload.gas;
            });
            if (product === undefined) {
                state.inCart.splice(payload.index, 1);
            } else if (product) {
                let device = product.devices.find(device => {
                    return device.productName == payload.productName;
                });
                state.inCart.splice(payload.index, 1);

                device.ordNum = 1;
            } else {
            }
        },
        ADD_ORD(state, payload) {
            console.log(this);

            // console.log(payload);
            // console.log(state.inCart)
            let cartItem = state.inCart.find(inCartItem => {
                return inCartItem.productName == payload.productName;
            });
            let product = state.products.find(productItem => {
                return productItem.name == payload.gas;
            });
            let device = null;
            if (product) {
                device = product.devices.find(device => {
                    return device.productName == payload.productName;
                });
            }

            if (cartItem === undefined) {
                console.log(this);
                // console.log(device);
                device.ordNum++;
            } else if (!device) {
                cartItem.ordNum++;
            } else {
                console.log(this);

                cartItem.ordNum++;
                device.ordNum++;
            }
        },
        SUB_ORD(state, payload) {
            let cartItem = state.inCart.find(inCartItem => {
                return inCartItem.productName == payload.productName;
            });
            let product = state.products.find(productItem => {
                return productItem.name == payload.gas;
            });
            let device = null;
            if (product) {
                device = product.devices.find(device => {
                    return device.productName == payload.productName;
                });
            }

            console.log(cartItem.index);
            if (cartItem === undefined) {
                console.log(device);
                device.ordNum--;
            } else if (!device) {
                cartItem.ordNum--;
            } else {
                cartItem.ordNum--;
                device.ordNum--;
            }

            if (cartItem.ordNum == 0 || !cartItem) {
                // state.added = false;
                state.inCart.splice(state.inCart.indexOf(cartItem), 1);
                device.ordNum = 1;
            } else if (state.inCart.length > 0) {
                // state.added = true;
            } else if (device.ordNum > 0) {
                // state.added = true;
            }
        },
        ADD_GAS_CYLINDERS_E(state, payload) {
            state.gasCylindersEnquiry = payload;
        },
        EMPTY_CART(state, payload) {
            state.inCart = [];
            state.gasCylindersEnquiry = "";
        },

        GET_PRODUCTS(state, payload) {
            state.products = payload;
            console.log("elloy");
        },
        GET_SIRCAL(state, payload) {
            state.sirical = payload;
        },
        GET_SOURCE_OPTIONS(state, payload) {
            state.sourceOptions = payload;
        }
    },
    actions: {
        getProducts(contex, payload) {
            console.log("helloy from store");
            // axios
            //     .get("http://studio-sova.rs/api/products.json")
            //     //   .then(response => {
            //     //     contex.commit('GET_PRODUCTS', response.data);
            //     //   })
            //     .then(response => {
            //         console.log('from store', response.data);
            //         contex.commit('GET_PRODUCTS', response.data);
            //     })
            //     .catch(function (error) {
            //         // handle error
            //         console.log(error);
            //     })
            //     .finally(function () {
            //         // always executed
            //     });
            fetch("http://studio-sova.rs/api/products.json", {
                // mode: 'no-cors',
                headers: {
                    "Content-Type": "application/json",
                    "Access-Control-Allow-Origin": "*",

                    "Access-Control-Allow-Credentials": true
                    // "Content-Type": "application/x-www-form-urlencoded",
                }
            })
                .then(function(response) {
                    return response.json();
                })
                .then(function(myJson) {
                    console.log(myJson);
                    contex.commit("GET_PRODUCTS", myJson);
                    // console.log(JSON.stringify(myJson));
                });
        },
        getSircal(context, payload) {
            fetch("http://studio-sova.rs/api/sircal.json", {
                // mode: 'no-cors',
                headers: {
                    "Content-Type": "application/json",
                    "Access-Control-Allow-Origin": "*",
                    "Access-Control-Allow-Credentials": true

                    // "Content-Type": "application/x-www-form-urlencoded",
                }
            })
                .then(function(response) {
                    return response.json();
                })
                .then(function(myJson) {
                    // console.log(myJson)
                    context.commit("GET_SIRCAL", myJson);
                    // console.log(JSON.stringify(myJson));
                });
        },

        // getSourceOptions(context, payload) {
        //   fetch('http://studio-sova.rs/api/sourceOptions.json')
        //     .then(function (response) {
        //       return response.json();
        //     }).then(function (data) {
        //       context.commit('GET_SOURCE_OPTIONS', data)
        //     }).catch((err) => console.log(err));
        // },
        getSourceOptions(context, payload) {
            fetch("http://studio-sova.rs/api/source.json", {
                // mode: 'no-cors',
                headers: {
                    "Content-Type": "application/json",
                    "Access-Control-Allow-Origin": "*",
                    "Access-Control-Allow-Credentials": true
                    // "Content-Type": "application/x-www-form-urlencoded",
                }
            })
                .then(function(response) {
                    return response.json();
                })
                .then(function(data) {
                    context.commit("GET_SOURCE_OPTIONS", data);
                });
        },

        addToCart(context, payload) {
            context.commit("ADD_TO_CART", payload);
        },
        emptyCart(context, payload) {
            context.commit("EMPTY_CART", payload);
        },
        addGasCylinders(context, payload) {
            context.commit("ADD_GAS_CYLINDERS_E", payload);
        },
        removeFromCart(context, payload) {
            context.commit("REMOVE_FROM_CART", payload);
        },
        addOrd(context, payload) {
            context.commit("ADD_ORD", payload);
        },
        subOrd(context, payload) {
            context.commit("SUB_ORD", payload);
        }
    },

    plugins: [createPersistedState()]
});
