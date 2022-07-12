<template>
  <q-page class="row items-center justify-evenly">
    <q-dialog
      v-model="dialog"
      persistent
      :maximized="maximizedToggle"
      transition-show="slide-up"
      transition-hide="slide-down"
    >
      <q-card class="bg-white text-black">
        <q-bar>
          <q-space />
          <q-btn dense flat icon="close" v-close-popup>
            <q-tooltip class="bg-white text-primary">Close</q-tooltip>
          </q-btn>
        </q-bar>

        <q-card-section>
          <form-maker
            :form="formulario"
            @update-value="onValueUpdate"
          ></form-maker>
        </q-card-section>
      </q-card>
    </q-dialog>
    <desktop-menu class="desktop-only"></desktop-menu>
  </q-page>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import DesktopMenu from '../components/Menu/DesktopMenu.vue';
import FormMaker from '../components/Form/FormMaker.vue';

export default defineComponent({
  name: 'IndexPage',
  components: { DesktopMenu, FormMaker },
  methods: {
    onValueUpdate(value: any, index: number) {
      this.formulario.itens[index].value = value;
    },
  },
  setup() {
    const dialog = ref(true);
    const formulario = ref({
      title: 'Cadastro de produto',
      itens: [
        {
          id: '',
          label: 'Nome do Produto',
          type: 'text',
          value: '',
          columns: '12',
        },
        {
          id: '',
          label: 'Descrição',
          type: 'textarea',
          value: '',
          columns: '12',
        },
        {
          id: '',
          label: 'Preço',
          type: 'text',
          value: '',
          columns: '6',
        },
        {
          id: '',
          label: 'Imagem',
          type: 'file',
          value: '',
          columns: '12',
        },
      ],
    });
    const maximizedToggle = ref(true);
    const openDialog = () => {
      dialog.value = true;
    };
    return {
      formulario,
      dialog,
      maximizedToggle,
      openDialog,
    };
  },
});
</script>
