<template>
  <div>
    <label class="notes">
      <span class="name">备注</span>
      <input type="text" placeholder="在这里输入">
    </label>
  </div>
</template>

<script lang="ts">
export default {
  name: 'Notes'
}
</script>

<style lang="scss" scoped>
.notes {
  font-size: 14px;
  background: #f5f5f5;
  display: flex;
  align-items: center;


> .name {
  margin-left: 16px;
}


input {
  height: 64px;
  flex-grow: 1;
  border: none;
  background: transparent;
  margin-left: 16px;
}
}
</style>