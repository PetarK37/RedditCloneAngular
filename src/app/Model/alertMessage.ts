import { createAnimation } from "@ionic/angular";

export interface AlertMessage {
    text: string;
    type: AlertType;

}
 


export enum AlertType {
    success,
    info,
    warning
}


