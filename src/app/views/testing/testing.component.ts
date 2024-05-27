import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-nuevo',
  templateUrl: './testing.component.html',
  styleUrls: ['./testing.component.css']
})
export class TestingComponent implements OnInit {
  selectedOptions: { [key: string]: string } = {}; // Objeto para almacenar las selecciones

  constructor(private http: HttpClient, private router: Router) {}

  ngOnInit() {}

  testDashboard() {
    this.router.navigate(['nuevo']);
  }

  editarUsuario(id: any) {
    console.log(id);
    this.router.navigate(['edit', id]);
  }

  nuevoUsuario() {
    this.router.navigate(['nuevo']);
  }

  testing() {
    this.router.navigate(['testing']);
  }

  myData() {
    this.router.navigate(['myData']);
  }

  close() {
    this.router.navigate(['login']);
  }

  // Método para manejar la opción seleccionada
  handleOptionSelected(optionKey: string, optionValue: string) {
    this.selectedOptions[optionKey] = optionValue;
    console.log(JSON.stringify(this.selectedOptions));
  }

  // Métodos para manejar los clics en las opciones del dropdown
  Sports(option: string) {
    this.handleOptionSelected('Sports', option);
  }

  Basketball() {
    this.handleOptionSelected('Basketball', 'Basketball');
  }

  Football() {
    this.handleOptionSelected('Football', 'Football');
  }

  // Método para enviar las selecciones a la API
  sendSelections() {
    const endpoint = 'https://tu-api-endpoint.com';
    const data = this.selectedOptions;

    // Mostrar en consola antes de enviar
    console.log('Endpoint:', endpoint);
    console.log('JSON data:', JSON.stringify(data, null, 2));

    // Enviar la petición POST
    this.http.post(endpoint, data)
      .subscribe(response => {
        console.log('Datos enviados con éxito:', response);
      }, error => {
        console.error('Error al enviar los datos:', error);
      });
  }
}
