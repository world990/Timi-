<template>
  <div>
    <Layout class-prefix="layout">
      <NumberPad @update:value="onUpdateAmount" @submit="saveRecord"/>
      <Types :value.sync="record.type"/>
      <div class="notes">
        <InputItem field-name="备注" @update:value="onUpdateNotes" placeholder="在这里输入备注呀"/>
      </div>
      <Tags :data-source.sync="tags" @update:value="onUpdateTags"/>
    </Layout>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import NumberPad from '@/components/Money/NumberPad.vue';
import Types from '@/components/Money/Types.vue';
import InputItem from '@/components/Money/InputItem.vue';
import Tags from '@/components/Money/Tags.vue';
import {Component} from 'vue-property-decorator';


@Component({
      components:
          {Tags, InputItem, Types, NumberPad}
    }
)
export default class Money extends Vue {
  tags = window.tagList;
  recordList = window.recordList;
  record: RecordItem = {
    tags: [], notes: '', type: '-', amount: 0
  };

  onUpdateTags(value: string[]) {
    this.record.tags = value;
  }

  onUpdateNotes(value: string) {
    this.record.notes = value;

  }

  onUpdateAmount(value: string) {
    this.record.amount = parseFloat(value);
  }

  saveRecord() {
    window.createRecord(this.record);
  }

}
</script>
<style lang="scss">
.layout-content {
  display: flex;
  flex-direction: column-reverse;
}

.notes {
  padding: 12px 0;
}
</style>
