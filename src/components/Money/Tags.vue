<template>
  <div class="tags">
    <ul class="current">
      <li>衣</li>
      <li>食</li>
      <li>住</li>
      <li>行</li>
    </ul>
    <div class="new">
      <button>新增标签</button>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: 'Tags'
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