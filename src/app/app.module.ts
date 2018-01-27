import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {MaterialModule} from './_shared/material/material.module';
import {routing} from './app.routing';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {AppComponent} from './app.component';
// import {DOMAIN} from '../config';
import {HttpModule} from '@angular/http';
import {DashboardComponent} from './sections/dashboard/dashboard.component';
import {AuthorizationComponent} from './sections/authorization/authorization.component';
import {MenuComponent} from './_shared/components/menu/menu.component';
import {FooterComponent} from './_shared/components/footer/footer.component';
import {TasksComponent} from './sections/tasks/tasks.component';
import {CorpusComponent} from './sections/corpus/corpus.component';
import {EntitiesComponent} from './sections/entities/entities.component';
import {AnnotatorsComponent} from './sections/annotators/annotators.component';
import {ProfileComponent} from './sections/profile/profile.component';
import {CreateEntityComponent} from './sections/entities/create-entity/create-entity.component';
import {CreateCorpusComponent} from './sections/corpus/create-coprus/create-corpus.component';
import {CreateTasksComponent} from './sections/tasks/create-tasks/create-tasks.component';
import 'rxjs';
import { Http, RequestOptions } from '@angular/http';
import { AuthConfig, AuthHttp } from 'angular2-jwt';
import {AuthService} from './_shared/services/auth.service';
import {PropertyService} from './_shared/services/property.service';

export function authHttpServiceFactory(http: Http, options: RequestOptions): any {
  return new AuthHttp(new AuthConfig({
    tokenGetter: (() => localStorage.getItem('access_token'))
  }), http, options);
}


@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    AuthorizationComponent,
    MenuComponent,
    FooterComponent,
    TasksComponent,
    CorpusComponent,
    EntitiesComponent,
    AnnotatorsComponent,
    ProfileComponent,
    CreateEntityComponent,
    CreateCorpusComponent,
    CreateTasksComponent
  ],
  imports: [
    routing,
    HttpModule,
    BrowserModule,
    MaterialModule,
    BrowserAnimationsModule,
  ],
  providers: [
    AuthService,
    PropertyService,
    {
      // provide: 'DOMAIN',
      // useValue: DOMAIN,
      provide: AuthHttp,
      useFactory: authHttpServiceFactory,
      deps: [Http, RequestOptions]
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
