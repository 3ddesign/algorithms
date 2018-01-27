import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AuthorizationComponent} from './sections/authorization/authorization.component';
import {DashboardComponent} from './sections/dashboard/dashboard.component';
import {TasksComponent} from './sections/tasks/tasks.component';
import {ProfileComponent} from './sections/profile/profile.component';
import {EntitiesComponent} from './sections/entities/entities.component';
import {CorpusComponent} from './sections/corpus/corpus.component';
import {AnnotatorsComponent} from './sections/annotators/annotators.component';
import {CreateEntityComponent} from './sections/entities/create-entity/create-entity.component';
import {CreateTasksComponent} from './sections/tasks/create-tasks/create-tasks.component';
import {CreateCorpusComponent} from './sections/corpus/create-coprus/create-corpus.component';

export const appRoutes: Routes = [
  {path: '', component: AuthorizationComponent},
  {path: 'dashboard', component: DashboardComponent},
  {path: 'profile', component: ProfileComponent},
  {path: 'entities', component: EntitiesComponent},
  {path: 'create-entity', component: CreateEntityComponent},
  {path: 'create-task', component: CreateTasksComponent},
  {path: 'create-corpus', component: CreateCorpusComponent},
  {path: 'corpora', component: CorpusComponent},
  {path: 'annotators', component: AnnotatorsComponent},
  {path: 'tasks', component: TasksComponent},
  {path: '**', redirectTo: ''}
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes
    )
  ],
  exports: [
    RouterModule
  ]
})

export class AppRoutingModule {
}

export const routing: any = RouterModule.forRoot(appRoutes);
