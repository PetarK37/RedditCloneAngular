import { Injectable } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { InputBase } from './InputBase';


@Injectable()
export class InputFormGenerator{
    toFormGroup(inputs: InputBase<string|number>[]){
        const group : any = {}

        inputs.forEach(input => {
            group[input.key] = input.required ? new FormControl(input.value || '', Validators.required)
            : new FormControl(input.value || '');
});
return new FormGroup(group);
    }
}