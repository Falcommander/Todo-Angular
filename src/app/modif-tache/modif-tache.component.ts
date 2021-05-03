import {Component, Input, OnInit} from '@angular/core';
import {Tache} from '../model/tache';
import {PersistanceService} from '../persistance.service';

@Component({
  selector: 'app-modif-tache',
  templateUrl: './modif-tache.component.html',
  styleUrls: ['./modif-tache.component.css']
})
export class ModifTacheComponent implements OnInit {

  @Input() tache: Tache;
  priorites: string[] = ['faible', 'moyenne', 'haute'];

  constructor(private persistence: PersistanceService) { }

  ngOnInit(): void {
  }

}
