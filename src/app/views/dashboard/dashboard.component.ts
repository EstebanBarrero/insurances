import { Component, OnInit } from '@angular/core';
//import { ApiService } from '../../services/api/api.service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})

export class DashboardComponent implements OnInit {

  constructor(private http: HttpClient/*,private api: ApiService*/, private router: Router,) {
  }

  testing(){
    this.router.navigate(['testing']);
  }

  myData(){
    this.router.navigate(['myData']);
  }

  ngOnInit() {
  }

  nuevoUsuario() {
    this.router.navigate(['nuevo']);
  }

  close() {
    this.router.navigate(['login']);
  }

}
