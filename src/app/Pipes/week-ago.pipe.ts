import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'weekAgo'
})
export class WeekAgoPipe implements PipeTransform {

  transform(date: string): String {
    let date1 =  new Date().getTime() 
    let date2  = new Date(date).getTime();
    
    let calc;

    if (date1 > date2){
        calc = new Date(date1 - date2) ;
    }else{
        calc = new Date(date2 - date1) ;
    }

    let numOfdays = calc.getDate() - 1 ;
    if (numOfdays == 0){
      return "Today";
    }
    else if(numOfdays < 7){
      return numOfdays + "d ago";
    } 
   
    return Math.round(numOfdays/7) + "w ago";
  }

}
