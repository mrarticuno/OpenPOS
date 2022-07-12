export interface IFormModel {
  title: string;
  description?: string;
  itens: IFormItemModel[];
  submit?: (value: any) => void;
}

export interface IFormItemModel {
  id: string;
  maxLength?: number;
  columns?: number;
  label: string;
  type: string;
  value: any;
  mask?: string;
  options?: any[];
  validators?: any[];
  error?: string;
  required?: boolean;
  autogrow?: boolean;
  disabled?: boolean;
  readonly?: boolean;
  clearable?: boolean;
  isPwd?: boolean;
  hidden?: boolean;
  placeholder?: string;
  className?: string;
  onChange?: (value: any) => void;
  onClick?: (value: any) => void;
  onAdded?: (info: File[]) => void;
}
