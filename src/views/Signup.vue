<template>
  <div class="signup">
    <h2>Sign up</h2>
    <form @submit.prevent="submit">
      <div>
        Nick :
        <input type="text" v-model="nick" name="nick" placeholder="Nick" />
      </div>
      <div>
        email :
        <input type="text" v-model="email" name="email" placeholder="Email" />
      </div>
      <div class="form-group">
        Password :
        <input
          type="password"
          v-model="password"
          name="password"
          placeholder="Password"
        />
      </div>
      <div v-if="message">{{ message }}</div>
      <div>
        <button type="submit">Sign up</button>
      </div>
    </form>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "Signup",
  data() {
    return {
      nick: "",
      email: "",
      password: "",
      message: "",
    };
  },

  methods: {
    ...mapActions("auth", ["signup", "logout"]),

    async submit() {
      try {
        const user = {
          nick: this.nick,
          email: this.email,
          password: this.password,
        };
        const result = await this.signup(user);
        if (result === true) {
          this.message = "";
          this.$router.push({
            path: "/login",
            query: { signedup: "true" },
          });
        } else {
          this.message = result; //'SignUp error!';
        }
      } catch (err) {
        this.message = err.message;
      }
    },
  },

  created() {
    this.logout();
  },
};
</script>
<style>
.signup {
  background: url(https://us.123rf.com/450wm/jirsak/jirsak1707/jirsak170700007/82255755-cybersecurity-and-information-technology-security-services-concept-login-or-sign-in-internet-concept.jpg?ver=6);
  color: rgb(185, 180, 159);
}
</style>
