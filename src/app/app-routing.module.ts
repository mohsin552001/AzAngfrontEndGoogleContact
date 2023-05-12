import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactsComponent } from './contacts/contacts.component';

const routes: Routes = [{
  path:'contact',
  loadChildren:()=>
    import('./contact/contact.module').then((m)=>m.ContactModule)

},
{path:'',component:ContactsComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
