import { Component } from '@angular/core';
import { ApiService } from '../../service/api.service';
import { Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-flights',
  standalone: true,
  imports: [RouterModule,CommonModule],
  templateUrl: './flights.component.html',
  styleUrl: './flights.component.css'
})
export class FlightsComponent {
  data: any;
  baseurl: any
  loading:any
  errorMsg: any;
  constructor(private Apiservice:ApiService,private router: Router,){
    this.view_packages();
   
  }

view_packages(){
  this.loading=true;
  //console.log('check')
  
  this.Apiservice.flight().subscribe(
    (res:any) => {
      //console.log('res',res);
      if(res.success==true){
       // console.log('res',res);
        this.loading=false;
        this.baseurl=res.data.baseUrl;
        this.data=res.data[0];
      }else{
        this.loading=false;
        this.errorMsg="No Records Found";
      }
      
    })
}

}
