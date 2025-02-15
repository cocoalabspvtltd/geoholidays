import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { ApiService } from '../../service/api.service';
import { CommonModule } from '@angular/common';
import { CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';
import { ReactiveFormsModule } from '@angular/forms';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterModule,CommonModule,CarouselModule,ReactiveFormsModule,],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  data: any;
  baseurl: any
  loading:any
  errorMsg: any;
  id:any
  exclusiveData: any;
  baseurl1: any;
  testimonialData: any;
  commitmentData: any;
  whybookData: any;
  bannerData: any;
  aboutData: any;
  image: any;
  whybanner: any;
  Sliderdata: any;
  baseurl2: any;
  gallarydata: any;
  commitBanner: any;
  commiturl: any;
  testbaseurl: any;
  exclusivebaseurl: any;
  whybaseurl: any;
  flashData: any;
  gallerybaseurl: any;
 
  constructor(private Apiservice:ApiService,private router: Router,){
    // this.view_packages();
    this.slider();
   this.exclusive()
   this.about();
   this.gallery()
   this.testimonial();
   this.our_commitments();
   this.why();
   this.flash_message();
  }
  slider(){
    this.Apiservice.slider().subscribe(
      (res:any) => {      
        if(res.success==true){
          this.loading=false;
          this.baseurl2=res.data.baseUrl;
          this.Sliderdata=res.data.data;           
        }else{
          this.loading=false;
          this.errorMsg="No Records Found";
        }
        
      })
  }

  customOptions1: OwlOptions = {
    loop: true,
    autoplay: true, // Autoplay enabled
    autoplayTimeout: 10000, // Autoplay interval in milliseconds (5 seconds)
    autoplayHoverPause: true, // Pause autoplay on hover
    
    // Disable drag and touch events
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
  
    dots: false, // Disable dots navigation
    navSpeed: 2000, // Navigation animation speed
    navText: ['&#8249;', '&#8250;'], // Custom navigation text
  
    // Responsive breakpoints for different screen sizes
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 1
      },
      760: {
        items: 1
      },
      1000: {
        items: 1
      }
    },
  
    nav: false // Enable navigation arrows
  }
gallery(){
  this.Apiservice.gallery().subscribe(
    (res:any) => {
     // console.log('slider',res)
      if(res.success==true){
        this.loading=false;
        this.gallerybaseurl=res.data.baseUrl;
        console.log( this.baseurl)
        this.gallarydata=res.data.data.banner;
        this.data=res.data.data.package_gallery.slice(-6);      
      }else{
        this.loading=false;
        this.errorMsg="No Records Found";
      }
      
    })
}
view_packages(){
  this.loading=true;  
  this.Apiservice.list(1).subscribe(
    (res:any) => {
     // console.log('slider',res)
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
 customOptions: OwlOptions = {
  loop: true,
  autoplay: true, // Autoplay enabled
  autoplayTimeout: 5000, // Autoplay interval in milliseconds (5 seconds)
  autoplayHoverPause: true, // Pause autoplay on hover
  
  // Disable drag and touch events
  mouseDrag: false,
  touchDrag: false,
  pullDrag: false,

  dots: false, // Disable dots navigation
  navSpeed: 600, // Navigation animation speed
  navText: ['&#8249;', '&#8250;'], // Custom navigation text

  // Responsive breakpoints for different screen sizes
  responsive: {
    0: {
      items: 1
    },
    400: {
      items: 1
    },
    760: {
      items: 1
    },
    1000: {
      items: 3
    }
  },

  nav: true // Enable navigation arrows
}
exclusive(){
  this.loading=true;
  this.Apiservice.exclusive_offers().subscribe(
    (res:any) => {
    
      if(res.success==true){
        this.loading=false;
        this.exclusivebaseurl=res.data.baseUrl;
        this.exclusiveData=res.data.data.slice(-6)
        }else{
        this.loading=false;
        this.errorMsg="No Records Found";
      }
      
    })
}
testimonial(){
  this.loading=true;
  this.Apiservice.testimonial().subscribe(
    (res:any) => { 
        
      if(res.success==true){
        this.loading=false;
        this.bannerData=res.data.data.banner;
        this.testbaseurl=res.data.baseUrl;
        this.testimonialData=res.data.data.testimonials;
        }else{
        this.loading=false;
        this.errorMsg="No Records Found";
      }
     })
}
our_commitments(){
  this.loading=true;
  this.Apiservice.commitments().subscribe(
    (res:any) => {
      //console.log('commit',res) 
          if(res.success==true){
        this.loading=false;
        this.commiturl=res.data.baseUrl;
        this.commitmentData=res.data.data.our_commitment;
        this.commitBanner=res.data.data.banner;
       // console.log('this.commitBanner',this.commitBanner)
        }else{
        this.loading=false;
        this.errorMsg="No Records Found";
      }
     })
}
why(){
  this.loading=true;
  this.Apiservice.whybook().subscribe(
    (res:any) => {
     // console.log('offers',res)  
        if(res.success==true){
        this.loading=false;
        this.whybaseurl=res.data.baseUrl;
        console.log('why',this.whybaseurl)
        this.whybookData=res.data.data.why_book_with_us;
        this.whybanner=res.data.data.banner;             
        }else{
        this.loading=false;
        this.errorMsg="No Records Found";
      }
     })
}
about(){
  this.loading=true;
  this.Apiservice.about().subscribe(
    (res:any) => {      
      if(res.success==true){
        this.loading=false;
        this.baseurl=res.data.baseUrl;
        this.aboutData=res.data.data[0];
        this.image=this.baseurl+this.aboutData.image;
        }else{
        this.loading=false;
        this.errorMsg="No Records Found";
      }
     })  
}
flash_message(){
  this.loading=true;
  this.Apiservice.flash().subscribe(
    (res:any) => {  
     // console.log('flash',res)    
      if(res.success==true){
        this.loading=false;
        this.baseurl=res.data.baseUrl;
        this.flashData=res.data[0].title;
        }else{
        this.loading=false;
        this.errorMsg="No Records Found";
      }
     })  
}
}