import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { JsonPipe } from '@angular/common';
import { Router } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  user:any;
  token:any;
  constructor(private router:Router, private httpService:HttpClient){}
  
  ngOnInit(): void {
   
   
  }
 



}
