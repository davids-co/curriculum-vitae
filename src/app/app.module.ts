import { NgModule, TestabilityRegistry } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { MaterialModuleImports } from './utils/material.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ToolbarComponent } from './view/components/toolbar/toolbar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './view/home/home.component';
import { FloatingBarComponent } from './view/components/floating-bar/floating-bar.component';
import { TimelineComponent } from './view/components/timeline/timeline.component';
import { Timeline2Component } from './view/components/timeline2/timeline2.component';
import { CarouselComponent } from './view/components/carousel/carousel.component';

@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    HomeComponent,
    FloatingBarComponent,
    TimelineComponent,
    Timeline2Component,
    CarouselComponent
  ],
  imports: [
    BrowserModule, 
    AppRoutingModule,
    MaterialModuleImports,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {


}
