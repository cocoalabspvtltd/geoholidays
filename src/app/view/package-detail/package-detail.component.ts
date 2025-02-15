import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ApiService } from '../../service/api.service';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
declare var Razorpay:any
@Component({
  selector: 'app-package-detail',
  standalone: true,
  imports: [ReactiveFormsModule,RouterModule,CommonModule],
  templateUrl: './package-detail.component.html',
  styleUrl: './package-detail.component.css'
})
export class PackageDetailComponent {
  errorMsg:any;
  msg:any;
  id: any;
  loading: any;
  baseurl: any;
  data: any;
  exclusion: any;
  inclusion: any;
  image: any;
  highlights: any;
  id1: any;
  minDate: string;
  selectedDate:any
  rate: any;
  RAZORPAY_OPTIONS:any
  rzppay: any;
  razorpayResponse: any;
  msg1: any;
  amount: any;
  constructor(private Apiservice:ApiService,private router: Router,private http: HttpClient,private _Activatedroute: ActivatedRoute,){
    this.minDate = this.getTodayDateString();
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
    // subject                             : new FormControl('',Validators.required),
    phone                               : new FormControl('',[Validators.required,Validators.pattern("^[0-9]*$"),Validators.minLength(10),Validators.maxLength(12)]),
    // message                             : new FormControl('',Validators.required),
    // service                             : new FormControl('',Validators.required),
    adult                               : new FormControl('',Validators.required),
    child                               : new FormControl('',Validators.required),
    infant                              : new FormControl('',Validators.required),
    city                                : new FormControl('',Validators.required),
   date                                 : new FormControl('',Validators.required),

     })
  // Function to get today's date in string format (YYYY-MM-DD)
  getTodayDateString(): string {
    const today = new Date();
    const year = today.getFullYear();
    const month = (today.getMonth() + 1).toString().padStart(2, '0');
    const day = today.getDate().toString().padStart(2, '0');
    return `${year}-${month}-${day}`;
  }

     view_details(){
      this.loading=true;
     // console.log('check')
      this.Apiservice.detail(this.id).subscribe(
        (res:any) => {
          if(res.success==true){
         //   console.log('detail',res);
            this.loading=false;
            this.baseurl=res.data.baseUrl;
            this.data=res.data.data;
            this.exclusion=res.data.data[0].exclusion
            this.inclusion=res.data.data[0].inclusion
            this.highlights=res.data.data[0].highlights
            this.image=res.data.data[0].image
            this.id1=res.data.data[0].package_category_id;
            this.rate=res.data.data[0].package_rate;

          }else{
            this.loading=false;
            this.errorMsg="No Records Found";
          }
          
        })
    }
     







   book_now(){
    //  console.log(this.contactForm.value ,this.data[0].title);
      if(this.contactForm.value.name==''||this.contactForm.value.phone==''||this.contactForm.value.city==''||this.contactForm.value.date==''||
        this.contactForm.value.email==''){
        this.errorMsg="Please fill the fields ";
      }else{
        // let data={amount:this.rate,name:this.contactForm.value.name,email:this.contactForm.value.email}
        // this.Apiservice.order(data).subscribe(
        //   (res:any) => {
          //   console.log('order',res) ;
          //  // this.amount=100;
          //   if(res.status=='true'){ 
              

              var formData: any                        = new FormData();
                formData.append('name',                 this.contactForm.value.name);
                formData.append('email',                this.contactForm.value.email);
                formData.append('phone_number',         this.contactForm.value.phone);
                formData.append('depacture_city',       this.contactForm.value.city);
                formData.append('prefferd_date',        this.contactForm.value.date);
                
               
                if(this.contactForm.value.adult==""||this.contactForm.value.adult==null){
                  formData.append('adult_count',          0);
                }else{
                  formData.append('adult_count',          this.contactForm.value.adult);
                }
                if(this.contactForm.value.child==""||this.contactForm.value.child==null){
                  formData.append('child_count',          0);
                }else{
                  formData.append('child_count',          this.contactForm.value.child); 
                }
                if( this.contactForm.value.infant==""|| this.contactForm.value.infant==null){
                  formData.append('infant_count',         0);
                }else{
                  formData.append('infant_count',         this.contactForm.value.infant);
                }
                formData.append('package_id',           this.id1);
                  this.Apiservice.booking(formData).subscribe(
                 (res:any) => {
                 // console.log('booking',res);
                 if(res.success==true){           
                  this.msg=res.message;
                 
                   this.contactForm.reset();
                  
                 }else{
                   this.errorMsg=res.message;
                   //console.log('erro');
                 }
                 (error: any) => {
                   // Error: Handle API call error
                   console.error(error);
                   // this.isLoading = false;   
                    this.errorMsg=error;
                 }
               })
          
          }
       // })
        }
      }










              // this.RAZORPAY_OPTIONS = {
                
              //   key:res.key_id ,
              //   amount:100,
              //   name: 'Geo Holidays',
              //   currency: 'INR',
              //   order_id: res.order_id,
              //   customer_id: '',
              //   description: 'App Payment',
              //   // image:
              //   //   'https://livestatic.novopay.in/resources/img/nodeapp/img/Logo_NP.jpg',
              //   prefill: {
              //     name:this.contactForm.value.name,
              //     amount:100,
              //     email:this.contactForm.value.email,
              //     phone:this.contactForm.value.phone,
              //     method: '',
              //   },
               
              //   modal: {},
              //   theme: {
              //     color:'#f37254',
              //   },
              // };
              //console.log(this.dontedId);
            //   console.log(this.RAZORPAY_OPTIONS);
            //   this.RAZORPAY_OPTIONS.amount = 100;
            //   this.RAZORPAY_OPTIONS.key = res.key_id;
            //   this.RAZORPAY_OPTIONS.order_id = res.order_id;         
            //   this.RAZORPAY_OPTIONS['handler'] =
            //     this.razorPaySuccessHandler.bind(this);
            //   this.rzppay = new Razorpay(this.RAZORPAY_OPTIONS);
            //       this.rzppay.open();


            // const options: any = {
            //   key: res.key_id, // Enter the Key ID generated from the Dashboard
            //   amount: res.amount, // Amount is in currency subunits. Default currency is INR. Hence, 100 paise = 1 INR
            //   currency: 'INR',
            //   name: 'Your Company Name',
            //   description: 'Test Transaction',
            //   image: 'https://example.com/your_logo',
            //   //order_id: receipt, // Pass the `id` obtained in the previous step
            //   handler: function (response: any) {
            //     console.log(response);
            //     // You can handle the success response here
            //     if (response.razorpay_payment_id) {
            //       console.log('db_code');
            //       let data={
            //         payment_id:response.razorpay_payment_id,
            //         name:this.contactForm.value.name,
            //         amount:this.amount,
            //         email:this.contactForm.value.email,
                
            //       }
            //       console.log('data',data); 
            //       this.Apiservice.paymentId(data).subscribe((res: any) => {
            //        console.log('db1',res);         
               
              //   var formData: any                        = new FormData();
              //   formData.append('name',                 this.contactForm.value.name);
              //   formData.append('email',                this.contactForm.value.email);
              //   formData.append('phone_number',         this.contactForm.value.phone);
              //   formData.append('depacture_city',       this.contactForm.value.city);
              //   formData.append('prefferd_date',        this.contactForm.value.date);
              //   formData.append('infant_count',         this.contactForm.value.infant);
              //   formData.append('child_count',          this.contactForm.value.child); 
              //   formData.append('adult_count',          this.contactForm.value.adult);
              //   formData.append('package_id',           this.id1);
              //     this.Apiservice.booking(formData).subscribe(
              //    (res:any) => {
              //     console.log('booking',res);
              //    if(res.success==true){           
              //     this.msg1=res.message;
                 
              //      this.contactForm.reset();
                  
              //    }else{
              //      this.errorMsg=res.message;
              //      //console.log('erro');
              //    }
              //    (error: any) => {
              //      // Error: Handle API call error
              //      console.error(error);
              //      // this.isLoading = false;   
              //       this.errorMsg=error;
              //    }
              //  })
               
                    
                    
                  
        //          })
        //            }
        //       },
        //       prefill: {
        //             name:this.contactForm.value.name,
        //             amount:100,
        //             email:this.contactForm.value.email,
        //             phone:this.contactForm.value.phone,
        //             method: '',
        //           },
        //       // notes: {
        //       //   address: 'Razorpay Corporate Office'
        //       // },
        //       theme: {
        //         color:'#f37254',
        //       }
        //     };
                
        //       this.rzppay = new Razorpay(options);
        //           this.rzppay.open();
        //      }
     
        // })
        
        
    //   }
    // }
    // public result(response :any) {
    //   this.razorpayResponse = 'Razorpay Response';
     
    //   if (response.razorpay_payment_id) {
    //     let data={
    //       payment_id:response.razorpay_payment_id,
    //       name:this.contactForm.value.name,
    //       amount:100,
    //       email:this.contactForm.value.email,
      
    //     }
    //     this.Apiservice.paymentId(data).subscribe((res: any) => {
    //      console.log('db1',res);         
     
    //   var formData: any                        = new FormData();
    //   formData.append('name',                 this.contactForm.value.name);
    //   formData.append('email',                this.contactForm.value.email);
    //   formData.append('phone_number',         this.contactForm.value.phone);
    //   formData.append('depacture_city',       this.contactForm.value.city);
    //   formData.append('prefferd_date',        this.contactForm.value.date);
    //   formData.append('infant_count',         this.contactForm.value.infant);
    //   formData.append('child_count',          this.contactForm.value.child); 
    //   formData.append('adult_count',          this.contactForm.value.adult);
    //   formData.append('package_id',           this.id1);
    //     this.Apiservice.booking(formData).subscribe(
    //    (res:any) => {
    //     console.log('booking',res);
    //    if(res.success==true){           
    //     this.msg1=res.message;
       
    //      this.contactForm.reset();
        
    //    }else{
    //      this.errorMsg=res.message;
    //      //console.log('erro');
    //    }
    //    (error: any) => {
    //      // Error: Handle API call error
    //      console.error(error);
    //      // this.isLoading = false;   
    //       this.errorMsg=error;
    //    }
    //  })
     
          
          
        
       //})
        // }
        
     // }
  










          
          //  const RazorpayOptions={
          //   description:'simple demo',
          //   currency:'INR',
          //   amount:this.rate*100,
          //   name:'test',
          //   key:res.key_id,
          //   prefills:{
          //     name:this.contactForm.value.name,
          //     amount:this.rate*100,
          //     email:this.contactForm.value.email,
          //     phone:this.contactForm.value.phone,
              
          //   },theme:{
          //     color:'#f37254',
  
          //   },model:{
          //     ondismiss:()=>{
          //       console.log('dismissed');
          //     }
          //   },
          // }


          
          // const SuccessCallback=(paymentid:any)=>{
          //   console.log(paymentid);
          //   let data1={
          //     amount:this.rate*100,
          //     email:this.contactForm.value.email,
          //     payment_id:paymentid,
          //   }
          //   this.Apiservice.paymentId(data1).subscribe(
          //     (res:any) => {
          //     console.log('paymentid',res) ;
          //     })
          // }
          // const failureCallback =(e:any)=>{
          //   console.log(e);
          // }
          // Razorpay.open(RazorpayOptions,SuccessCallback,failureCallback)
         

      


