<template>
  <layout>
    <div class="navBar">
      <Icon class="leftIcon" name="left"/>
      <span class="title">编辑标签</span>
      <span class="rightIcon"></span>
    </div>
    <div class="input-wrapper">
      <InputItem :value="tag.name" field-name="标签名" placeholder="输入标签呀"/>
    </div>
    <div class="button-wrapper">
      <Button>删除标签</Button>
    </div>


  </layout>
</template>

<script lang='ts'>
import Vue from 'vue';
import {Component} from 'vue-property-decorator';
import tagListModel from '@/models/tagListModel';
import InputItem from '@/components/Money/InputItem.vue';
import Button from '@/components/Button.vue';

@Component({
  components: {Button, InputItem}
})
export default class EditLabel extends Vue {
  tag?: { id: string; name: string } = undefined;

  created() {
    const id = this.$route.params.id;
    tagListModel.fetch();
    const tags = tagListModel.data;
    const tag = tags.filter(t => t.id === id)[0];
    if (tag) {
      this.tag=tag
    } else {
      this.$router.replace('/404');
    }
  }
}
</script>

<style lang='scss' scoped>
.navBar {
  display: flex;
  text-align: center;
  background: white;
  font-size: 16px;
  padding: 12px 16px;
  align-items: center;
  justify-content: space-between;

  > .title {

  }

  > .leftIcon {
    width: 24px;
    height: 24px;
  }

  > .rightIcon {
    width: 24px;
    height: 24px;
  }
}

.input-wrapper {
  margin-top: 8px;
  background: white;
}

.button-wrapper {
  text-align: center;
  padding: 16px;
  margin-top: 44-16px;
}
</style>