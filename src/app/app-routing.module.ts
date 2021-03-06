import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CampaignComponent } from './campaign/campaign.component';


const routes: Routes = [
  { path: '', redirectTo:'campaign/upcoming', pathMatch:'full'},
  { path: 'campaign/:type', component:CampaignComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
