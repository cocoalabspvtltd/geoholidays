import { Component } from '@angular/core';
import { ApiService } from '../../service/api.service';
import { Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-about',
  standalone: true,
  imports: [],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {
  data: any;
  baseurl: any
  loading:any
  errorMsg: any;
  image:any
  aboutData: any;
  constructor(private Apiservice:ApiService,private router: Router,){
    this.about();
  }

  about(){
    this.loading=true;
    this.Apiservice.about().subscribe(
      (res:any) => {
      //  console.log('about',res);
        if(res.success==true){
          this.loading=false;
          this.baseurl=res.data.baseUrl;
          this.aboutData=res.data.data[0];
          this.image=this.baseurl+this.aboutData.image;
          console.log(this.image)
          }else{
          this.loading=false;
          this.errorMsg="No Records Found";
        }
       })  
  }
}
