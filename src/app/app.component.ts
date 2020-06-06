import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 nombre = 'capitan America';
 nombre2 = 'rOBERTO gUTIERREZ GALIano';
 arreglo = [ 1 , 2, 3, 4, 5, 6, 7, 8, 9 , 10];
 PI = Math.PI;
 porcentaje = 0.1251369;
 salario = 1225.36;
 fecha = new Date(1971, 2 , 1);
 idioma = 'es';
 oculta = false;
 videoUrl = 'https://www.youtube.com/embed/Cfv_b21bA1U';
 heroe = {
  nombre: 'Roberto',
  clave: 'genius',
  level: 505,
  direccion: {
    calle: 'alta',
    ciudad: 'Buena'
  }
};
valorPromesa = new Promise<string>( (resolve) => {
  setTimeout( () => {
    resolve('paso el tiempo');
  }, 3500);
});

changeL(res: string)  {
this.idioma = res;
}

}




