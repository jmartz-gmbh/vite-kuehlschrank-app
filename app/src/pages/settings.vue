<template>
  <div class="vp-settings">
    <div class="grid grid-cols-6">
      <div
        v-if="$store.state.auth.token == null || $store.state.auth.token == ''"
        class="col-span-6 md:col-span-3"
      >
        <div class="form register">
          <div class="form-group">
            <label>Username</label>
            <input type="text" v-model="form.register.username" />
          </div>
          <div class="form-group">
            <label>Password</label>
            <input type="password" v-model="form.register.password" />
          </div>
          <div class="form-group">
            <label>Email</label>
            <input type="email" v-model="form.register.email" />
          </div>
          <div class="form-group">
            <button @click="register()">register</button>
          </div>
        </div>
      </div>
      <div
        v-if="$store.state.auth.token == null || $store.state.auth.token == ''"
        class="col-span-6 md:col-span-3"
      >
        <div class="form login">
          <div class="form-group">
            <label>Username</label>
            <input type="text" v-model="form.login.username" />
          </div>
          <div class="form-group">
            <label>Password</label>
            <input type="password" v-model="form.login.password" />
          </div>
          <div class="form-group">
            <button @click="login()">login</button>
          </div>
        </div>
      </div>
      <div v-else class="col-span-6 md:col-span-3">
        <div class="form">
          <div class="form-group">
            <label>Token</label>
            <input type="text" v-model="$store.state.auth.token" />
          </div>
          <div class="form-group">
            <button @click="validate()">validate</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Settings",
  data() {
    return {
      form: {
        login: {
          username: "",
          password: "",
        },
        register: {
          username: "",
          password: "",
          email: "",
        },
      },
    };
  },
  mounted() {
    if (
      this.$store.state.auth.token != null &&
      this.$store.state.auth.token != ""
    ) {
      this.validate();
    }
  },
  methods: {
    login: function () {
      const that = this;
      fetch("https://auth.kühlschrank.app/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: this.form.login.username,
          password: this.form.login.password,
        }),
      })
        .then(function (response) {
          return response.json();
        })
        .then(function (json) {
          if (json.token) {
            that.$router.push("/dashboard");
            that.$store.commit("auth-token-update", json.token);
            that.$store.commit(
              "auth-username-update",
              that.form.login.username
            );
          }
        });
    },
    register: function () {
      fetch("https://auth.kühlschrank.app/api/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: this.form.register.username,
          password: this.form.register.password,
          email: this.form.register.email,
        }),
      })
        .then(function (response) {
          return response.json();
        })
        .then(function (json) {
          console.log(json);
        });
    },
    validate: function () {
      const that = this;
      fetch(this.$store.state.url.auth + "/api/user/info", {
        method: "POST",
        body: JSON.stringify({
          token: this.$store.state.auth.token,
        }),
      })
        .then((response) => {
          return response.json();
        })
        .then((json) => {
          console.log(json);
        });
    },
  },
};
</script>
