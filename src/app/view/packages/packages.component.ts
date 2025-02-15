import { Component } from '@angular/core';
import { ApiService } from '../../service/api.service';
import { Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-packages',
  standalone: true,
  imports: [RouterModule,CommonModule],
  templateUrl: './packages.component.html',
  styleUrl: './packages.component.css'
})
export class PackagesComponent {
  data: any;
  baseurl: any
  loading:any
  errorMsg: any;
  image:any
  constructor(private Apiservice:ApiService,private router: Router,){
    this.view_packages();
   
  }

view_packages(){
  this.loading=true;
  //console.log('check')
  
  this.Apiservice.packages().subscribe(
    (res:any) => {
      if(res.success==true){
       // console.log('res',res);
        this.loading=false;
        this.baseurl=res.data.baseUrl;
        this.data=res.data.data;
        this.image=this.baseurl+this.data.image;
        console.log(this.image)
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
