import { Component } from '@angular/core';
import { ApiService } from '../../service/api.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-terms',
  standalone: true,
  imports: [],
  templateUrl: './terms.component.html',
  styleUrl: './terms.component.css'
})
export class TermsComponent {
  baseurl: any
  loading:any
  errorMsg: any;
  data: any;
  constructor(private Apiservice:ApiService,private router: Router,){
    this.terms();
   
  }

terms(){
  this.loading=true;
  //console.log('check')
  
  this.Apiservice.terms().subscribe(
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
 
}
