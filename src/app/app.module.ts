import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { MediaItemComponent } from './media-item.component';
import { MediaItemListComponent } from './media-item-list.component';
// import { FavoriteDirective } from './favorite.directive';
// import { CategoryListPipe } from './category-list.pipe';
// import { MediaItemFormComponent } from './new-item/media-item-form.component';
import { MediaItemService } from './media-item.service';
import { lookupLists, lookupListToken } from './providers';
import { HttpClientModule, HttpXhrBackend } from '@angular/common/http';
import { MockXHRBackend } from './mock-xhr-backend';
import { routing } from './app.routing';
// import { NewItemModule } from './new-item/new-item.module';

@NgModule({
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    routing,
    // NewItemModule
  ],
  declarations: [
    AppComponent,
    MediaItemComponent,
    MediaItemListComponent,
    // FavoriteDirective,
    // CategoryListPipe,
    // MediaItemFormComponent
  ],
  providers: [
    { provide: lookupListToken, useValue: lookupLists },
    { provide: HttpXhrBackend, useClass: MockXHRBackend},
    MediaItemService
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule {}