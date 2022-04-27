import { environment } from './../../environments/environment.prod';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import Swal from 'sweetalert2';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  address = environment.address + "watch?password=sysadminChocokrispis2&haar=face"
  downloadAddress = ""
  files : any

  constructor(private router: Router,  private http: HttpClient) { }

  ngOnInit(): void {
    this.updateFiles()
  }

  logout(){
    Swal.fire({
      title: 'Sesión Expirada',
      text: 'Gracias por su visita',
      icon: 'success',
      confirmButtonText: 'Aceptar'
    });
    this.router.navigateByUrl('/login');
  }

  selectChangeHandlerHaar (event: any) {
    this.address = environment.address + "watch?password=sysadminChocokrispis2&haar=" +event.target.value
  }

  updateFiles(){
    this.http.get(environment.address+"files").subscribe((res)=>
    {
      this.files = res
      this.downloadAddress = environment.address+"serve?file="+this.files[0]
    })

  }

  selectChangeHandlerDownload (event: any){
    this.downloadAddress = environment.address+"serve?file="+event.target.value
  }

  descargar(){
    console.log(this.downloadAddress)
    window.open(this.downloadAddress, "_blank");
  }

}
