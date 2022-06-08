import { createAnimation } from "@ionic/angular";

export interface AlertMessage {
    text: string;
    type: AlertType;

}
 
export interface ModalBox{
    text: string;
    title: string;
}


export enum AlertType {
    success,
    info,
    warning
}


