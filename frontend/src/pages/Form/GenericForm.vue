<template>
  <q-page class="row items-center justify-evenly">
    <q-dialog
      v-model="store.isDialogOpen"
      persistent
      maximized
      transition-show="slide-up"
      transition-hide="slide-down"
    >
      <q-card class="bg-white text-black">
        <q-bar>
          <q-space />
          <q-btn dense flat icon="close" v-close-popup>
            <q-tooltip class="bg-white text-primary">{{
              $t('close_btn')
            }}</q-tooltip>
          </q-btn>
        </q-bar>

        <q-card-section>
          <form-maker
            :form="store.getForm"
            @update-value="onValueUpdate"
            @save="onSave"
            @reset="onReset"
          ></form-maker>
        </q-card-section>
      </q-card>
    </q-dialog>
    <desktop-menu class="desktop-only"></desktop-menu>
  </q-page>
</template>

<script lang="ts">
import * as Objects from 'src/data/forms/index';
import FormMaker from 'src/components/Form/FormMaker.vue';
import DesktopMenu from 'src/components/Menu/DesktopMenu.vue';
import { formStore } from 'src/stores/form-store';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'GenericForm',
  components: { FormMaker, DesktopMenu },
  props: {
    id: {
      type: String,
      required: true,
    },
  },
  methods: {
    onValueUpdate(value: string, index: number) {
      this.store.setImageItem(index, value);
    },
    onSave() {
      console.log('Salvar');
    },
    onReset() {
      this.store.resetForm();
    },
  },
  mounted() {
    Object.entries(Objects).forEach(([key, value]) => {
      if (key.toLowerCase() === this.id.toLowerCase()) {
        this.store.setForm(value);
        this.store.toggleWindow(true);
      }
    });
  },
  setup() {
    const store = formStore();
    return {
      store,
    };
  },
});
</script>
