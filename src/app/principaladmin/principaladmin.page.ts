import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-principaladmin',
  templateUrl: './principaladmin.page.html',
  styleUrls: ['./principaladmin.page.scss'],
})
export class PrincipaladminPage implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }

  onClickAbrirEmpresas(){
    this.router.navigateByUrl("mostrarempresasadmin");
  }
  onClickAbrirAlumnos(){
    this.router.navigateByUrl("mostraralumnosadmin");
  }

  onClickClose(){
    sessionStorage.removeItem("user");
    sessionStorage.removeItem("userId");
    this.router.navigateByUrl('/home');
  }
}
