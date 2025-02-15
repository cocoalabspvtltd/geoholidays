import { Component } from '@angular/core';
import { ApiService } from '../../service/api.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [],
  templateUrl: './gallery.component.html',
  styleUrl: './gallery.component.css'
})
export class GalleryComponent {

  data: any;
  baseurl: any
  loading:any
  errorMsg: any;
  constructor(private Apiservice:ApiService,private router: Router,){
    this.gallery();
   
  }
gallery(){
  this.loading=true;
 // console.log('check')
  
  this.Apiservice.gallerys().subscribe(
    (res:any) => {
      if(res.success==true){
       // console.log('res',res);
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


