import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'mayusculas'
})
export class MayusculasPipe implements PipeTransform {

    transform( elemnt: string , enMayusculas: boolean = true) : string { 
      
        return (  enMayusculas ) ? elemnt.toUpperCase() : elemnt.toLowerCase(); 


    }

}