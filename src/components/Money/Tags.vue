<template>
  <div class="tags">
    <ul class="current">
      <li v-for="tag in dataSource" :key="tag" @click="toggle(tag)"
          :class="{selected: selectedTags.indexOf(tag)>=0}">{{ tag }}
      </li>
    </ul>
    <div class="new">
      <button @click="create">新增标签</button>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import {Component, Prop} from 'vue-property-decorator';

@Component
export default class Tags extends Vue {
  @Prop() dataSource: string[] | undefined;
  selectedTags: string[] = [];

  toggle(tag: string) {
    const index = this.selectedTags.indexOf(tag);
    if (index >= 0) {
      this.selectedTags.splice(index, 1);

    } else {this.selectedTags.push(tag);}
this.$emit('update:value',this.selectedTags)
  }

  create() {
    const name = window.prompt('请输入标签名');
  if(name===''){
    window.alert('标签不能为空')
  }else{
    if(this.dataSource!==undefined){
      this.$emit ('update:value',[...this.dataSource,name])
    }
  }
  }
}
</script>

<style lang="scss" scoped>
.tags {
  font-size: 14px;
  padding: 16px;

  > .current {
    display: flex;
    flex-wrap: wrap;


    > li {
      background: #d9d9d9;
      height: 24px;
      border-radius: 12px;
      padding: 0 17px;
      margin-right: 12px;
      display: flex;
      justify-content: center;
      align-items: center;
      margin-top: 4px;

      &.selected {
        background: darken(#d9d9d9, 45%);
        color: whitesmoke;
      }
    }
  }

  > .new {
    padding-top: 16px;

    button {
      background: transparent;
      border: none;
      border-bottom: 1px solid #999999;
      color: #999999;
      padding: 0 3px;
    }
  }
}

</style>