import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { YarinComponent } from './components/yarin/yarin.component';

const routes: Routes = [
  {path:"about",component:AboutComponent},
  {path:"contact",component:ContactComponent},
  {path:"yarin",component:YarinComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
