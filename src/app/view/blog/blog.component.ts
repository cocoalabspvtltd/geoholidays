import { Component } from '@angular/core';
import { ApiService } from '../../service/api.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-blog',
  standalone: true,
  imports: [],
  templateUrl: './blog.component.html',
  styleUrl: './blog.component.css'
})
export class BlogComponent {
  data: any;
  baseurl: any
  loading:any
  errorMsg: any;
  constructor(private Apiservice:ApiService,private router: Router,){
    this.blogs();
   
  }

blogs(){
  this.loading=true;
 // console.log('check')
  
  this.Apiservice.blog().subscribe(
    (res:any) => {
     // console.log('res',res);
      if(res.success==true){
       
        this.loading=false;
        this.baseurl=res.data.baseUrl;
        this.data=res.data.data;
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
