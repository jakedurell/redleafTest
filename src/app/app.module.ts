import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { InputsModule } from '@progress/kendo-angular-inputs';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { UserLoginComponent } from './user-login/user-login.component';
import { OfficesComponent } from './offices/offices.component';
// import { GridModule } from '@progress/kendo-angular-grid';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    UserLoginComponent,
    OfficesComponent,
  ],
  imports: [
    BrowserModule,
    InputsModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    // GridModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
