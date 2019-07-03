import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { PaymentComponent } from './payment/payment.component';
import { TripsComponent } from './trips/trips.component';

const routes: Routes = [{path:"",component:HomeComponent},{path:"Contact", component:ContactComponent}
,{path:"Payment", component:PaymentComponent},{path:"Trips", component:TripsComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
