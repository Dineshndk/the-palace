import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { SharedModule } from './../../modules/shared/shared.module';
import { FormBuilder, FormControl, FormGroup, Validators,FormsModule,ReactiveFormsModule } from '@angular/forms';
import { ApiserviceService } from '../../services/apiservice.service';
import { ReservationSlotTime } from '../../models/ReservationSlotTime';
import { ToastrService } from 'ngx-toastr';
import { ReserveTable } from '../../models/ReserveTable';
import { MatSelectChange } from '@angular/material/select';
import { ReservationDiningType } from '../../models/ReservationDiningType';

@Component({
  selector: 'app-reservation',
  imports: [CommonModule,SharedModule,FormsModule,ReactiveFormsModule],
  templateUrl: './reservation.html',
  styleUrl: './reservation.scss'
})
export class Reservation implements OnInit {
  ReservationForm:FormGroup;
  DiningTypeControl = new FormControl('',Validators.required);
  TimeSlotControl = new FormControl('',Validators.required);

  CustomDatepipe = new DatePipe('en-US');
  public arDiningType:ReservationDiningType[] = [];
  public arTimeSlot:ReservationSlotTime[] = [
    /* {"FTimeSlot": "12.30 PM","TimeSlotId":"12" },
    {"FTimeSlot": "01.30 PM","TimeSlotId":"1" },
    {"FTimeSlot": "07.30 PM","TimeSlotId":"7" },
    {"FTimeSlot": "08.30 PM","TimeSlotId":"8" },
    {"FTimeSlot": "09.30 PM","TimeSlotId":"9" } */
  ];

  public GuestCount:number = 2;
  public GuestDisplayValue:string = "";
  public sSelectedTimeSlot:string = "";
  public sSelectedDiningType:string = "";

  public minDate:any = new Date();
  /**
   *
   */
  constructor(public formBuilder:FormBuilder,private apiService:ApiserviceService,private toastr:ToastrService
    ,private cdref: ChangeDetectorRef) {
    this.ReservationForm = formBuilder.group({
      reservedByName: new FormControl('',Validators.required),
      mobile: new FormControl('', [Validators.required,Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]),
      email: new FormControl('',[Validators.required,Validators.email]),
    guestCount: new FormControl('', [Validators.maxLength(10)]),
      reserveDate: new FormControl('',Validators.required),
      diningTypeId: this.DiningTypeControl,
      timeSlotId: this.TimeSlotControl,

    }
    );    
  }
  
    ngOnInit(){
    this.setGuestDisplayValue();
    this.getMasterdata();
  }
  
  AddGuestCount(bIsAdd:boolean=false){
    this.GuestCount = (bIsAdd == true) ?  this.GuestCount + 1 : this.GuestCount - 1;
    
    this.setGuestDisplayValue();
  }

  private setGuestDisplayValue(){
    this.GuestDisplayValue = ' guest' + (this.GuestCount > 1 ? 's' : '');
  }

  private getMasterdata(){
    this.apiService.GetReservationMasterData().subscribe((data : any)=>{
      if(data != null)         
       { 
        if(data.hasOwnProperty("diningTypes"))        
          this.arDiningType = data["diningTypes"];
        if(data.hasOwnProperty("timeSlots"))        
          this.arTimeSlot = data["timeSlots"];
        }
      });  
  }

  public onChangeTimeSlot(event: MatSelectChange) {
    this.sSelectedTimeSlot = event.source.triggerValue;
  }

  public onChangeDiningType(event: MatSelectChange) {
    this.sSelectedDiningType = event.source.triggerValue;
  }

  public reserveTable(): void {
    if (this.ReservationForm.invalid) {
        // stop here if it's invalid
        this.toastr.warning('Invalid input');
        return;
    }
    else{
      let arReservation:ReserveTable = this.ReservationForm.getRawValue();
      let sReserveDate = this.CustomDatepipe.transform(arReservation.reserveDate,"yyyy-MM-dd");
      
      arReservation.reserveDate = sReserveDate != null ? sReserveDate : arReservation.reserveDate;
      arReservation.FTimeSlot = this.sSelectedTimeSlot;
      arReservation.FDiningType = this.sSelectedDiningType;

      this.apiService.ReserveTable(arReservation)
        .subscribe((res:any): any => {
          if(res != null && res["statusCode"] == 200){
            this.toastr.success(res["message"]);
            this.resetForm();
          }
          else
            this.toastr.warning(res["message"]);
        });
      }
  }

  public resetForm(){
    this.ReservationForm.reset({"guestCount":2});
    this.setGuestDisplayValue();
  }

  ngAfterContentChecked() {

    this.cdref.detectChanges();

  }
}
