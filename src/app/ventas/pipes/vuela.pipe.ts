import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'vuelapipe'
})
export class VuelaPipe implements PipeTransform {

    transform(  vuela: boolean = true) : string { 
      
        return (  vuela ) ? 'Vuela' : 'No Vuela'; 

    }

}