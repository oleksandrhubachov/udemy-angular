import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import {HeaderComponent} from './header/header.component';
import { RecipesComponent } from './recipes/recipes.component';
import { RecipeListComponent } from './recipes/recipe-list/recipe-list.component';
import { RecipeDetailComponent } from './recipes/recipe-detail/recipe-detail.component';
import { RecipeItemComponent } from './recipes/recipe-list/recipe-item/recipe-item.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { ShoppingEditComponent } from './shopping-list/shopping-edit/shopping-edit.component';
import {BasicHighlightDirective} from './basic-highlight/basic-highlight.directive';
import { BetterHighlightDirective } from './better-highlight/better-highlight.directive';
import { UnlessDirective } from './unless/unless.directive';
import { DropdownDirective } from './shared/dropdown.directive';
import {AccountComponent} from './account/account.component';
import {NewAccountComponent} from './new-account/new-account.component';
import {AccountsService} from './accounts.service';
import {LoggingService} from './logging.service';
import {ActiveUsersComponent} from './active-users/active-users.component';
import {InactiveUsersComponent} from './inactive-users/inactive-users.component';
import {UserService} from './user.service';
import {ShoppingListService} from './shopping-list/shopping-list.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RecipesComponent,
    RecipeListComponent,
    RecipeDetailComponent,
    RecipeItemComponent,
    ShoppingListComponent,
    ShoppingEditComponent,
    AccountComponent,
    NewAccountComponent,
    BasicHighlightDirective,
    BetterHighlightDirective,
    UnlessDirective,
    DropdownDirective,
    ActiveUsersComponent,
    InactiveUsersComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [AccountsService, LoggingService, UserService, ShoppingListService],
  bootstrap: [AppComponent]
})
export class AppModule { }
