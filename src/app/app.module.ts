import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SkillsComponent } from './skills/skills.component';
import {SkillsService} from './services/skills.service';
import { ContactscomponentComponent } from './contactscomponent/contactscomponent.component';
import { GreetingComponent } from './greeting/greeting.component';
import { ContactFormComponent } from './contact-form/contact-form.component';  
@NgModule({
  declarations: [
    AppComponent,
    SkillsComponent,
    ContactscomponentComponent,
    GreetingComponent,
    ContactFormComponent
  ],
  imports: [
    BrowserModule,FormsModule,
    AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
