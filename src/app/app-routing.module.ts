import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClassroomListComponent } from './classroom-list/classroom-list.component';

const appRoutes: Routes = [
  { path: '', redirectTo: 'classroom', pathMatch: 'full'  },
  { path: 'classroom', component: ClassroomListComponent }
]; 

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
