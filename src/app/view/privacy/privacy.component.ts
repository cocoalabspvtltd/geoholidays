import { Component } from '@angular/core';
import { ApiService } from '../../service/api.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-privacy',
  standalone: true,
  imports: [],
  templateUrl: './privacy.component.html',
  styleUrl: './privacy.component.css'
})
export class PrivacyComponent {
  data: any;
  baseurl: any
  loading:any
  errorMsg: any;
  constructor(private Apiservice:ApiService,private router: Router,){
    this.privacy();
   
  }

privacy(){
  this.loading=true;
 // console.log('check')
  
  this.Apiservice.privacy().subscribe(
    (res:any) => {
     // console.log('res',res);
      if(res.success==true){
       
        this.loading=false;
        this.baseurl=res.data.baseUrl;
        this.data=res.data[0];
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
