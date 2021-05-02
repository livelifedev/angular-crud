import { Component, OnInit } from '@angular/core';
import { CreaturesService } from '../shared/services/creatures.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],
})
export class NavComponent implements OnInit {
  creatures = null;

  constructor(private creaturesService: CreaturesService) {}

  ngOnInit(): void {
    this.loadCreatures();
  }

  loadCreatures() {
    this.creaturesService
      .all()
      .subscribe((creatures) => (this.creatures = creatures));
  }
}
