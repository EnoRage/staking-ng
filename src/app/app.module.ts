import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {AccountInfoComponent} from './layout/account-info.component';
import {MainComponent} from './main/main.component';
import {HttpClientModule} from '@angular/common/http';
import {RowComponent} from './row/row.component';
import {PosDelegatorsComponent} from './pos-delegators/pos-delegators.component';

@NgModule({
  declarations: [
    AppComponent,
    AccountInfoComponent,
    MainComponent,
    PosDelegatorsComponent,
    RowComponent
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
