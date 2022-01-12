import { Routes, RouterModule } from "@angular/router";
// import { MediaItemFormComponent } from "./new-item/media-item-form.component";
import { MediaItemListComponent } from "./media-item-list.component";
import { AngularcliComponent } from "./angularcli/angularcli.component";
const appRoutes: Routes= [
    {
        path: 'add',
        loadChildren: () => import('./new-item/new-item.module').then(m => m.NewItemModule)
    },
    // {path: 'add', component:MediaItemFormComponent},
    {path: 'cli', component: AngularcliComponent},
    {path: ':medium', component:MediaItemListComponent},
    {path:'', redirectTo:'all',pathMatch:'full'},
    
];

export const routing = RouterModule.forRoot(appRoutes);