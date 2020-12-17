import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { routing, appRoutingProviders} from './app-routing'

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { CowsComponent } from './components/cows/cows.component';
import { FooterComponent } from './components/footer/footer.component';
import { NosotrosComponent } from './components/nosotros/nosotros.component';
import { ContactaComponent } from './components/contacta/contacta.component';
import { ErrorComponent } from './components/error/error.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CowsComponent,
    FooterComponent,
    NosotrosComponent,
    ContactaComponent,
    ErrorComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    routing,
  ],
  providers: [appRoutingProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
