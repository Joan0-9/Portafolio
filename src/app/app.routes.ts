import { Routes } from '@angular/router';
import { AboutComponent } from './Pages/about/about.component';
import { ProjectComponent } from './Pages/project/project.component';
import { ContactComponent } from './Pages/contact/contact.component';


export const routes: Routes = [
    {path :'app-about', component:AboutComponent},
    {path :'app-project', component:ProjectComponent},
    {path :'app-contact', component:ContactComponent},

    {path :'**',redirectTo:'app-about', pathMatch:'full'}
];
