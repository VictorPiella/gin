import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GinComponent } from './components/gin/gin.component';
import { GinListComponent } from './components/gin-list/gin-list.component';
import { appRouting } from './app.routes';

import { HttpClientModule } from '@angular/common/http';
import { ChartsModule } from 'ng2-charts';

@NgModule({
  declarations: [
    AppComponent,
    GinComponent,
    GinListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    appRouting,
    HttpClientModule,
    ChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
