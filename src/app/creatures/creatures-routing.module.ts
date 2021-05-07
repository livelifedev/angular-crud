import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreatureDetailComponent } from './creature-detail/creature-detail.component';

const routes: Routes = [
  { path: 'creatures', redirectTo: '/home' },
  { path: 'creature/:id', component: CreatureDetailComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CreaturesRoutingModule {}
