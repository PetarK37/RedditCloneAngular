export class InputBase<T>{
    value: T|undefined;
    key: string;
    label: string;
    placeHolder: string;
    required: boolean;
    type: string;
    controlType: string;
    order: number;


 constructor(options: {
      value?: T;
      key?: string;
      label?: string;
      placeHolder? : string;
      required?: boolean;
      order?: number;
      controlType?: string;
      type?: string;
    } = {}) {
    this.value = options.value;
    this.key = options.key || '';
    this.label = options.label || '';
    this.required = !!options.required;
    this.controlType = options.controlType || '';
    this.type = options.type || '';
    this.placeHolder = options.placeHolder || '';
    this.order = options.order || 1
  }
}