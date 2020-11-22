<template>
  <div>
    <label class="notes">
      <span class="name">备注</span>
      <input type="text"
             v-model="value"
             placeholder="在这里输入">

    </label>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import {Component} from 'vue-property-decorator';

@Component
export default class Notes extends Vue {
  value = '';
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