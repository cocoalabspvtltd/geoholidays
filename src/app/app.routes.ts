import { Routes } from '@angular/router';
import { HomeComponent } from './view/home/home.component';
import { AboutComponent } from './view/about/about.component';
import { ContactComponent } from './view/contact/contact.component';
import { AyurvedaComponent } from './view/ayurveda/ayurveda.component';
import { CharityComponent } from './view/charity/charity.component';
import { FlightsComponent } from './view/flights/flights.component';
import { PackagesComponent } from './view/packages/packages.component';
import { OffersComponent } from './view/offers/offers.component';
import { ReservationComponent } from './view/reservation/reservation.component';
import { TermsComponent } from './view/terms/terms.component';
import { ServicesComponent } from './view/services/services.component';
import { PrivacyComponent } from './view/privacy/privacy.component';
import { GalleryComponent } from './view/gallery/gallery.component';
import { DisclaimerComponent } from './view/disclaimer/disclaimer.component';
import { BlogComponent } from './view/blog/blog.component';
import { BookingComponent } from './view/booking/booking.component';
import { InternationalComponent } from './view/international/international.component';
import { DomasticComponent } from './view/domastic/domastic.component';
import { PackageDetailComponent } from './view/package-detail/package-detail.component';

export const routes: Routes = [
  
  
    { path: '',                  redirectTo  : 'home', pathMatch: 'full'     },  
    { path: 'home',               component  :   HomeComponent               },
    { path: 'about',              component  :   AboutComponent              },
    { path: 'contact',            component  :   ContactComponent            },
    { path: 'ayurveda',           component  :   AyurvedaComponent           },
    { path: 'charity',            component  :   CharityComponent            },
    { path: 'flight',             component  :   FlightsComponent            },
    { path: 'offers',             component  :   OffersComponent             },
    { path: 'packages',           component  :   PackagesComponent           },
    { path: 'reservation',        component  :   ReservationComponent        },
    { path: 'terms',              component  :   TermsComponent              },
    { path: 'services',           component  :   ServicesComponent           },
    { path: 'privacy',            component  :   PrivacyComponent            },
    { path: 'gallery',            component  :   GalleryComponent            },
    { path: 'disclaimer',         component  :   DisclaimerComponent         },
    { path: 'blog',               component  :   BlogComponent               },
    { path: 'enquiry',            component  :   BookingComponent            },
    { path: 'package',            component  :   InternationalComponent      },
    { path: 'domastic',           component  :   DomasticComponent           },
    { path: 'detail',             component  :   PackageDetailComponent      },

];