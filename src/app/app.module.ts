import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderModule } from './shared/header/header.module';
import { SidebarModule } from './shared/sidebar/sidebar.module';
import { ContactsComponent } from './contacts/contacts.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AvatarModule } from './shared/avatar/avatar.module';




@NgModule({
  declarations: [
    AppComponent,
    ContactsComponent,





  ],
  imports: [
    BrowserModule,
    AppRoutingModule,HeaderModule,SidebarModule, FontAwesomeModule,AvatarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
