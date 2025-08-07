import { CommonModule, NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import { MatToolbarModule} from '@angular/material/toolbar';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule,MatToolbarModule,MatIconModule,MatButtonModule,RouterModule],
  templateUrl: './header.html',
  styleUrl: './header.scss'
})
export class Header {

  public arApps:any[] = [{"name": "Home", "path":"/home"},
    {"name": "Menu", "path":"/menu"},
    {"name": "Order online", "path":"orderonline"},
    {"name": "Reservation", "path":"Reservation"},
    {"name": "Contact us", "path":"contactus"},
    //{"name": "Login", "path":"login"},
  ];
  /**
   *
   */
  constructor(private router:Router) {
    
    
  }
}
