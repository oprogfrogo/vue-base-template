<template>
  <div class="is-size-7">
    <nav-bar />
    <div>
      <flash-message class="flash-messages"></flash-message>
    </div>
    <div id="content">
      <slot />
    </div>
    <footer-bar />
    <loading :active.sync="isLoading" :can-cancel="false" :is-full-page="fullPage"></loading>
  </div>
</template>

<script>
import NavBar from "@/components/TopHeader";
import FooterBar from "@/components/FooterBar";
import Loading from "vue-loading-overlay";
import "vue-loading-overlay/dist/vue-loading.css";

export default {
  components: {
    NavBar,
    FooterBar,
    Loading
  },
  data() {
    return {
      isLoading: false,
      fullPage: true
    };
  },
  mounted() {
    this.$events.$on("Loader", element => {
      this.isLoading = element;
    });
  }
};
</script>

<style>
@import "~vue-flash-message/dist/vue-flash-message.min.css";

#content {
  margin-bottom: 160px;
}
.flash-messages {
  position: fixed;
  z-index: 99999;
  top: 20%;
  left: 50%;
  transform: translate(-50%);
}
.flash__message {
  padding: 60px 100px;
}
.message-body {
  padding: 0.5em;
}

.flash__close-button {
  padding: 12px;
}

.flash__close-button span {
  font-size: 53px;
}
</style>
