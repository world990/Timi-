<template>
  <layout>
    <div class="navBar">
      <Icon class="leftIcon" name="left" @click="goBack"/>
      <span class="title">编辑标签</span>
      <span class="rightIcon"></span>
    </div>
    <div class="input-wrapper">
      <InputItem :value="currentTag.name"
                 field-name="标签名"
                 placeholder="输入标签呀"
                 @update:value="update"/>
    </div>
    <div class="button-wrapper">
      <Button @click="remove">删除标签</Button>
    </div>


  </layout>
</template>

<script lang='ts'>
import Vue from 'vue';
import {Component} from 'vue-property-decorator';
import InputItem from '@/components/Money/InputItem.vue';
import Button from '@/components/Button.vue';


@Component({
  components: {Button, InputItem},
})
export default class EditLabel extends Vue {
  get currentTag() {
    return this.$store.state.currentTag;
  }

  created() {
    const id = this.$route.params.id;
    this.$store.commit('fetchTags')
    this.$store.commit('setCurrentTag', id);
    if (!this.currentTag) {
      this.$router.replace('/404');
    }
  }

  update(name: string) {
    if (this.currentTag) {
     this.$store.commit('updateTag',{id:this.currentTag.id,name})
    }
  }

  remove( ) {
    if (this.currentTag) {
      this.$store.commit('removeTag',this.currentTag.id)
    }
  }

  goBack() {
    this.$router.back();
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