import { NgModule } from '@angular/core';
import { BrowserModule, HAMMER_GESTURE_CONFIG } from '@angular/platform-browser';
import { MaterialModuleImports } from './utils/material.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './view/home/home.component';
import { FloatingBarComponent } from './view/components/floating-bar/floating-bar.component';
import { TimelineTestComponent } from './view/components/timeline-test/timeline-test.component';
import { TimelineComponent } from './view/components/timeline/timeline.component';
import { CarouselComponent } from './view/components/carousel/carousel.component';
import { NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';
import { WorkHistoryCardComponent } from './view/components/work-history-card/work-history-card.component';
import { TagComponent } from './view/components/tag/tag.component';
import { ProfileCardComponent } from './view/components/profile-card/profile-card.component';
import { ProjectCardComponent } from './view/components/project-card/project-card.component';
import { MultidimensionalCarouselComponent } from './view/components/multidimensional-carousel/multidimensional-carousel.component';
import { HammerConfig } from './utils/hammer-config.module';
import { HammerModule } from '@angular/platform-browser';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FloatingBarComponent,
    TimelineTestComponent,
    TimelineComponent,
    CarouselComponent,
    WorkHistoryCardComponent,
    TagComponent,
    ProfileCardComponent,
    ProjectCardComponent,
    MultidimensionalCarouselComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModuleImports,
    BrowserAnimationsModule,
    NgbCarouselModule,
    HammerModule
  ],
  providers: [{
    provide: HAMMER_GESTURE_CONFIG,
    useClass: HammerConfig,
  }],
  bootstrap: [AppComponent]
})

export class AppModule {
}
