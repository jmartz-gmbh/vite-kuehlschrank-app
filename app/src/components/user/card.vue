<template>
  <div class="vc-user-card">
    <h2>Jonathan Martz</h2>
    <router-link to="/profile/1">
      <img
        src="https://avatars.githubusercontent.com/u/20771653?v=4"
        alt=""
        class="mx-auto w-24 mt-2 rounded-full"
      />
    </router-link>
    <h2>Admin</h2>
  </div>
</template>

<script>
export default {
  name: "UserCard",
  mounted() {
    this.load();
  },
  methods: {
    load: function () {
      const that = this;
      fetch("https://auth.kühlschrank.app/api/user/info", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          token: this.$store.state.auth.token,
          username: this.$store.state.auth.username,
        }),
      })
        .then(function (response) {
          return response.json();
        })
        .then(function (json) {
          console.log(json);
          if (json.user) {
            that.user = json.user;
          }
        });
    },
  },
};
</script>
