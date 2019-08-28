import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {AccountInfoComponent} from './layout/account-info.component';
import {MainComponent} from './main/main.component';
import {HttpClientModule} from '@angular/common/http';
import {ValidatorsComponent} from './validators/validators.component';

@NgModule({
  declarations: [
    AppComponent,
    AccountInfoComponent,
    MainComponent,
    ValidatorsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
