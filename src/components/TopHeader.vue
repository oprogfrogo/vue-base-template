<template>
  <nav class="navbar" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
      <a class="navbar-item" href="https://bulma.io">
        <img src="../assets/clear-logo.jpeg" width="112" height="28" />
      </a>

      <a
        role="button"
        class="navbar-burger burger"
        aria-label="menu"
        aria-expanded="false"
        data-target="navbarBasicExample"
      >
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a>
    </div>

    <div id="navbarBasicExample" class="navbar-menu">
      <div class="navbar-start">
        <router-link class="navbar-item" to="/">Home</router-link>

        <a class="navbar-item">Documentation</a>

        <div class="navbar-item has-dropdown is-hoverable">
          <a class="navbar-link">More</a>

          <div class="navbar-dropdown">
            <router-link class="navbar-item" to="/about">About</router-link>
            <hr class="navbar-divider" />
            <router-link class="navbar-item" to="/secret">Member's Area</router-link>
          </div>
        </div>
      </div>

      <div class="navbar-end">
        <div class="navbar-item">
          <div class="buttons" v-if="!loggedIn">
            <a class="button is-primary">
              <strong>Sign up</strong>
            </a>
            <router-link class="button is-light" to="/login">Log In</router-link>
          </div>
          <div v-else>
            <button class="button is-warning" @click="signOut">Sign out</button>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
import * as firebase from "firebase/app";
import "firebase/auth";
export default {
  name: "top-header",
  mounted() {
    this.setupFirebase();
  },
  methods: {
    setupFirebase() {
      firebase.auth().onAuthStateChanged(user => {
        if (user) {
          // User is signed in.
          console.log("signed in");
          this.loggedIn = true;
        } else {
          // No user is signed in.
          this.loggedIn = false;
          console.log("signed out", this.loggedIn);
        }
      });
    },
    signOut() {
      firebase
        .auth()
        .signOut()
        .then(() => {
          this.$router.replace({ name: "login" });
        });
    }
  },
  data() {
    return {
      loggedIn: false
    };
  }
};
</script>

<style lang="scss" scoped>
div {
  color: inherit;
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
.navbar-item img {
  max-height: 3.75rem;
  border: 1px solid #cecece;
}

nav.navbar {
  background: #f9f8f8;
  margin-bottom: 40px;
}
</style>