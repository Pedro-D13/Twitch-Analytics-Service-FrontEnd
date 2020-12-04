import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SearchTwitchComponent } from 'src/app/search/search-twitch/search-twitch.component';

const routes: Routes = [
  {path:"", component:SearchTwitchComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
