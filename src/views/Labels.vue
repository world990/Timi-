<template>
  <div>
    <Layout>
      <div class="tags">
        <router-link
            class="tag" v-for="tag in tags" :key="tag.id" :to="`/labels/edit/${tag.id}`"><span>{{ tag.name }}</span>
          <icon name="right"/>
        </router-link>
      </div>
      <div class="createTag-wrapper">
        <Button class="createTag" @click="createTag">新建标签</Button>
      </div>
    </Layout>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import {Component} from 'vue-property-decorator';
import Button from '@/components/Button.vue';


@Component({
  components: {Button},


})
export default class Labels extends Vue {
  get tags() {
    return this.$store.state.tagList;
  }

  beforeCreated() {
    this.$store.commit('fetchTags');
  }

  createTag() {
    const name = window.prompt('请输入标签名');
    if (name) {
      this.$store.commit('createTag', name);
    }
  }


}
</script>

<style lang="scss" scoped>
.tags {
  background: white;
  font-size: 16px;
  padding-left: 16px;

  > .tag {
    min-height: 44px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid #e6e6e6;

    svg {
      color: #666666;
      margin-right: 16px;
      font-size: 24px;
    }
  }
}

.createTag {

  color: white;
  border-radius: 4px;
  border: none;
  height: 40px;
  padding: 0 16px;
  &-wrapper {
    text-align: center;
    padding: 16px;
    margin-top: 44-16px;
  }
}
</style>