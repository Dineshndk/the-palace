import { Component } from '@angular/core';
import { ApiserviceService } from '../../services/apiservice.service';
import { ReserveTable } from '../../models/ReserveTable';

@Component({
  selector: 'app-booking',
  imports: [],
  templateUrl: './booking.html',
  styleUrl: './booking.scss'
})
export class Booking {

  public sBookingId:string="PAL-2025-0003";

  public arBookingDetails:any={};

  constructor(private apiService:ApiserviceService) {
    this.getBookingDetails();
  }

  private getBookingDetails(){
    this.apiService.GetBookingDetails(this.sBookingId).subscribe((data : any)=>{
      if(data != null)         
       { 
        if(data.length > 0)        
          this.arBookingDetails = data[0];
        }
      });  
  }
}
