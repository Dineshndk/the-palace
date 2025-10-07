import { Component, HostListener, Input, OnInit, signal } from '@angular/core';
import { NavigationEnd, NavigationError, Router, RouterOutlet } from '@angular/router';
import { Header } from './components/header/header';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { CommonModule } from '@angular/common';
import { flatMap } from 'rxjs';
import { NgxSpinnerComponent } from 'ngx-spinner';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,Header,MatToolbarModule,MatIconModule,MatButtonModule,MatSidenavModule,CommonModule,
    NgxSpinnerComponent
  ],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App implements OnInit {
  protected readonly title = signal('ThePalace');
  
  public iTopPosToStartShowing:number= 100;

  public isExpanded:boolean = true;
  public bIsAppScreen:boolean = false;
  public bIsScrollZero:boolean = true;
  
  public CurrentURL:string = "";
  /**
   *
   */
  constructor(private router:Router) {
    
    this.router.events.subscribe((res) => { 
    if(res instanceof NavigationEnd){
        this.CurrentURL = res.url.replace("/","");
        //console.log(this.CurrentURL,"Current URL");
      }
});

  }

  ngOnInit(): void {
    //this.router.navigate["login"];
  }
@HostListener('window:scroll')
checkScroll(){
  const scrollPos:any = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;

  this.bIsScrollZero = (scrollPos >= this.iTopPosToStartShowing) ? false : true;
}

@HostListener("window:resize", []) updateDays() {
    if (window.innerWidth >= 1200) {
      this.bIsAppScreen =false; // lg
    } else if (window.innerWidth >= 992) {
      this.bIsAppScreen =false;//md
    } else if (window.innerWidth  >= 768) {
      this.bIsAppScreen =true;//sm
    } else if (window.innerWidth < 768) {
      this.bIsAppScreen =true;//xs
    }
    
  }
  
  goToScroll(){
    window.scroll({
      top:0,
      left:0,
      behavior: 'smooth'
    });
  }

}
