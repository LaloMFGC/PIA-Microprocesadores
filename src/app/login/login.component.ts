import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor( private router: Router) { }

  ngOnInit(): void {
  }

  login(){
    Swal.fire({
      title: 'Inicio de Sesión Exitoso',
      text: 'Cámara Encendida',
      icon: 'success',
      confirmButtonText: 'Aceptar'
    });
    this.router.navigateByUrl('/dashboard');
  }

}
