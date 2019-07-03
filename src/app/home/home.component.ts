import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  array = [{name:"Home",path:"Home"},{name:"Payment",path:"/Payment"}];

  constructor(private router:Router) {}
  
  
  onLogin(){this.router.navigateByUrl("Payment")}
  ngOnInit(){

  } 

  
   
  }

