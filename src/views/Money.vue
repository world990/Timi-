<template>
  <div>
    <Layout class-prefix="layout">
      <NumberPad :value.sync="record.amount" @submit="saveRecord"/>
      <Tabs :data-source="recordTypeList"
            :value.sync="record.type"/>
      <div class="notes">
        <InputItem field-name="备注"
                   placeholder="在这里输入备注呀"
                   :value.sync="record.notes"
        />
      </div>
      <Tags @update:value="record.tags=$event"/>
    </Layout>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import NumberPad from '@/components/Money/NumberPad.vue';
import InputItem from '@/components/Money/InputItem.vue';
import Tags from '@/components/Money/Tags.vue';
import {Component} from 'vue-property-decorator';
import Tabs from '@/components/Tabs.vue';
import typeList from '@/constants/ typeList';


@Component({
      components:
          {Tabs, Tags, InputItem, NumberPad},


    },
)
export default class Money extends Vue {
  get recordList() {
    return this.$store.state.recordList;
  }

  recordTypeList = typeList;
  record: RecordItem = {
    tags: [], notes: '', type: '-', amount: 0
  };

  created() {
    this.$store.commit('fetchRecords');
  }

  onUpdateNotes(value: string) {
    this.record.notes = value;

  }

  onUpdateAmount(value: string) {
    this.record.amount = parseFloat(value);
  }

  saveRecord() {
    if (!this.record.tags || this.record.tags.length === 0) {
      return window.alert('记得选择标签！！！');
    }
    this.$store.commit('createRecord', this.record);
    if (this.$store.state.createRecordError === null) {

      this.record.notes = '';
    }
  }

}
</script>
<style lang="scss" scoped>
::v-deep .layout-content {
  display: flex;
  flex-direction: column-reverse;
}

.notes {
  padding: 12px 0;
}
</style>

