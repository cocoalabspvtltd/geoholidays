import { Component } from '@angular/core';
import { ApiService } from '../../service/api.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-disclaimer',
  standalone: true,
  imports: [],
  templateUrl: './disclaimer.component.html',
  styleUrl: './disclaimer.component.css'
})
export class DisclaimerComponent {
  data: any;
  baseurl: any
  loading:any
  errorMsg: any;
  constructor(private Apiservice:ApiService,private router: Router,){
    this.privacy();
   
  }

privacy(){
  this.loading=true;
  //console.log('check')
  
  this.Apiservice.disclamer().subscribe(
    (res:any) => {
    //  console.log('res',res);
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
