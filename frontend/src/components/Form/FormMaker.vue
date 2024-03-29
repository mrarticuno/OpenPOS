<template>
  <div class="q-pa-md">
    <div class="text-h6">{{ form.title }}</div>
    <q-card class="q-pa-sm">
      <q-card-section>
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
            <div v-if="field.type === 'multitext'">
              <q-input
                class="q-pa-sm"
                outlined
                type="text"
                v-model="multitext"
                :clearable="field.clearable"
                :placeholder="field.placeholder"
                :label="$t(field.label)"
                :mask="field.mask"
                fill-mask
                :disable="field.disabled"
                :hidden="field.hidden"
                @click="field.onClick"
                v-on:keyup.enter="replaceMultiText(index)"
              ></q-input>
              <q-chip
                v-for="(item, id) in field.value"
                :key="id"
                removable
                color="primary"
                @remove="remove(id, index)"
                text-color="white"
              >
                {{ item }}
              </q-chip>
            </div>
            <q-input
              v-if="field.type === 'text'"
              class="q-pa-sm"
              outlined
              type="text"
              v-model="field.value"
              :clearable="field.clearable"
              :placeholder="field.placeholder"
              :label="$t(field.label)"
              :mask="field.mask"
              :fill-mask="field.fill_mask"
              :reverse-fill-mask="field.reverse_fill_mask"
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
              :label="$t(field.label)"
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
              :label="$t(field.label)"
              :disable="field.disabled"
              :hidden="field.hidden"
              @click="field.onClick"
              stack-label
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
              :label="$t(field.label)"
              :disable="field.disabled"
              :hidden="field.hidden"
              @click="field.onClick"
              stack-label
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
              :label="$t(field.label)"
              :disable="field.disabled"
              :hidden="field.hidden"
              @click="field.onClick"
            >
            </q-input>
            <q-toggle
              v-if="field.type === 'toggle'"
              class="q-pa-sm"
              v-model="field.value"
              :type="field.type"
              :label="$t(field.label)"
              :disable="field.disabled"
              :hidden="field.hidden"
            >
            </q-toggle>
            <q-uploader
              v-if="field.type === 'file'"
              class="q-pa-sm"
              outlined
              :placeholder="field.placeholder"
              :label="$t(field.label)"
              :disable="field.disabled"
              :hidden="field.hidden"
              @added="onAdded($event, index)"
            />
          </div>
        </div>
      </q-card-section>
      <q-separator />

      <q-card-actions>
        <q-btn push color="primary" @click="onSave">
          <div class="row items-center no-wrap">
            <q-icon left name="save" />
            <div class="text-center">{{ $t('save_btn') }}</div>
          </div>
        </q-btn>
        <q-btn push color="red" @click="onReset">
          <div class="row items-center no-wrap">
            <q-icon left name="clear" />
            <div class="text-center">{{ $t('reset_btn') }}</div>
          </div>
        </q-btn>
      </q-card-actions>
    </q-card>
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
  methods: {
    onAdded(files: any, index: any) {
      const reader = new FileReader();
      reader.readAsDataURL(files[0]);
      reader.onload = () => {
        this.$emit('update-value', reader.result, index);
      };
    },
    onSave() {
      this.$emit('save');
    },
    onReset() {
      this.$emit('reset');
    },
    remove(id: number, index: number) {
      const nArray = this.form.itens[index].value;
      nArray.splice(id, 1);
      this.$emit('update-value', nArray, index);
    },
    replaceMultiText(index: number) {
      const nArray = [...this.form.itens[index].value];
      nArray.push(this.multitext);
      this.$emit('update-value', nArray, index);
      this.multitext = '';
    },
  },
  setup() {
    let multitext = ref('');
    return {
      multitext,
    };
  },
});
</script>
