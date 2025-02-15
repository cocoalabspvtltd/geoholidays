import { Component } from '@angular/core';
import { ApiService } from '../../service/api.service';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-ayurveda',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './ayurveda.component.html',
  styleUrl: './ayurveda.component.css'
})
export class AyurvedaComponent {
  data: any;
  baseurl: any
  loading:any
  errorMsg: any;
  image: any;
  socialData: any;
  constructor(private Apiservice:ApiService,private router: Router,){
    this.view_packages();
   
  }

view_packages(){
  this.loading=true;
  //console.log('check')
  //
  this.Apiservice.ayurveda().subscribe(
    (res:any) => {
      if(res.success==true){
      //  console.log('res',res);
        this.loading=false;
        this.baseurl=res.data.baseUrl;
        this.data=res.data[0];
        this.image=this.baseurl+this.data.image;
        //console.log(this.image)
      }else{
        this.loading=false;
        this.errorMsg="No Records Found";
      }
      
    })
}
social(){
  this.loading=true;
  this.Apiservice.social().subscribe(
    (res:any) => {
      //console.log('social',res)
      if(res.success==true){
        this.loading=false;
        this.baseurl=res.data.baseUrl;
        this.socialData=res.data
              
        }else{
        this.loading=false;
        this.errorMsg="No Records Found";
      }
     })  
}
}
