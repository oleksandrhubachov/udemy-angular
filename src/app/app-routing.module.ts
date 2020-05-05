import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {UsersComponent} from './users/users.component';
import {UserComponent} from './users/user/user.component';
import {ServersComponent} from './servers/servers.component';
import {ServerComponent} from './servers/server/server.component';
import {EditServerComponent} from './servers/edit-server/edit-server.component';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';
import {AuthGuardService} from './auth-guard.service';
import {CanDeactivateGuardService} from './servers/edit-server/can-deactivate-guard.service';
import {ErrorPageComponent} from './error-page/error-page.component';
import {ServerResolver} from './servers/server/server-resolver.service';
import {RecipesComponent} from './recipes/recipes.component';
import {ShoppingListComponent} from './shopping-list/shopping-list.component';

// const appRoutes: Routes = [
//   {path: '', component: HomeComponent},
//   {path: 'users', component: UsersComponent, children: [
//       {path: ':id/:name', component: UserComponent}
//     ]},
//   {
//     path: 'servers',
//     // canActivate: [AuthGuardService],
//     canActivateChild: [AuthGuardService],
//     component: ServersComponent,
//     children: [
//       {path: ':id', component: ServerComponent, resolve: {server: ServerResolver}},
//       {path: ':id/edit', component: EditServerComponent, canDeactivate: [CanDeactivateGuardService]}
//     ]},
//   // {path: 'not-found', component: PageNotFoundComponent},
//   {path: 'not-found', component: ErrorPageComponent, data: {message: 'Page not found!'}},
//   {path: '**', redirectTo: '/not-found'}
// ];

const appRoutes: Routes = [
  {path: '', redirectTo: '/recipes', pathMatch: 'full'},
  {path: 'recipes', component: RecipesComponent},
  {path: 'shopping-list', component: ShoppingListComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes /*, {useHash: true}*/)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
