import { Component } from '@angular/core';
import {TACHES} from './model/taches';
import {Tache} from './model/tache';
import {PersistanceService} from './persistance.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  taches = TACHES;
  tacheSelectionnee: Tache;

  constructor(public persistance: PersistanceService)
  {

  }

  onSelect(tache: Tache): void
  {
    this.tacheSelectionnee = tache;
  }

  marquerTacheFaite(index: number): void
  {
    this.taches[index].estValide = ! this.taches[index].estValide;
  }

  supprimerTache(index: number): void
  {
    this.taches.splice(index, 1);
  }
}
