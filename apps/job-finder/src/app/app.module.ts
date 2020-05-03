import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatCardModule } from '@angular/material/card';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PreloadAllModules, RouterModule } from '@angular/router';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { AboutComponent } from './about/about.component';
import { OurTeamComponent } from './about/our-team/our-team.component';
import { TeamMemberComponent } from './about/our-team/team-member/team-member.component';
import { AppComponent } from './app.component';
import { AppRoutes } from './app.routing.module';
import { CoreModule } from './core/core.module';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    OurTeamComponent,
    TeamMemberComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    CoreModule,
    MatCardModule,
    FlexLayoutModule,
    RouterModule.forRoot(AppRoutes, { preloadingStrategy: PreloadAllModules }),
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
