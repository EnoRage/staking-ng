import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {AccountInfoComponent} from './layout/account-info.component';
import {MainComponent} from './main/main.component';
import {HttpClientModule} from '@angular/common/http';
import {PosDelegatorsComponent} from './pos-delegators/pos-delegators.component';
import { DetailsComponent } from './details/details.component';
import {CommonModule} from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    AccountInfoComponent,
    MainComponent,
    PosDelegatorsComponent,
    DetailsComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
