import { Inject, Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { catchError, map } from  'rxjs/operators';
import { Observable, throwError } from 'rxjs'
import { DOCUMENT } from '@angular/common';


@Injectable({
  providedIn: 'root'
})
export class ApiService {
  
  
  public BASE_URL='http://www.thegeoholidays.com/backend'

 //public BASE_URL1 = 'https://841c-117-221-152-70.ngrok-free.app';



 private getHeaders() {
  const headers = new HttpHeaders({
    'ngrok-skip-browser-warning':  '69420',
    'Content-Type':'appilcation/json'
  });
  return {headers};
 }

  httpOptions={headers :new HttpHeaders({
    'Content-Type':'appilcation/Json',
    'Accept': 'application/json'  
  })
}
//   constructor(private http: HttpClient,@Inject(DOCUMENT) private document: Document) {
//   }
//   public packages():Observable<any>{
//     //console.log('stream',data);
//     const headers = new HttpHeaders();
//       return this.http.get<any>(this.BASE_URL + `/api/packagecategory/index
//       `)
      
//     }
constructor(private http: HttpClient) {}

public packages():Observable<any>{
    return this.http.get<any>(this.BASE_URL + `/api/packagecategory`,this.httpOptions)
      .pipe(
        catchError(this.handleError)
      );
      
  }
//=================================contact===============================================================//
public contact(data:any):Observable<any>{
  //console.log('stream',data);
  const headers = new HttpHeaders();
    return this.http.post<any>(this.BASE_URL + `/api/contact`,data,{headers})
}
//============================package list=============================================================//

public list(id:any):Observable<any>{
  //console.log('stream',data);
  const headers = new HttpHeaders();
    return this.http.get<any>(this.BASE_URL + `/api/packagecategory-tour/`+id,this.httpOptions)
}
//============================package details=============================================================//

public detail(id:any):Observable<any>{
  //console.log('stream',data);
  const headers = new HttpHeaders();
    return this.http.get<any>(this.BASE_URL + `/api/packagetour/`+id,this.httpOptions)
}
//============================offers=============================================================//

public offers():Observable<any>{
  //console.log('stream',data);
  const headers = new HttpHeaders();
    return this.http.get<any>(this.BASE_URL + `/api/offers`,this.httpOptions)
}
//============================flight&hotel=============================================================//

public flight():Observable<any>{
  //console.log('stream',data);
  const headers = new HttpHeaders();
    return this.http.get<any>(this.BASE_URL + `/api/flight_and_hotel`,this.httpOptions)
}
//============================flight&hotel=============================================================//
public ayurveda():Observable<any>{
  //console.log('stream',data);
  const headers = new HttpHeaders();
    return this.http.get<any>(this.BASE_URL + `/api/ayurvedic_packages`,this.httpOptions)
}
//============================enquiry=============================================================//
public enquiry(data:any):Observable<any>{
  //console.log('stream',data);
  const headers = new HttpHeaders();
    return this.http.post<any>(this.BASE_URL + `/api/sent-enquiry`,data,{headers})
}
//============================booking=============================================================//
public booking(data:any):Observable<any>{
  //console.log('stream',data);
  const headers = new HttpHeaders();
    return this.http.post<any>(this.BASE_URL + `/api/booking`,data,{headers})
}
//============================order=============================================================//
public order(data:any):Observable<any>{
  //console.log('stream',data);
  const headers = new HttpHeaders();
    return this.http.post<any>(this.BASE_URL + `/api/paymentlink`,data,{headers})
}
//============================paymentId=============================================================//
public paymentId(data:any):Observable<any>{
  //console.log('stream',data);
  const headers = new HttpHeaders();
    return this.http.post<any>(this.BASE_URL + `/api/payment`,data,{headers})
}

//============================gallery=============================================================//
public gallery():Observable<any>{
  //console.log('stream',data);
  const headers = new HttpHeaders();
    return this.http.get<any>(this.BASE_URL + `/api/package_gallery`,this.httpOptions)
}
//============================Service=============================================================//
public Service():Observable<any>{
  //console.log('stream',data);
  const headers = new HttpHeaders();
    return this.http.get<any>(this.BASE_URL + `/api/services`,this.httpOptions)
}

//============================office=============================================================//
public office():Observable<any>{
  //console.log('stream',data);
  const headers = new HttpHeaders();
    return this.http.get<any>(this.BASE_URL + `/api/package_gallery`,this.httpOptions)
}
//============================office=============================================================//
public exclusive_offers():Observable<any>{
  //console.log('stream',data);
  const headers = new HttpHeaders();
    return this.http.get<any>(this.BASE_URL + `/api/exclusive-offers`,this.httpOptions)
}
//============================testimonial============================================================//
public testimonial():Observable<any>{
  //console.log('stream',data);
  const headers = new HttpHeaders();
    return this.http.get<any>(this.BASE_URL + `/api/testimonials`,this.httpOptions)
}
//============================Commitments===========================================================//
public commitments():Observable<any>{
  //console.log('stream',data);
  const headers = new HttpHeaders();
    return this.http.get<any>(this.BASE_URL + `/api/our-commitments`,this.httpOptions)
}
//============================/why-book-with-us==========================================================//
public whybook():Observable<any>{
  //console.log('stream',data);
  const headers = new HttpHeaders();
    return this.http.get<any>(this.BASE_URL + `/api/why-book-with-us`,this.httpOptions)
}
//============================/why-book-with-us==========================================================//
public about():Observable<any>{
  //console.log('stream',data);
  const headers = new HttpHeaders();
    return this.http.get<any>(this.BASE_URL + `/api/about-us`,this.httpOptions)
}
//============================/why-book-with-us==========================================================//
public blog():Observable<any>{
  //console.log('stream',data);
  const headers = new HttpHeaders();
    return this.http.get<any>(this.BASE_URL + `/api/blogs`,this.httpOptions)
}
//============================privacy policy============================================================//
public privacy():Observable<any>{
  //console.log('stream',data);
  const headers = new HttpHeaders();
    return this.http.get<any>(this.BASE_URL + `/api/privacy-policy`,this.httpOptions)
}
///============================privacy policy============================================================//
public disclamer():Observable<any>{
  //console.log('stream',data);
  const headers = new HttpHeaders();
    return this.http.get<any>(this.BASE_URL + `/api/disclaimer `,this.httpOptions)
}
///============================privacy policy============================================================//
public slider():Observable<any>{
  //console.log('stream',data);
  const headers = new HttpHeaders();
    return this.http.get<any>(this.BASE_URL + `/api/home_slider `,this.httpOptions)
}
//============================contact details===========================================================//
public contact_details():Observable<any>{
  //console.log('stream',data);
  const headers = new HttpHeaders();
    return this.http.get<any>(this.BASE_URL + `/api/contact-details `,this.httpOptions)
}

//============================contact details===========================================================//
public terms():Observable<any>{
  //console.log('stream',data);
  const headers = new HttpHeaders();
    return this.http.get<any>(this.BASE_URL
      
      + `/api/terms-conditions`,this.httpOptions)
}
//============================contact details===========================================================//
public social():Observable<any>{
  //console.log('stream',data);
  const headers = new HttpHeaders();
    return this.http.get<any>(this.BASE_URL + `/api/social-media-links`,this.httpOptions)
}

//============================contact details===========================================================//
public gallerys():Observable<any>{
  //console.log('stream',data);
  const headers = new HttpHeaders();
    return this.http.get<any>(this.BASE_URL + `/api/gallery`,this.httpOptions)
}
//============================contact details===========================================================//
public flash():Observable<any>{
  //console.log('stream',data);
  const headers = new HttpHeaders();
    return this.http.get<any>(this.BASE_URL + `/api/flash-message`,this.httpOptions)
}







  //==================================================================================//
  private handleError(error: HttpErrorResponse): Observable<never>  {
          
    let errorMessage = 'Something went wrong.Please try again..';

          if (error.error instanceof ErrorEvent) {
      // Client-side errors
      
      errorMessage = `Error: ${error.error.message}`;
     
    } 
    else if (error.error && error.error.errors) {
      // Handle Laravel validation errors
      console.log(error)
      // errorMessage += `\nValidation Errors: ${JSON.stringify(error.error.errors)}`;
      let errorMessage1 = JSON.stringify(error.error.errors)
      const matchResult = errorMessage1.match(/\["(.*?)"\]/);
      // const cleanedErrorMessage = errorMessage1 .replace('":["', '').replace('"]}', ''); 
      if (matchResult && matchResult.length > 1) {
        const extractedSubstring = matchResult[1];
                     errorMessage=extractedSubstring;
      }
    }else if (error.status===422) {
      console.log(error.error.errors)
        errorMessage = error.error.message;
        let errorMessage1 = JSON.stringify(error.error.errors)
        const matchResult = errorMessage1.match(/\["(.*?)"\]/);
        // const cleanedErrorMessage = errorMessage1 .replace('":["', '').replace('"]}', ''); 
        if (matchResult && matchResult.length > 1) {
          const extractedSubstring = matchResult[1];
                       errorMessage=extractedSubstring;
        }
    }
      else if (error.status=== 401 || error.status === 403) {
        // this.router.navigateByUrl(`/login`);
      
       errorMessage = error.error.message;
       
    }
    else if (error.status===400){
        errorMessage = error.error.message;
     // console.log('res',errorMessage,)
    }
    
    else if (error['error']){
      // errorMessage = error.error.message;
      let errorMessage1 = JSON.stringify(error.error.errors);
                  const matchResult = errorMessage1.match(/\["(.*?)"\]/);
      // const cleanedErrorMessage = errorMessage1 .replace('":["', '').replace('"]}', ''); 
      if (matchResult && matchResult.length > 1) {
        const extractedSubstring = matchResult[1];
                     errorMessage=extractedSubstring;
      }
    }
    else if (error){
      // errorMessage = error.error.message;
      let errorMessage1 = JSON.stringify(error.error);
                  const matchResult = errorMessage1.match(/\["(.*?)"\]/);
      // const cleanedErrorMessage = errorMessage1 .replace('":["', '').replace('"]}', ''); 
      if (matchResult && matchResult.length > 1) {
        const extractedSubstring = matchResult[1];
                     errorMessage=extractedSubstring;
      }
    }
          // console.error(errorMessage);
   return throwError(() => new Error(errorMessage));
  }
}


