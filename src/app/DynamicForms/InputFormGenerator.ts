import { Injectable } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { InputBase } from './InputBase';
import { ValidatorFn, AbstractControl } from '@angular/forms';


@Injectable()
export class InputFormGenerator{
    toFormGroup(inputs: InputBase<string|number>[]){
        const group : any = {}

        inputs.forEach(input => {
            group[input.key] = input.required ? new FormControl(input.value || '', input.type === 'number' ?  [Validators.required , Validators.pattern(/^\d+$/)] : Validators.required)
            : new FormControl(input.value || '',input.type === 'number' ? Validators.pattern(/^\d+$/) : null);
});
return new FormGroup(group);
    }

    getFeild( name : string) : InputBase<string|number>[]{
        if(name.includes('avgKarma')){
          return [this.feilds['avgKarmaFrom'],this.feilds['avgKarmaTo']]
        }else if(name.includes('postCount')){
          return [this.feilds['postCountFrom'],this.feilds['postCountTo']]
        }else if(name.includes('commentCount')){
          return [this.feilds['commentCountFrom'],this.feilds['commentCountTo']]
        }else if(name.includes('postKarma')){
          return [this.feilds['postKarmaFrom'],this.feilds['postKarmaTo']]
        }else{
          return [this.feilds[name as keyof object]]
        }
    }
    
    feilds = {
      'communityName' : new InputBase<string>({
        key: "communityName",
        placeHolder: "Community name",
        type: "text",
        order: 1,
        required: true,
        value: "",
        controlType:'one-row'
      }),

      'communityDesc': new InputBase<string>({
        key: "communityDesc",
        placeHolder: "Community description",
        type: "text",
        order: 2,
        required: true,
        value: "",
        controlType: "one-row"
      }),

      'communityDescPdf':new InputBase<string>({
        key: "communityDescPdf",
        placeHolder: "Community PDF description",
        type: "text",
        order: 3,
        required: true,
        value: "",
        controlType: "one-row"
      }),
      communityRules: new InputBase<string>({
        key: "communityRules",
        placeHolder: "Community rules",
        type: "text",
        order: 4,
        required: true,
        value: "",
        controlType: "one-row"
      }),
      'postCountFrom' : new InputBase<number>({
        key: "postCountFrom",
        placeHolder: "Posts count from",
        type: "number",
        order: 5,
        required: true,
        value: 0,
        controlType: "side-by-side"
      }),
      'postCountTo' : new InputBase<number>({
        key: "postCountTo",
        placeHolder: "Posts count to",
        type: "number",
        order: 6,
        required: true,
        value: 0,
        controlType: "side-by-side"
      }),
      'avgKarmaFrom' : new InputBase<number>({
        key: "avgKarmaFrom",
        placeHolder: "Avg karma from",
        type: "number",
        order: 6,
        required: true,
        value: 0,
        controlType: "side-by-side"
      }),
      'avgKarmaTo' : new InputBase<number>({
        key: "avgKarmaTo",
        placeHolder: "Avg karma to",
        type: "number",
        order: 7,
        required: true,
        value: 0,
        controlType: "side-by-side"
      }), 
      'postTitle' : new InputBase<string>({
        key: "postTitle",
        placeHolder: "Post title",
        type: "text",
        order: 1,
        required: true,
        value: "",
        controlType:'one-row'
      }), 
      'postTxt' : new InputBase<string>({
        key: "postTxt",
        placeHolder: "Post txt",
        type: "text",
        order: 2,
        required: true,
        value: "",
        controlType: "one-row"
      }), 
      'postTxtPdf' :  new InputBase<string>({
        key: "postTxtPdf",
        placeHolder: "Community PDF description",
        type: "text",
        order: 3,
        required: true,
        value: "",
        controlType: "one-row"
      }),
      'postCommentsTxt' :  new InputBase<string>({
        key: "postCommentsTxt",
        placeHolder: "Comments txt",
        type: "text",
        order: 4,
        required: true,
        value: "",
        controlType: "one-row"
      }),
      'postKarmaFrom' : new InputBase<number>({
        key: "postKarmaFrom",
        placeHolder: "Post karma from",
        type: "number",
        order: 5,
        required: true,
        value: 0,
        controlType: "side-by-side"
      }),
      'postKarmaTo' : new InputBase<number>({
        key: "postKarmaTo",
        placeHolder: "Posts karma to",
        type: "number",
        order: 6,
        required: true,
        value: 0,
        controlType: "side-by-side"
      }),
      'commentCountFrom' : new InputBase<number>({
        key: "commentCountFrom",
        placeHolder: "Comment count from",
        type: "number",
        order: 6,
        required: true,
        value: 0,
        controlType: "side-by-side"
      }),
      'commentCountTo' : new InputBase<number>({
        key: "commentCountTo",
        placeHolder: "Comment count to",
        type: "number",
        order: 7,
        required: true,
        value: 0,
        controlType: "side-by-side"
      }),
      'postFlair' :  new InputBase<string>({
        key: "postFlair",
        placeHolder: "Flair",
        type: "text",
        order: 8,
        required: true,
        value: "",
        controlType: "one-row"
      })
    }
}