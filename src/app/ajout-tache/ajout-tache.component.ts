import { Component, OnInit } from '@angular/core';
import {TACHES} from '../model/taches';
import {PersistanceService} from '../persistance.service';
import {Tache} from '../model/tache';

@Component({
  selector: 'app-ajout-tache',
  templateUrl: './ajout-tache.component.html',
  styleUrls: ['./ajout-tache.component.css']
})
export class AjoutTacheComponent implements OnInit {
  taches = TACHES;
  tacheLibelle: string;
  tacheDate: Date;
  tachePriorite: string;
  tacheDescription: string;
  priorites: string[] = ['faible', 'moyenne', 'haute'];
  prioriteParDefaut = this.priorites[0];


  constructor(private persistance: PersistanceService) { }

  ngOnInit(): void {
  }

  ajouterTache(libelle: string, date: Date, priorite: string, description: string): void
  {
    const liste: Tache[] = this.persistance.get('taches');
    const nouvelleTache = {libelle: libelle, date: new Date(date), priorite: priorite, description: description, estValide: false};
    liste.push(nouvelleTache);
    this.persistance.set('taches', liste);
    this.reinitialiser();
  }

  reinitialiser(): void
  {
    this.tacheLibelle = '';
    this.tacheDate = null;
    this.tachePriorite = this.prioriteParDefaut;
    this.tacheDescription = '';
  }

}
