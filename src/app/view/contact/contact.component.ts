import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ApiService } from '../../service/api.service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
  errorMsg:any;
  msg:any;
  aboutData: any;
  baseurl: any;
  url: any;
  url1: any;
  constructor(private Apiservice:ApiService,private router: Router,private http: HttpClient){
    this.details();
    this.contactDetails();
  }
  contactForm                               = new FormGroup({
    email                               : new FormControl('', [Validators.required, Validators.email,Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]), 
    name                                : new FormControl('',[Validators.required,Validators.minLength(3)]),
    subject                             : new FormControl('',Validators.required),
    phone                               : new FormControl('',[Validators.required,Validators.pattern("^[0-9]*$"),Validators.minLength(10),Validators.maxLength(12)]),
    message                             : new FormControl('',Validators.required),
     })
 

details(){
  this.Apiservice.office().subscribe(
    (res:any) => {
    //console.log('res',res) ;
  
  })
}

contactDetails(){  
  this.Apiservice.contact_details().subscribe(
    (res:any) => {
     // console.log('contact',res);
      if(res.success==true){      
        this.baseurl=res.data.baseUrl;
        
         
        this.aboutData=res.data; this.url1=this.aboutData[0].location ;
       // console.log('location',this.url1)             
        }else{
       
        this.errorMsg="No Records Found";
      }
     })  
}


      contact(){
       // console.log(this.contactForm.value);
        if(this.contactForm.value.name==''||this.contactForm.value.email==''||this.contactForm.value.subject==''||this.contactForm.value.message==''){
          this.errorMsg="Please fill the fields ";
        }else{
         // console.log(this.contactForm.value);
          var formData: any                        = new FormData();
          formData.append('name',                 this.contactForm.value.name);
          formData.append('email',                this.contactForm.value.email);
          formData.append('subject',              this.contactForm.value.subject);
          formData.append('message',              this.contactForm.value.message); 
          formData.append('phone_number',         this.contactForm.value.phone); 
          let data =  {name:               this.contactForm.value.name,
                        email:             this.contactForm.value.email,
                        subject:           this.contactForm.value.subject,
                        message:           this.contactForm.value.message,
                        phone_number:      this.contactForm.value.phone
          }   
        //  console.log('data',data)     
          this.Apiservice.contact(data).subscribe(
            (res:any) => {
           // console.log('res',res) ;
            if(res.success==true){           
              this.msg=res.message;
            }else{
              this.errorMsg=res.message;
              //console.log('erro');
            }
            (error: any) => {
              // Error: Handle API call error
            //  console.error(error);
              // this.isLoading = false;   
               this.errorMsg=error;
            }
          })
          }
             }
          }