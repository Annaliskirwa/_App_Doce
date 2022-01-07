import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { MediaItemComponent } from './media-item.component';
import { MediaItemListComponent } from './media-item-list.component';
// import { FavoriteDirective } from './favorite.directive';
// import { CategoryListPipe } from './category-list.pipe';
import { MediaItemFormComponent } from './media-item-form.component';
import { MediaItemService } from './media-item.service';
import { lookupLists, lookupListToken } from './providers';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  declarations: [
    AppComponent,
    MediaItemComponent,
    MediaItemListComponent,
    // FavoriteDirective,
    // CategoryListPipe,
    MediaItemFormComponent
  ],
  providers: [
    { provide: lookupListToken, useValue: lookupLists },
    MediaItemService
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule {}