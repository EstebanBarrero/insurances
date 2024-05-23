import { Component, OnInit } from '@angular/core';
//import { ApiService } from '../../services/api/api.service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-nuevo',
  templateUrl: './testing.component.html',
  styleUrls: ['./testing.component.css']
})
export class TestingComponent implements OnInit {
  constructor(private http: HttpClient, private router: Router) {
  }

  //cambiar a dashboard de roles
  rolesDashboard() {
    this.router.navigate(['dashboard-roles']);
  }

  testDashboard(){
    this.router.navigate(['nuevo']);
  }

  editarUsuario(id: any) {
    console.log(id)
    this.router.navigate(['edit', id]);
  }

  nuevoUsuario() {
    this.router.navigate(['nuevo']);
  }

  testing(){
    this.router.navigate(['testing']);
  }

  myData(){
    this.router.navigate(['myData']);
  }


  close() {
    this.router.navigate(['login']);
  }

  actionMessage: string = '';

  // Función que se ejecuta cuando se selecciona "All Sports"
  Sports(sport: string) {
    console.log(sport + " seleccionado");
  }


  // Función que se ejecuta cuando se selecciona "Basketball"
  Basketball() {
    console.log("Basketball seleccionado");
  }

  // Función que se ejecuta cuando se selecciona "Football"
  Football() {
    console.log("Football seleccionado");
  }


  ngOnInit() {
  }
}

