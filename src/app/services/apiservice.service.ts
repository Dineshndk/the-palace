import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { ReservationSlotTime } from '../models/ReservationSlotTime';
import { apiserviceURL } from '../constants/apiserviceURL';
import { ReserveTable } from '../models/ReserveTable';

@Injectable({
  providedIn: 'root'
})
export class ApiserviceService {

  public bIsReservation = new BehaviorSubject<boolean>(false);
  
  constructor(private httpClient:HttpClient) { 
    
  }

  //Get reservation slot time
  GetReservationMasterData(): Observable<any[]>{
    const EndPoint = apiserviceURL.Reservation_url + "/GetMasterData";

    return this.httpClient.get<any[]>(EndPoint);
  }

  //Get reservation slot time
  ReserveTable(arReserveTable:ReserveTable): Observable<ReservationSlotTime[]>{
    const EndPoint = apiserviceURL.Reservation_url + "/ReserveTable";

    return this.httpClient.post<ReservationSlotTime[]>(EndPoint,arReserveTable);
  }

  //Get reservation slot time
  GetBookingDetails(sBookingId:string): Observable<ReserveTable[]>{
    const EndPoint = apiserviceURL.Reservation_url + "/GetBookingDetails?BookingId=" + sBookingId;

    return this.httpClient.post<ReserveTable[]>(EndPoint,{});
  }
  
}
