import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CreaturesRoutingModule } from './creatures-routing.module';
import { CreatureDetailComponent } from './creature-detail/creature-detail.component';

@NgModule({
  declarations: [
    CreatureDetailComponent
  ],
  imports: [CommonModule, CreaturesRoutingModule],
})
export class CreaturesModule {}
