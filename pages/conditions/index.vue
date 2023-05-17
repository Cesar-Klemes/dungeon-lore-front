<template>
  <div>
    {{ conditions }}
  </div>
</template>

<script>
export default {
  name: "index.vue",

  async asyncData({ $axios }) {
    const conditions = await $axios.$get('https://www.dnd5eapi.co/api/conditions')
    return {
      conditions: conditions.results,
    }
  }
}
</script>

<style scoped>

</style>
