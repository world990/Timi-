<template>
  <div>
    <Layout class-prefix="layout">


      <div class="numberPad">
        <div class="output">100</div>
        <div class="buttons">
          <button>1</button>
          <button>2</button>
          <button>3</button>
          <button>删除</button>
          <button>4</button>
          <button>5</button>
          <button>6</button>
          <button>清空</button>
          <button>7</button>
          <button>8</button>
          <button>9</button>
          <button class="ok">OK</button>
          <button class="zero">0</button>
          <button>.</button>


        </div>
      </div>
      <div>
        <ul class="types">
          <li class="selected">支出</li>
          <li>收入</li>
        </ul>
      </div>
      <div>
        <label class="notes">
          <span class="name">备注</span>
          <input type="text" placeholder="在这里输入">
        </label>
      </div>
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
    </Layout>
  </div>
</template>

<script lang="ts">
export default {
  name: 'money'
};
</script>
<style lang="scss">
.layout-content {
  display: flex;
  flex-direction: column-reverse;
}
</style>
<style lang="scss" scoped>
@import "~@/assets/style/helper.scss";

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

.types {
  background: #c4c4c4;
  display: flex;
  text-align: center;
  font-size: 24px;

  > li {
    width: 50%;
    height: 64px;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;

    &.selected::after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 4px;
      background: #333333;
    }
  }
}

.numberPad {

  > .output {
    @extend %innerShadow;
    font-size: 36px;
    font-family: Consolas, monospace;
    padding: 9px 16px;
    text-align: right;

  }


  > .buttons {
    &::after {
      content: '';
      clear: both;
      display: block;
    }

    > button {
      width: 25%;
      height: 64px;
      float: left;
      background: transparent;
      border: none;

      &.zero {
        width: 25*2%;
      }

      &.ok {
        height: 128px;
        float: right;
      }

      $bg: #f2f2f2;

      &:nth-child(1) {
        background: #f2f2f2;
      }

      &:nth-child(2), &:nth-child(5) {
        background: darken($bg, 4%);
      }

      &:nth-child(3), &:nth-child(6), &:nth-child(9) {
        background: darken($bg, 8%);
      }

      &:nth-child(4), &:nth-child(7), &:nth-child(10), {
        background: darken($bg, 12%);
      }

      &:nth-child(8), &:nth-child(11), &:nth-child(13) {
        background: darken($bg, 16%);
      }

      &:nth-child(12), &:nth-child(14) {
        background: darken($bg, 20%);
      }
    }
  }
}
</style>