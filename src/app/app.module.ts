import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRouting } from './modules/app.routing';
import { FilterPipe } from './shared/pipes/filter.pipe';
import { LoginComponent } from './login/login.component';
import { MainModule } from './modules/main.module';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,    
  ],
  imports: [
    BrowserModule,
    AppRouting,
    MainModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
