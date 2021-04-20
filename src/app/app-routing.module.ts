import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentCreateComponent } from './student-create/student-create.component';
import { StudentEditComponent } from './student-edit/student-edit.component';
import { StudentAllComponent } from './student-all/student-all.component';

const routes: Routes = [
  { path:'all',component:StudentAllComponent},
  { path:'add',component:StudentCreateComponent},
  { path:'edit/:id',component:StudentEditComponent},
  { path:'',redirectTo:'all',pathMatch:'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
