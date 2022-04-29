<template>
  <div>
    <router-view />
  </div>
</template>

<script>

export default {
  name: "LayoutDefault",

  components: {
  },

  data() {
    return {
      leftDrawerOpen: false
    };
  }
};
</script>

<style></style>
