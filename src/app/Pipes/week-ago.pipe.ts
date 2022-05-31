import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'weekAgo'
})
export class WeekAgoPipe implements PipeTransform {

  transform(date: number[]): String {
    let numOfdays = new Date().getDate() - new Date(date.join()).getDate();
     if (numOfdays == 0){
      return "Today";
    }
    else if(numOfdays < 7){
      return numOfdays + "d ago";
    } 
   
    return  numOfdays + "w ago";
  }

}
