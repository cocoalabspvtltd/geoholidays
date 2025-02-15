import { Component } from '@angular/core';
import { ApiService } from '../../service/api.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-offers',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './offers.component.html',
  styleUrl: './offers.component.css'
})
export class OffersComponent {

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
  
  this.Apiservice.offers().subscribe(
    (res:any) => {
     console.log('res',res);
      if(res.success==true){
       
        this.loading=false;

        // this.baseurl=res.data.baseUrl;
       
        // if(this.baseurl==""){
          this.baseurl= 'https://thegeoholidays.com/backend/storage/app/public/'
        //}
        this.data=res.data;
      }else{
        this.loading=false;
        this.errorMsg="No Records Found";
      }
      
    })
}
 packages(item:any){
  this.router.navigate(['/package',{id:item}]);
 }
}
