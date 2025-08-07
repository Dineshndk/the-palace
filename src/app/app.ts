import { Component, OnInit, signal } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { Header } from './components/header/header';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,Header,MatToolbarModule,MatIconModule,MatButtonModule,MatSidenavModule,CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App implements OnInit {
  protected readonly title = signal('ThePalace');
  
  public isExpanded:boolean = true;
  public isAppScreen:boolean = false;
  /**
   *
   */
  constructor(private router:Router) {
    
  }

  ngOnInit(): void {
    //this.router.navigate["login"];
  }

}
