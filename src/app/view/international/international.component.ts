import { Component } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { ApiService } from '../../service/api.service';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-international',
  standalone: true,
  imports: [RouterModule,ReactiveFormsModule,CommonModule],
  templateUrl: './international.component.html',
  styleUrl: './international.component.css'
})
export class InternationalComponent {
  data: any;
  baseurl: any
  loading:any
  errorMsg: any;
  id: any;
  page: number        = 1;
  count: number       = 0;
  tableSize: number   = 8;
  tableSizes: any     = [3, 6, 9, 12];
  length: any;
  constructor(private Apiservice:ApiService,private _Activatedroute: ActivatedRoute,private router: Router){
    
    this._Activatedroute.paramMap.subscribe((params:any) => {
      // console.log(params);
       this.id                          = params.get('id'); 
     //  console.log(this.id)
    })
    this.view_packages();
  }

view_packages(){
  this.loading=true;
  //console.log('check')
  this.Apiservice.list(this.id).subscribe(
    (res:any) => {
      if(res.success==true){
      //  console.log('list',res);
        this.loading=false;
        this.baseurl=res.data.baseUrl;
        this.data=res.data.data;
      }else{
        this.loading=false;
        this.errorMsg="No Records Found";
      }
      
    })
}
 read(id:any){
  this.router.navigate(['/detail',{id:id}]);
 }
}
