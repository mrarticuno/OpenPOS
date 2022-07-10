export interface IFormModel {
  title: string;
  description: string;
  itens: IFormItemModel[];
  submit: (value: any) => void;
}

export interface IFormItemModel {
  id: string;
  maxLength?: number;
  columns?: number;
  label: string;
  name: string;
  type: string;
  value: any;
  options?: any[];
  validators?: any[];
  error?: string;
  required?: boolean;
  disabled?: boolean;
  readonly?: boolean;
  hidden?: boolean;
  placeholder?: string;
  className?: string;
  onChange?: (value: any) => void;
  onClick?: (value: any) => void;
}
