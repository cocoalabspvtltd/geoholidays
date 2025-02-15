import { Component } from '@angular/core';
import { ApiService } from '../../service/api.service';
import { Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  socialData: any;
  collapseNavbar() {
    const navbarCollapse = document.getElementById('navbarCollapse');
    if (navbarCollapse) {
      navbarCollapse.classList.remove('show');
    }
  }

  data: any;
  baseurl: any
  loading:any
  errorMsg: any;
  image:any
  aboutData: any;
  constructor(private Apiservice:ApiService,private router: Router,){
    this.contact();
    this.social()
  }

contact(){
    this.loading=true;
    this.Apiservice.contact_details().subscribe(
      (res:any) => {
        if(res.success==true){
          this.loading=false;
          this.baseurl=res.data.baseUrl;
          this.aboutData=res.data[0];
          this.image=this.baseurl+this.aboutData.image;         
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
        console.log('social',res)
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



