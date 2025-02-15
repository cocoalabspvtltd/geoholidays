import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ApiService } from '../../service/api.service';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-booking',
  standalone: true,
  imports: [CommonModule,RouterModule,ReactiveFormsModule],
  templateUrl: './booking.component.html',
  styleUrl: './booking.component.css'
})
export class BookingComponent {
  errorMsg:any;
  msg:any;
  id: any;
  loading: any;
  baseurl: any;
  data: any;
  exclusion: any;
  inclusion: any;
  image: any;
  subject: any;
  constructor(private Apiservice:ApiService,private router: Router,private http: HttpClient,private _Activatedroute: ActivatedRoute,){
     
    this._Activatedroute.paramMap.subscribe((params:any) => {
      // console.log(params);
       this.id                          = params.get('id'); 
     //  console.log(this.id)
    })
    this.view_details()
  }
  contactForm                               = new FormGroup({
    email                               : new FormControl('', [Validators.required, Validators.email,Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]), 
    name                                : new FormControl('',[Validators.required,Validators.minLength(3)]),
    subject                             : new FormControl('',Validators.required),
    phone                               : new FormControl('',[Validators.required,Validators.pattern("^[0-9]*$"),Validators.minLength(10),Validators.maxLength(15)]),
    message                             : new FormControl('',Validators.required),
    service                             : new FormControl('',Validators.required),
     })
 

     view_details(){
      this.loading=true;
    //  console.log('check')
      this.Apiservice.detail(this.id).subscribe(
        (res:any) => {
          if(res.success==true){
       //     console.log('detail',res);
            this.loading=false;
            this.baseurl=res.data.baseUrl;
            this.data=res.data.data;
            this.exclusion=res.data.data[0].exclusion
            this.inclusion=res.data.data[0].inclusion
            this.image=res.data.data[0].image
            


          }else{
            this.loading=false;
            this.errorMsg="No Records Found";
          }
          
        })
    }
     







    enquiry(){
     // console.log(this.contactForm.value,);
      if(this.contactForm.value.name==null||this.contactForm.value.phone==null||this.contactForm.value.email==null||this.contactForm.value.service==null||this.contactForm.value.message==null){
        this.errorMsg="Please fill the fields ";
      }else{
    //    console.log(this.contactForm.value);
    if(this.contactForm.value.service=='Flight'){
        this.subject='flight & Hotel booking';
       
    }else if(this.contactForm.value.service=='Ayrvedic treatement'){
      this.subject='Ayrvedic Package'
      
    }
        var formData: any                        = new FormData();
        formData.append('name',                 this.contactForm.value.name);
        formData.append('email',                this.contactForm.value.email);
        formData.append('phone_number',         this.contactForm.value.phone);
        formData.append('service',              this.contactForm.value.service);
        formData.append('subject',              this.contactForm.value.service);
        formData.append('message',              this.contactForm.value.message);
        
        this.Apiservice.enquiry(formData).subscribe(
          (res:any) => {
         // console.log('res',res) ;
          if(res.success==true){           
            this.msg=res.message;
            this.contactForm.reset();
          }else{
            this.errorMsg=res.message;
            //console.log('erro');
          }
          (error: any) => {
            // Error: Handle API call error
           // console.error(error);
            // this.isLoading = false;   
             this.errorMsg=error;
          }
        })
        }
           }
        }   

