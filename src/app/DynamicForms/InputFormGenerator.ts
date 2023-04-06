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

    community_name = new InputBase<string>({
        key: "communityName",
        placeHolder: "Community name",
        type: "text",
        order: 1,
        required: true,
        value: "",
        controlType:'one-row'
      })

    community_description = new InputBase<string>({
        key: "communityDesc",
        placeHolder: "Community description",
        type: "text",
        order: 2,
        required: true,
        value: "",
        controlType: "one-row"
      })

    community_description_pdf =  new InputBase<string>({
        key: "communityDescPdf",
        placeHolder: "Community PDF description",
        type: "text",
        order: 3,
        required: true,
        value: "",
        controlType: "one-row"
      })
    community_rules =  new InputBase<string>({
        key: "communityRules",
        placeHolder: "Community rules",
        type: "text",
        order: 4,
        required: true,
        value: "",
        controlType: "one-row"
      })
    community_post_count_from = new InputBase<number>({
        key: "postCountFrom",
        placeHolder: "Posts count from",
        type: "number",
        order: 5,
        required: true,
        value: 0,
        controlType: "side-by-side"
      })
    community_post_count_to = new InputBase<number>({
        key: "postCountTo",
        placeHolder: "Posts count to",
        type: "number",
        order: 6,
        required: true,
        value: 0,
        controlType: "side-by-side"
      })
      commnity_karma_from = new InputBase<number>({
        key: "avgKarmaFrom",
        placeHolder: "Avg karma from",
        type: "number",
        order: 6,
        required: true,
        value: 0,
        controlType: "side-by-side"
      })
      community_karma_to = new InputBase<number>({
        key: "avgKarmaTo",
        placeHolder: "Avg karma to",
        type: "number",
        order: 7,
        required: true,
        value: 0,
        controlType: "side-by-side"
      })
    getCommunityFeilds() : InputBase<string|number>[]{
        return [new InputBase<string>({
            key: "communityName",
            placeHolder: "Community name",
            type: "text",
            order: 1,
            required: true,
            value: "",
            controlType:'one-row'
          }),
          new InputBase<string>({
            key: "communityDesc",
            placeHolder: "Community description",
            type: "text",
            order: 2,
            required: true,
            value: "",
            controlType: "one-row"
          }),
          new InputBase<string>({
            key: "communityDescPdf",
            placeHolder: "Community PDF description",
            type: "text",
            order: 3,
            required: true,
            value: "",
            controlType: "one-row"
          }),
          new InputBase<string>({
            key: "communityRules",
            placeHolder: "Community rules",
            type: "text",
            order: 4,
            required: true,
            value: "",
            controlType: "one-row"
          }),new InputBase<number>({
            key: "postCountFrom",
            placeHolder: "Posts count from",
            type: "number",
            order: 5,
            required: true,
            value: 0,
            controlType: "side-by-side"
          }),new InputBase<number>({
            key: "postCountTo",
            placeHolder: "Posts count to",
            type: "number",
            order: 6,
            required: true,
            value: 0,
            controlType: "side-by-side"
          }),new InputBase<number>({
            key: "avgKarmaFrom",
            placeHolder: "Avg karma from",
            type: "number",
            order: 6,
            required: true,
            value: 0,
            controlType: "side-by-side"
          }),new InputBase<number>({
            key: "avgKarmaTo",
            placeHolder: "Avg karma to",
            type: "number",
            order: 7,
            required: true,
            value: 0,
            controlType: "side-by-side"
          })]
    }
}