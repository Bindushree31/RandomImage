const app = Vue.createApp({
  data() {
    return {
      firstName: "John",
      lastName: "Deo",
      email: "Johndeo@gmail.com",
      gender: "male",
      picture: "https://randomuser.me/api/portraits/men/10.jpg",
    };
  },

  methods: {
    async getUser() {
      const res = await fetch("https://randomuser.me/api/");
      const { results } = await res.json();
      //console.log(results);

      this.firstName = results[0].name.first;
      this.lastName = results[0].name.last;
      this.email = results[0].email;
      this.gender = results[0].gender;
      this.picture = results[0].picture.large;

      //this.firstName = "Sam";
      //this.lastName = "Dun";
      //this.email = "Samdun@gmail.com";
      //this.gender = "female";
      //this.age = 22;
      //this.picture = "https://randomuser.me/api/portraits/women/10.jpg";
    },
  },
});
app.mount("#app");
