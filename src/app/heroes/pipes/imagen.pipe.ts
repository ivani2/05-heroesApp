import { Pipe, PipeTransform } from '@angular/core';
import { Heroe } from '../interfaces/heroes.interface';

@Pipe({
  name: 'imagen'
})
export class ImagenPipe implements PipeTransform {

  transform(heroe: Heroe): string {
    if( heroe.id!='5gcoCth'&&heroe.id!=null ){
      return `assets/heroes/${ heroe.id }.jpg`
    }else{
      return `assets/no-image.png `;
    }
    
  }

}
