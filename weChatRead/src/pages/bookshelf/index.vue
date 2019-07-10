<template>
  <div>
    <search :find="search"></search>

  </div>
</template>

<script>
import search from "@/components/search.vue";
export default {
  components: {
    search
  },
  data() {
    return {
      search: 2
    };
  },
  methods: {
    
  }
};
</script>

<style>

</style>
