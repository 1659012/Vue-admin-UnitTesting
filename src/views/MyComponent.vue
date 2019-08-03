<template>
  <span>{{ message }}</span>
</template>

<script>
export default {
  props: ["msg"],
  data() {
    return {
      message: "hello!"
    };
  },
  created() {
    this.message = "bye!";
  }
};
</script>
