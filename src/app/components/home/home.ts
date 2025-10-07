import { CommonModule } from '@angular/common';
import { Component, ElementRef, OnInit, QueryList, viewChild,ViewChildren } from '@angular/core';
import { IvyCarouselModule } from 'angular-responsive-carousel';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-home',
  imports: [CommonModule],
  templateUrl: './home.html',
  styleUrl: './home.scss'
  
})
export class Home implements OnInit{
  @ViewChildren('carouselItem') carouselItem!: QueryList<ElementRef>
  @ViewChildren('carouselIndicators') carouselIndicators!: QueryList<ElementRef>

  public arCarousels:any[] = [
    {"imageUrl":"home-01"},
    {"imageUrl":"master-slides-01"},
    {"imageUrl":"master-slides-02"}
  ];

  public arDinningItems:any[] = [
    {"imageUrl":"Toproof-dinning.jpg","Title":"The Royal Dine","Comments":"Fine dining with global flair"},
    {"imageUrl":"Cafe-dinning.jpg","Title":"The Garden Café","Comments":"Outdoor coffee & brunch spot"},
    {"imageUrl":"Toproof-dinning-01.jpg","Title":"SkyBar Lounge","Comments":"Rooftop cocktails with a view"}
  ];

  constructor(private toastr:ToastrService,private spinnerService: NgxSpinnerService) {
    
  }
  
  ngOnInit(): void {
    /* setTimeout(()=>{
      this.carouselItem.first.nativeElement.classList.add("active");
      this.carouselIndicators.first.nativeElement.classList.add("active");
      console.log(this.carouselItem);
    }   
    ); */
    setTimeout(()=>{
      this.carouselItem.first.nativeElement.classList.add("active");
      this.carouselIndicators.first.nativeElement.classList.add("active");
    })
  }

   showSuccess(){
    this.spinnerService.show();

    setTimeout(() => {
      this.spinnerService.hide();
    }, 2000); // 5 seconds
   }
}
