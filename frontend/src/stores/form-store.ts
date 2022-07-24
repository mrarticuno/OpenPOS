import { defineStore } from 'pinia';
import { IFormModel } from 'src/components/Form/models';

const initialState = {
  showDialog: false,
  form: {
    title: '',
    description: '',
    itens: [],
  } as IFormModel,
};

export const formStore = defineStore('form', {
  state: () => Object.assign({}, initialState),
  getters: {
    isDialogOpen: (state) => state.showDialog,
    getForm: (state) => state.form,
    getObject: (state) => {
      let obj = {};
      state.form.itens.forEach((item) => {
        obj = { ...obj, [item.id]: item.value };
      });
      return obj;
    },
  },
  actions: {
    resetForm() {
      for (const item of this.form.itens) {
        item.value = '';
      }
    },
    setForm(payload: IFormModel) {
      this.form = payload;
    },
    toggleWindow(value?: boolean) {
      if (value) {
        this.showDialog = true;
      } else {
        this.showDialog = !this.showDialog;
      }
    },
    setItem(index: number, value: any) {
      this.form.itens[index].value = value;
    },
  },
});
