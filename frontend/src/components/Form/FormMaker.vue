<template>
  <div class="q-pa-md">
    <div class="q-gutter-md">
      <div
        v-for="(field, index) in form.itens"
        :key="index"
        :class="
          `${field.className} ` + field.columns ? `col-${field.columns}` : `col`
        "
      >
        <q-input
          v-if="field.type === 'text'"
          v-model="field.value"
          :placeholder="field.placeholder"
          :label="field.label"
          :disable="field.disabled"
          :hidden="field.hidden"
          @click="field.onClick"
        ></q-input>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import { IFormModel } from './models';

export default defineComponent({
  name: 'FormMaker',
  props: {
    form: {
      type: Object as () => IFormModel,
      required: true,
    },
  },
  setup() {
    const itemType = ref([
      'text',
      'textarea',
      'select',
      'checkbox',
      'radio',
      'date',
      'time',
      'datetime',
      'file',
    ]);
    return { itemType };
  },
});
</script>
