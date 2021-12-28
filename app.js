// Initialize vuejs
const app = Vue.createApp({
  // template: `<h2>Vuejs</h2>`,
  data() {
    return {
      title: "Using VueJS with data",
    };
  },
  methods: {
    changeTitle() {
      this.title = "Using vueJS methods";
      this.capitalize();
    },
    capitalize() {
      this.title = this.title.toUpperCase();
    },
  },
});

app.mount("#myApp");
