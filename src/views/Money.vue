<template>
  <div class="nav-wrapper">
    <div class="content">
      money.vue
    </div>
    <Nav/>
  </div>
</template>

<script>
export default {
  name: 'money'
}
</script>

<style lang="scss" scoped>
.nav-wrapper {
  border: 1px solid black;
  display: flex;
  flex-direction: column;
  height: 100vh;
}

.content {
  overflow: auto;
  flex-grow: 1;
}
</style>