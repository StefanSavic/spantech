<template>
  <div class="spantech-footer-wrapp mt-2">
    <div class="info row">
      <div class="col-md-3 c" v-for="(s,index) in subpages" :key="index">
        <h5>{{s.header}}</h5>
        <p>{{s.text}}</p>
      </div>
    </div>

    <div class="spantech-footer">
      <h5>Copyright &copy; 2019 Spantech</h5>
    </div>
  </div>
</template>

<script>
export default {
  name: "spantechFooter",
  data() {
    return {
      subpages: [
        {
          header: "WORLDWIDE DELIVERY",
          text: `For more than 25 years we delivered countless gas cylinders, sensors and instruments all over the
						world, acquiring along the way strong knowledge of the delicate logistics’ process involving
						hazardous goods.
						We handle the delivery to your premises with reassuring confidence together with our logistics
						partners.`
        },
        {
          header: "TECHNICAL SUPPORT",
          text: `Our in-house specialists are ready to address your enquiries. You can now use our live chat with our
						experts or you can send us an email to support@spantech.co.uk.`
        },
        {
          header: "PARTNERSHIP INFO",
          text: `We are dedicated to expanding our sales network around the world – delivering expertise and the
						highest quality products and service. If you are ready to consolidate your business in your territory,
						please let us know by sending your proposal by email to b2b@spantech.co.uk.`
        },
        {
          header: "NEWS AND EVENTS",
          text: `Content to follow`
        }
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
.container-fluid {
  // padding: 0;
}
.spantech-footer-wrapp {
  overflow: hidden;
  background: #585857;
  color: white;
  p {
    font-size: 12px;
  }
  // -webkit-box-shadow: 1px 0 5px 0 #585857;
  // -moz-box-shadow: 1px 0 5px 0 #585857;
  // box-shadow: 1px 0 5px 0 #585857;

  .info {
    text-align: left;
    // background:#585857;
    // color:white;
    // p{
    // padding:0 8em;
    // }
    padding: 1em 2em;
    // border: 1px solid #585857;
  }
}
.spantech-footer {
  height: 5.4vh;
  // background:#585857;
  // background:white;
  // color:white;
  // color: #585857;
  display: flex;
  align-items: center;
  justify-content: center;
  // border-top: 1px solid #585857;
  // border: 1px solid #585857;
  // -webkit-box-shadow: 1px 0 10px 0 #585857;
  // -moz-box-shadow: 1px 0 10px 0 #585857;
  // box-shadow: 1px 0 10px 0 #585857;
  -webkit-box-shadow: 1px 0 1px 0 #585857;
  -moz-box-shadow: 1px 0 1px 0 #585857;
  box-shadow: 1px 0 1px 0 #585857;
}
</style>

