<template>
  <div class="q-pa-md">
    <div class="text-h6">{{ form.title }}</div>
    <q-card class="q-pa-sm">
      <div class="row">
        <q-separator></q-separator>
        <div
          v-for="(field, index) in form.itens"
          :key="index"
          :class="
            `${field.className} ` + field.columns
              ? `col-${field.columns}`
              : `col`
          "
        >
          <q-input
            v-if="field.type === 'text'"
            class="q-pa-sm"
            outlined
            type="text"
            v-model="field.value"
            :clearable="field.clearable"
            :placeholder="field.placeholder"
            :label="field.label"
            :mask="field.mask"
            fill-mask
            :disable="field.disabled"
            :hidden="field.hidden"
            @click="field.onClick"
          ></q-input>
          <q-input
            v-if="field.type === 'password'"
            class="q-pa-sm"
            outlined
            :type="field.isPwd ? 'password' : 'text'"
            v-model="field.value"
            :clearable="field.clearable"
            :placeholder="field.placeholder"
            :label="field.label"
            :disable="field.disabled"
            :hidden="field.hidden"
            @click="field.onClick"
          >
            <template v-slot:append>
              <q-icon
                :name="field.isPwd ? 'visibility_off' : 'visibility'"
                class="cursor-pointer"
                @click="field.isPwd = !field.isPwd"
              />
            </template>
          </q-input>
          <q-input
            v-if="field.type === 'date'"
            class="q-pa-sm"
            outlined
            v-model="field.value"
            :type="field.type"
            :clearable="field.clearable"
            :placeholder="field.placeholder"
            :hint="field.label"
            :disable="field.disabled"
            :hidden="field.hidden"
            @click="field.onClick"
          >
          </q-input>
          <q-input
            v-if="field.type === 'time'"
            class="q-pa-sm"
            outlined
            v-model="field.value"
            :type="field.type"
            :clearable="field.clearable"
            :placeholder="field.placeholder"
            :label="field.label"
            :disable="field.disabled"
            :hidden="field.hidden"
            @click="field.onClick"
          >
          </q-input>
          <q-input
            v-if="field.type === 'textarea'"
            class="q-pa-sm"
            outlined
            v-model="field.value"
            :type="field.type"
            :clearable="field.clearable"
            :placeholder="field.placeholder"
            :label="field.label"
            :disable="field.disabled"
            :hidden="field.hidden"
            @click="field.onClick"
          >
          </q-input>
          <q-uploader
            v-if="field.type === 'file'"
            class="q-pa-sm"
            outlined
            :placeholder="field.placeholder"
            :label="field.label"
            :disable="field.disabled"
            :hidden="field.hidden"
            @added="onAdded($event, index)"
          />
        </div>
      </div>
    </q-card>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { IFormModel } from './models';

export default defineComponent({
  name: 'FormMaker',
  props: {
    form: {
      type: Object as () => IFormModel,
      required: true,
    },
  },
  methods: {
    onAdded(files: any, index: any) {
      const reader = new FileReader();
      reader.readAsDataURL(files[0]);
      reader.onload = () => {
        this.$emit('update-value', reader.result, index);
      };
    },
  },
  setup() {
    return {};
  },
});
</script>
