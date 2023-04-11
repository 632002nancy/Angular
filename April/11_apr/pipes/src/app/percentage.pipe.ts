import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name:'percentage'
})
export class PercentagePipe implements PipeTransform{  //creating pipe
    transform(value: number, totalMarks:number, decimal:number) {  //first parameter receives the value to which we want to use custompipe and rest recieves the arguments
        return ((value/totalMarks)*100).toFixed(decimal);
    }
}