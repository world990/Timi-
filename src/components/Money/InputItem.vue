<template>
  <div>
    <label class="InputItem">
      <span class="name">{{ this.fieldName }}</span>
      <input type="text"
             v-model="value"

             :placeholder='this.placeholder'>

    </label>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import {Component, Prop, Watch} from 'vue-property-decorator';

@Component
export default class InputItem extends Vue {
  value = '';

  @Prop({required: true}) fieldName!: string;
  @Prop() placeholder?: string;

  @Watch('value')
  onValueChanged(value: string) {
    this.$emit('update:value', value);
  }
}
</script>

<style lang="scss" scoped>
.InputItem {
  font-size: 14px;

  display: flex;
  align-items: center;


  > .name {
    margin-left: 16px;
  }


  input {
    height: 40px;
    flex-grow: 1;
    border: none;
    background: transparent;
    margin-left: 16px;
  }
}
</style>